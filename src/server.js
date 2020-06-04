const express = require ('express')//importando o express
const server = express()//executando o express no server   

//configurar pastas (public)
server.use(express.static("public"))

//utilizando template engine
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
  express: server,
  noCache: true
})


//configurar caminhos da app
//pag inicial
server.get('/', (req,res) => {
  return res.render('index.html')
})

server.get('/create-point', (req,res) => {
  return res.render('create-point.html')
})

server.get('/search', (req,res) => {
  return res.render('search.html')
})


//ligar o server
server.listen(3000)
