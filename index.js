const fs = require("fs");
const http = require("http");
const { type } = require("os");

const slugify = require("slugify");

// Blocking way
// const valIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(valIn);

// const valOut = `Here is the new Updated news: ${valIn}`;
// fs.writeFileSync("./txt/output.txt", valOut);

// console.log("Hello!");

// Non-Blocking way
// fs.readFile("./txt/start.txt", "utf-8", function (err, data1) {
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", function (err, data2) {
//     fs.writeFile(
//       "./txt/newFile.txt",
//       `${data1}\n${data2}`,
//       "utf-8",
//       function (err) {
//         if (err) console.log("error while writing...");
//       }
//     );
//   });
// });

// Web server

// const cardTemp = fs.readFileSync(
//   `${__dirname}/templates/template-card`,
//   "utf-8"
// );

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataobj = JSON.parse(data);

const server = http.createServer(function (req, res) {
  const url = req.url;
  if (url === "/" || url === "/overview") {
    data.forE;
    res.end("This is overview");
  } else if (url === "/product") {
    res.end("This is Product");
  } else if (url === "/api") {
    fs.readFile(
      `${__dirname}/dev-data/data.json`,
      "utf-8",
      function (error, data) {
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(data);
      }
    );
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("page not found");
  }
});

server.listen(8000, function () {
  console.log("Server listening on  PORT: 8000");
});
