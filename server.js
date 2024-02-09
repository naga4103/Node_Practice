// const http = require("http");
// const hostname = "127.0.0.1";
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World\n");
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
// console.log("Without setTimeout");
// setTimeout(() => {
//   console.log("Hiiiii");
// }, 2000);

// setTimeout(() => {
//   console.log("Hello");
// }, 50);

// const myFunction = (firstParam, secondParam, thridParam) => {
//   console.log("Sum...", firstParam + secondParam + thridParam);
// };
// // runs after 2 seconds
// setTimeout(myFunction, 3000, 2, 3, 4);

// let timerId = setTimeout(function () {
//   console.log("This won't be executed");
// }, 2000);

// Cancel the timeout before it executes
// clearTimeout(timerId);
const id = setTimeout(() => {
  // should run after 2 seconds
  console.log("Hello");
}, 2000);
// I changed my mind
// clearTimeout(id);

console.log("Timer Id...", id);
