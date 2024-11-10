const fs = require("fs");

fs.readFile("output.txt", (err, data) => {
  if (err) throw err;

  console.log(data.toString());
});
