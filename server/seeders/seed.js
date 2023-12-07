const { describe } = require('node:test');
const connection = require('../config/connection');
const { User, Post, Friend, Program, Workout } = require('../models');
const { getRandomMediaURL, createWorkout, createUser, getRandomPosts, getRandomComment, getRandomArrItem, getRandomNumber, workoutChoices, randomProgramDescription, randomProgramName } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
      await connection.dropCollection('users');
    }

    let postsCheck = await connection.db.listCollections({ name: 'posts' }).toArray();
    if (postsCheck.length) {
      await connection.dropCollection('posts');
    }

    let programsCheck = await connection.db.listCollections({ name: 'programs' }).toArray();
    if (programsCheck.length) {
      await connection.dropCollection('programs');
    }

    let workoutsCheck = await connection.db.listCollections({ name: 'workouts' }).toArray();
    if (workoutsCheck.length) {
      await connection.dropCollection('workouts');
    }

  // Create empty array to hold the users
  const users = [];
  const workouts = []

  // Loop 20 times -- add users to the users array
  for (let i = 0; i < 10; i++) {
    // Get some random user and workout objects using a helper function that we imported from ./data
    const user = createUser()
    users.push({
      ...user
    });

    const workout = createWorkout()
    workouts.push({
      ...workout
    });

  }
    
  // Add users to the collection and await the results
  await User.collection.insertMany(users);
  await Workout.collection.insertMany(workouts);
  
  for (let i = 0; i < users.length; i++) {
    
    const int = Math.floor(Math.random() * 6)
    for (let x = 0; x < int; x++) {
      const user = users[i]
      const friend = getRandomArrItem(users)
      if ( user._id !== friend._id) {
        await User.findOneAndUpdate(
          { _id: user._id },
          { $addToSet: { friends: friend._id } },
          { new: true }
          )
        }
      } 
    }
    
  const posts = []

  users.forEach(user => {
      const randomPosts = getRandomPosts()
      
      randomPosts.forEach(post => {
        const randomWorkout = getRandomArrItem(workouts)
        const randomMedia = getRandomMediaURL()
        posts.push({
          mediaUrl: randomMedia,
          postText: post,
          workoutId: randomWorkout._id,
          workoutName: randomWorkout.name,
          userId: user._id,
          username: user.username,
        })
      });
  });

  // Add posts to the collection and await the results
  for (let i = 0; i < posts.length; i++) { 
    const post = await Post.create(posts[i])
    const user = getRandomArrItem(users)
    await User.findOneAndUpdate(
      { username: user.username },
      { $addToSet: { posts: post._id } },
      { new: true },
      );
    const randomComments = getRandomComment()
    for (let i = 0; i < randomComments.length; i++) {
      const body = {
        commentText: randomComments[i],
        username: user.username,
        userId: user._id,
        postId: post._id
      };
      await Post.findOneAndUpdate(
        { _id: post._id },
        { $addToSet: { comments: body } },
        { new: true }
      );
    }
  };

  const programs = []

  for (let i = 0; i < 15; i++) {
    const name = randomProgramName()
    const description = randomProgramDescription()
    const workoutOptions = workoutChoices(workouts)
    const duration = workoutOptions.length
    programs.push({
      name: name,
      description: description,
      duration: `${duration} Days`,
      workouts: workoutOptions
    })
    await Program.create({
      name: name,
      description: description,
      duration: `${duration} Days`,
      workouts: workoutOptions
    })
  };

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(workouts)
  console.table(programs)
  console.table(posts)
  console.info('Seeding complete! 🌱');
  process.exit(0);
});