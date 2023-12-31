const connect = require("./client");
const net = require("net");

let connection;


// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // Register an event listener for stdIn, the callback is a function that run when you receive input from keyboard
  stdin.on("data", handleUserInput);

  // returning the stdin object from the setupInput function allows us to interact with server via keyboard input
  return stdin;
};

const handleUserInput = function(key) {
  // checks cntrl+c to terminate the game, otherwise it'll keep running
  if (key === "\u0003") {
    process.exit();
  }

  if (key === "w") {
    connection.write("Move: up");
  }

  if (key === "a") {
    connection.write("Move: left");
  }

  if (key === "s") {
    connection.write("Move: down");
  }

  if (key === "d") {
    connection.write("Move: right");
  }

};

module.exports = { setupInput };