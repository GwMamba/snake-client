const net = require("net");

// create the server
const config = {
  port: 50541, // PORT number here
  host: "165.227.47.243" // IP address here,
};

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection(config);

  // interpret incoming data as text, sets the encoding of the connection
  conn.setEncoding("utf8");

  // prints this when a successful connection is made.
  conn.on("connect", () => {
    console.log("connected to server");
  });
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  return conn;
};

console.log("Connecting ...");
connect();