const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(__dirname + "/dist/fchat"));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/fchat/index.html"));
});
app.listen(process.env.PORT || 8081);
