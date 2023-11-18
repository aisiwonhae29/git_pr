var fs = require("fs");

fs.readFile("./get_word.js", function (err, data) {
  if (err) {
    return console.log(err);
  }

  console.log("Asynchronous read: " + data.toString());
});
