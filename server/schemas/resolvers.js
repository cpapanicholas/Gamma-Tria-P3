const { User, Post, Program, Workout, Friend } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

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
    getWorkoutById: async (_, { _id }) => {
      try {
        const workout = await Workout.findOne({ _id });

        if (!workout) {
          throw new Error('Workout not found');
        }
        return workout;
      } catch (error) {
        console.error(error)
        console.error('Error fetching workout:', error.message);
        throw new Error('Failed to fetch workout');
      }
    },
    getAllWorkouts: async () => {
      try {
        const workouts = await Workout.find();
        return workouts;
      } catch (error) {
        console.error('Error fetching workouts:', error.message);
        throw new Error('Failed to fetch workouts');
      }
    },
    getWorkoutByOriginalId: async (_, { originalId }, context) => {
      try {
        const workout = await Workout.findOne({ originalId: originalId });
    
        if (!workout) {
          throw new Error('Workout not found');
        }
    
        return workout;
      } catch (error) {
        console.error(error);
        console.error('Error fetching workout:', error.message);
        throw new Error('Failed to fetch workout');
      }
    },
    getAllPublicWorkouts: async (_, __, context) => {
      try {
        const workouts = await Workout.find({ originalId: ''});
    
        return workouts;
      } catch (error) {
        console.error('Error fetching workouts:', error.message);
        throw new Error('Failed to fetch workouts');
      }
    },
    getAllPublicPrograms: async (_, __, context) => {
      try {
        const programs = await Program.find({ originalId: ''});
    
        return programs;
      } catch (error) {
        console.error('Error fetching programs:', error.message);
        throw new Error('Failed to fetch programs');
      }
    },
    getProgramById: async (_, { programId }, context) => {
      try {
        const program = await Program.findById(programId);
    
        if (!program) {
          throw new Error('Program not found');
        }
    
        return program;
      } catch (error) {
        console.error('Error fetching program:', error.message);
        throw new Error('Failed to fetch program');
      }
    },
    getProgramsByByUser: async (_, { userId }, context) => {
      try {
        const programs = await Program.find({ userId: userId });
    
        if (!programs) {
          throw new Error('Programs not found');
        }
    
        return programs;
      } catch (error) {
        console.error('Error fetching programs:', error.message);
        throw new Error('Failed to fetch programs');
      }
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
      // console.log({ token, user });

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
    createProgram: async (_, { programInput }, context) => {
      try {
        // Assuming you're using Mongoose for MongoDB
        const program = await Program.create(programInput);

        if (programInput.userId != "") {
          await User.findOneAndUpdate(
            { _id: programInput.userId },
            { $addToSet: { workouts: programInput._id } }
          );
        }
    
        return program;
      } catch (error) {
        console.error(error)
        console.error('Error creating program:', error.message);
        throw new Error('Failed to create program');
      }
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
    // removeFriend: async (parent, { friendId }, context) => {
    //   if (context.user) {
    //     try {
    //       // Remove friend entry
    //       await Friend.findOneAndDelete({
    //         _id: friendId,
    //         userId: context.user._id,
    //       });

    //       // Update user's friends array
    //       await User.findOneAndUpdate(
    //         { _id: context.user._id },
    //         { $pull: { friends: friendId } }
    //       );

    //       return { success: true, message: 'Friend removed successfully' };
    //     } catch (error) {
    //       console.error(error);
    //       return { success: false, message: 'Error removing friend' };
    //     }
    //   }
    //   throw AuthenticationError;
    // },
    updateWorkout: async (parent, { workoutId, updatedWorkout }) => {
      try {
        // Assuming you're using Mongoose for MongoDB
        const workout = await Workout.findByIdAndUpdate(
          workoutId,
          updatedWorkout,
          { new: true }
        );

        if (!updatedWorkout) {
          throw new Error('Workout not found');
        }

        return workout;
      } catch (error) {
        // Handle the error as needed, log it, etc.
        console.error('Error updating workout:', error.message);
        throw new Error('Failed to update workout');
      }
    },
    createWorkout: async (_, { workoutInput }, context) => {
      try {
        const createdWorkout = await Workout.create(workoutInput);

        if (workoutInput.userId != "") {
          await User.findOneAndUpdate(
            { _id: workoutInput.userId },
            { $addToSet: { workouts: createdWorkout._id } }
          );
        }

        return createdWorkout
      } catch (error) {
        console.error('Error creating workout:', error.message);
        throw new Error('Failed to create workout');
      }
    },
  }
};

module.exports = resolvers;
