var express = require('express')
var app = express()
app.use(express.static("./dist"));
app.get('./',function(req, res) {
  res.sendFile("./index.html");
})
app.listen(9000)
