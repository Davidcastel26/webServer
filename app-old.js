
const http = require('http');

http.createServer((req, res) => {

    //---------------------------------------------------------------------------------------
    // res.writeHead(200, {'Content-Type':'text/plain'})
    // console.log(req);
    // res.writeHead(404)  
    // const person = {
        // id:1,
        // names: 'Fernando',
    // }
    // res.write(JSON.stringify(persona));
    // res.write('404 | Page not found');

    //---------------------------------------------------------------------------------------
    // res.writeHead(200, {'Content-Type':'application/json'}) // show the object in the browser
    // res.setHeader('Content-Disposition','attachment; filename=lista.csv') // download file
    // res.writeHead(200, {'Content-Type':'application/csv'}) // download file
    // res.write('id, NAME\n');
    // res.write('23, dave\n');
    // res.write('23, anna\n');
    // res.write('1, sofi\n');
    // res.write('2, ale\n');
    //---------------------------------------------------------------------------------------

  
    res.write('Hello YO');
    res.end()
})
.listen(8080);

console.log('escuchando en el purto', 8080); 