const express = require('express') //importando o express
const server = express() //executando o express no server   

//importar banco de dados
const db = require('./database/db.js')
console.log(db)
//configurar pastas (public)
server.use(express.static("public"))

server.use(express.urlencoded({
    extended: true
})) //habiitando o uso do reqbody

//utilizando template engine
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})


//configurar caminhos da app
//pag inicial
server.get('/', (req, res) => {
    return res.render('index.html', { tittle: "Título"})
})

server.get('/create-point', (req, res) => {
    //buscando informações através do query
    req.query

    return res.render('create-point.html')
})


server.post("/savepoint", (req, res) => {
    //inserir os dados no banco
    
    const query = `
    INSERT INTO places (
        image,
        name,
        adress,
        adress2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?);
    `

    const values = [
        req.body.image,
        req.body.name,
        req.body.adress,
        req.body.adress2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if (err) {
            return console.log(error)
        }
        console.log('Cadastrado com Sucesso!')
        console.log(this);

        return res.render("create-point.html", {saved: true})

    }
    
    db.run(query, values, afterInsertData) //quando chama função sem passar dados, só executa apoś execução das partes anteriores;  

})




server.get('/search', (req, res) => {
    //pegar os dados do banco
    db.all(`SELECT * FROM places`, function (err, rows) {
        if (err) {
            return console.log(err)
        }

        const total = rows.length

        console.log("Aqui estão os registros")
        console.log(rows)
        return res.render('search.html', {
            places: rows,
            total
        })
    })
})


//ligar o server
server.listen(3000)

//at 1:43:59