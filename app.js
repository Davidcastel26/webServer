
const http = require('http');

http.createServer((req, res) => {

    // res.writeHead(200, {'Content-Type':'text/plain'})
    // res.writeHead(200, {'Content-Type':'application/json'}) // show the object in the browser
    res.setHeader('Content-Disposition','attachment; filename=lista.csv') // download file
    res.writeHead(200, {'Content-Type':'application/csv'}) // download file
    // console.log(req);
    // res.writeHead(404)
    
    // const persona = {
        // id:1,
        // nombres: 'Fernando',
    // }

    res.write('id, nombre\n');
    res.write('23, dave\n');
    res.write('23, anna\n');
    res.write('1, sofi\n');
    res.write('2, ale\n');
    

    // res.write(JSON.stringify(persona));
    // res.write('404 | Page not found');
    res.end()
})
.listen(8080);

console.log('escuchando en el purto', 8080); 