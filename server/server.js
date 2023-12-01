const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');

const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Specify the destination folder

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Middleware for handling JSON and URL-encoded data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Handle file uploads using multer middleware
app.post('/upload', upload.single('file'), (req, res) => {
  // Access the uploaded file through req.file
  // Process and store the file, generate a URL, and save it to the database
  console.log(req.file); // Access the uploaded file details
  res.send('File uploaded successfully'); // Respond to the client
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

// Apollo Server middleware
app.use('/graphql', expressMiddleware(server));

// Connect to the database and start the server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
});

// Call the async function to start the server
ApolloServer();
