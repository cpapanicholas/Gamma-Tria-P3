const User = require('./models/User.js')

const resolvers = {
  Query: {
    getUser: async (parent ,{_id}) => {
      try {
        const user = await User.findById(_id);
        return user;
      } catch (error){
        throw new Error('Cannot find User by ID')
      }
    },

    
  },

  Mutation: {
    createUser: async (parent, {input }) => {
      try {
        const user = await User.create(input);
        return user;
      }catch (error){
        throw new Error('Error Creating User')
      }
    },
    User: {

    },
    addPost: async (parent, { postText, postAuthor }) => {
      return Post.create({ postText, postAuthor });
    },
    addComment: async (parent, { postId, commentText }) => {
      return Post.findOneAndUpdate(
        { _id: postId },
        {
          $addToSet: { comments: { commentText } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removePost: async (parent, { postId }) => {
      return Post.findOneAndDelete({ _id: postId });
    },
    removeComment: async (parent, { postId, commentId }) => {
      return Post.findOneAndUpdate(
        { _id: postId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
