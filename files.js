const fs = require("fs");
fs.readFile("file.json", (err, data) => {
  if (err) {
    // handle error
    console.log(err);
    return;
  }
  // no errors, process data
  console.log("Data", data);
  console.log("Type of Data", typeof data);

  const jsonString = data.toString("utf8");

  console.log("Json String...", jsonString);
});

console.log({ name: "Naga" });
