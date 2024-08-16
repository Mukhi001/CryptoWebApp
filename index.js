// Import the json-server library
const jsonServer = require("json-server");

// Create a new JSON server instance
const server = jsonServer.create();

// Create a router that uses the db.json file for data
const router = jsonServer.router("db.json");

// Use default middlewares (logger, static, cors, no-cache)
const middlewares = jsonServer.defaults();

// Choose a port from the environment variable or default to 4000
const port = process.env.PORT || 4000;

// Use the middlewares in the server
server.use(middlewares);

// Use the router in the server
server.use(router);

// Listen on the specified port and log the server status
server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});
