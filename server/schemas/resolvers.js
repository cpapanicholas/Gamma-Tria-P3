const { User, Post, Program, Workout, Friend } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const { createWriteStream } = require('fs');
const { resolve } = require('path');
const { graphqlUploadExpress } = require('graphql-upload');

const processUpload = async (file, subdirectory) => {
  const { createReadStream, filename } = await file;

  // Specify the path to store the uploaded file
  const filePath = resolve(__dirname, 'uploads', subdirectory, filename);

  // Create a writable stream and pipe the read stream to it
  const writeStream = createWriteStream(filePath);
  await new Promise((resolve) =>
    createReadStream().pipe(writeStream).on('finish', resolve)
  );

  // Return the file path or URL
  return filePath; // Adjust this based on your needs
};
const resolvers = {
  Query: {
    getAllUsers: async () => {
      return User.find();
    },
    getUser: async (parent, { _id }) => {
      return User.findOne({ _id })
        .populate('posts')
        .populate('friends')
        .populate('workouts')
        .populate('programs');
    },
    getAllPostsOfUser: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Post.find(params)
        .sort({ createdAt: -1 })
        .populate('comments');
    },
    getAllPrograms: async () => {
      return Program.find();
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id })
          .populate('posts')
          .populate('friends')
          .populate('workouts')
          .populate('programs');
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent,  {input} ) => {
      console.log(input);
      try {
        const user = await User.create(input);
        const token = signToken(user);
        return { token, user };
      } catch (error) {
        console.error(error);
        throw new Error('Error creating user');
      }
    },
    login: async (parent, { email, password }) => {
      console.log('clicked');
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      console.log({ token, user });

      return { token, user };
    },
    addPost: async (parent, { postText }, context) => {
      if (context.user) {
        const post = await Post.create({
          postText,
          postAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { posts: post._id } }
        );

        return post;
      }
      throw AuthenticationError;
      ('You need to be logged in!');
    },
    addComment: async (parent, { postId, commentText }, context) => {
      if (context.user) {
        return Post.findOneAndUpdate(
          { _id: postId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw AuthenticationError;
    },
    removePost: async (parent, { postId }, context) => {
      if (context.user) {
        const post = await Post.findOneAndDelete({
          _id: postId,
          postAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { posts: post._id } }
        );

        return post;
      }
      throw AuthenticationError;
    },
    removeComment: async (parent, { postId, commentId }, context) => {
      if (context.user) {
        return Post.findOneAndUpdate(
          { _id: postId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
    createWorkout: async (parent, { input }) => {
      try {
        const workout = await Workout.create(input);

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { workouts: workout._id } }
        );

        return workout;
      } catch (error) {
        throw new Error('Error creating workout');
      }
    },
    createProgram: async (parent, { name, workoutIds }) => {
      try {
        const program = await Program.create({ name, workouts: workoutIds });
        return program;
      } catch (error) {
        throw new Error('Error creating program');
      }
    },
    addProgram: async (parent, { programId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { programs: programID } }
        );
      }
      throw AuthenticationError;
    },
    uploadFile: async (_, { file }) => {
      return processUpload(file, 'uploads');
    },
    addFriend: async (parent, { friendId }, context) => {
      if (context.user) {
        const friend = await Friend.create({
          userId: context.user._id,
          friendId: friendId,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friends: friend._id } }
        );

        return friend;
      }
      throw AuthenticationError
      ('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
