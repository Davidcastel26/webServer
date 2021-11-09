const express = require('express')
const app = express()
const port = 8080;
 
//server a static content
app.use( express.static('public') )

// app.get('/', function (req, res) {
//   res.send('Hello World')
// // })
// app.get('/hey-dave', (req, res) => {
//   res.send('Hello World')
// }) 

app.get('/generic', (req, res) =>{
  res.sendFile(__dirname + '/public/generic.html')
})

app.get('/elements', (req, res) =>{
  res.sendFile(__dirname + '/public/elements.html')
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
})
 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}) 