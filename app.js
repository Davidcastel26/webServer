require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
// const port = 8080;
const port = process.env.PORT;


// todo : require('hbs' ) 
//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')

//server a static content
app.use( express.static('public'));

// app.get('/', (req, res) =>{
//   res.send(' what supp')
// })
app.get('/',(req, res)=> {
  res.render('home', {
    name:'David Larios',
    title: 'Node course'
  })
});

// app.get('/hey-dave', (req, res) => {
//   res.send('Hello World')
// }) 

// app.get('/generic', (req, res) =>{
//   res.sendFile(__dirname + '/public/generic.html')
// })
app.get('/generic', (req, res) =>{
  res.render('generic',
  {
    name:'David Larios',
    title: 'Node course'
  });
})

// app.get('/elements', (req, res) =>{
//   res.sendFile(__dirname + '/public/elements.html')
// })
app.get('/elements', (req, res) =>{
  res.render('elements',{
    name:'David Larios',
    title: 'Node course'
  });
})


app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
})
// app.get('*', (req, res) => {
//   res.render('404')
// }) 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}) 