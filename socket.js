const socketsIO = require("socket.io")();

let name = "Anonimous";

socketsIO.on("connection", client => {
  console.log("made socket connection", client.id);

  client.emit("name", name);

  client.on("updateName", clientName => {
    console.log("client is subscribing to timer with interval ", clientName);

    name = clientName;
    socketsIO.emit("name", name);
  });
});

const port = 8000;
socketsIO.listen(port);
console.log("listening on port ", port);
