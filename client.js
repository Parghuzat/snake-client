
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',// IP adress here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;