
const http = require('http')

http.createServer((req, res)=>{
    res.write('hola dave');
    res.end()
})

.listen(8080);

console.log('escuchando en el purto', 8080);