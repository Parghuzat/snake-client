
const net = require("net");
const {HOST, PORT} = require("./constant");
const connect = function () {
  const conn = net.createConnection({
    host: HOST, // IP adress here,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;