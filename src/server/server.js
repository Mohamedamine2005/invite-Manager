const http = require("http");
const express = require("express");
const app = express();
app.set("views", __dirname + "/views");
app.set("view engine", "pug");
app.get("/", (req, res) => {
  res.render("index")
});
app.get("/src", (req, res) => {
  res.render("src");
});
app.get("/cmd", (req, res) => {
  res.render("cmd");
});
app.use(express.static(`${__dirname}/assets`));
app.locals.basedir = `${__dirname}/assets`;
app.use("/ping", (req, res) => {
  res.send(new Date());
});
app.listen(process.env.PORT || 3000);
setInterval(() => {
  http.get(`http://ncr-codes.glitch.me/`);
}, 280000);

const request = require("node-superfetch");
setInterval(async () => {
  await request.get("http://ncr-codes.glitch.me/");
  await request.get("https://ncr-codes.glitch.me/");
}, 5 * 60 * 1000);
