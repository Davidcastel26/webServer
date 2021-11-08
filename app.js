const express = require('express')
const app = express()
const port = 8080;
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/hey-dave', (req, res) => {
  res.send('Hello World')
})
app.get('*', (req, res) => {
  res.send('What are you looking at this time? cuz we didnt find it')
})
 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}) 