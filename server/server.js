// const express = require('express');
// // const { Server } = require('socket.io');
// const http = require('http');
// const path = require('path');
// const { authMiddleware } = require('./utils/auth');
// const { typeDefs, resolvers } = require('./schemas');
// const db = require('./config/connection');

// const PORT = process.env.PORT || 3001;
// const app = express();
// const httpServer = http.createServer(app);

// // Apollo Server setup
// const apolloServer = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: authMiddleware,
// });

// async function startApolloServer() {
//   await apolloServer.start();
//   apolloServer.applyMiddleware({
//     app,
//     path: '/graphql',
//   });
// }

// startApolloServer();

// // Serve static files in production
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/dist')));
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/dist/index.html'));
//   });
// }

// // Socket.IO setup
// const io = new Server(httpServer);

// io.on('connection', (socket) => {
//   socket.on('join', (data) => {
//     const { room, username } = data;
//     const sockID = socket.id;
//     console.log(`${username} of socket ID ${sockID} has joined`);
//     socket.join(room);
//     console.log(`${username} has been added to room number ${room}`);
//     socket.in(room).emit('notification', { notification: `${username} has joined` });

//     socket.on('message', (message, username) => {
//       console.log(message + ' ' + username);
//       io.in(room).emit('message', { sent: message, username });
//     });

//     socket.on('disconnect', () => {
//       console.log(`${username} of ${sockID} has disconnected from room ${room}`);
//       io.in(room).emit('notification', { notification: `${username} has left` });
//     });
//   });
// });

// // Start the Apollo Server and Socket.IO server
// db.once('open', () => {
//   httpServer.listen(PORT, () => {
//     console.log(`API server running on port ${PORT}!`);
//     console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
//   });
// });

// Socket.IO setup
// const io = new Server(httpServer);

// io.on('connection', (socket) => {
//   socket.on('join', (data) => {
//     const { room, username } = data;
//     const sockID = socket.id;
//     console.log(`${username} of socket ID ${sockID} has joined`);
//     socket.join(room);
//     console.log(`${username} has been added to room number ${room}`);
//     socket.in(room).emit('notification', { notification: `${username} has joined` });

//     socket.on('message', (message, username) => {
//       console.log(message + ' ' + username);
//       io.in(room).emit('message', { sent: message, username });
//     });

//     socket.on('disconnect', () => {
//       console.log(`${username} of ${sockID} has disconnected from room ${room}`);
//       io.in(room).emit('notification', { notification: `${username} has left` });
//     });
//   });
// });

const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { authMiddleware } = require('./utils/auth')

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  }));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

// Call the async function to start the server
startApolloServer();

