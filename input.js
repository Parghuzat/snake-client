let connection;



const setupInput =  (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


const handleUserInput = function (key) {
  if (key === '\u0003') {
  process.exit();
}
  if (key === '\u0077') {  //w
    connection.write("Move: up");
  }
  if (key === '\u0061') { //a
  connection.write("Move: left");
}
  if (key === '\u0073') { //s
    connection.write("Move: down");
  }
  if (key === '\u0064') { //d
    connection.write("Move: right");
  }
  if (key === '\u006c') {
    connection.write("Say: hello!");
  }
};

module.exports = setupInput;
