const http = require ('http')
const fs = require('fs')
const { text } = require('stream/consumers')

// constante del puerto

const PORT = 3000

//Creación del servidor
const servidor = http.createServer(responder)
servidor.listen(PORT)

function responder(solicitud, respuesta){
    //codigo 200: todo bien
    respuesta.writeHead(200, {'Content-Type':'text/html'})
    //leer el texto del archivo index.html
    const texto = fs.readFileSync('index.html','utf-8')
    //,mandar el resultado
    respuesta.write(texto)
    respuesta.end()
}