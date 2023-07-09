// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();

// server.use(middlewares);
// server.use(jsonServer.bodyParser);

// // Add custom routes or modifications here (if needed)

// server.use('/todos', router); // Set the base URL for JSON Server

// const port = 3001; // Choose the port number

// server.listen(port, () => {
//   console.log(`JSON Server is running on port ${port}`);
// });

// module.exports = server

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
// Add this before server.use(router)

server.use(router)
server.listen(3001, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server