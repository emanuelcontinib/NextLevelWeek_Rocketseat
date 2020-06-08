//importar a dependencia do SQLite3
const SQLite3 = require('sqlite3').verbose() //verbose configura para envio de mensagens no terminal, avisa coisas

//criando o objeto operacional banco de dados
const db = new SQLite3.Database('./src/database/database.db')
// console.log('aqui')
// console.log(db);
//utilizando o obj "db"

//  db.serialize(() => {
//   // criar uma tabela com comando SQL
//   db.run(`
//     CREATE TABLE IF NOT EXISTS places (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       image TEXT,
//       name TEXT,
//       adress  TEXT, 
//       adress2 TEXT, 
//       state TEXT,
//       city TEXT,
//       items TEXT
//     );
//   `)
//   // Inserir dados -- no primeiro () indentifica-se os campos e no segundo os valores a sereme inseridos
//     const query = `
//     INSERT INTO places (
//       image,
//       name,
//       adress,
//       adress2,
//       state,
//       city,
//       items
//     ) VALUES (?,?,?,?,?,?,?);
//     `

    // const values = [
    //   "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80",
    //   "Colectoria",
    //   "Guilherme Gemballa, Jardim América",
    //   "Número 260",
    //   "Santa Catarina",
    //   "Lindóia do Sul",
    //   "Baterias e Lâmpadas"
    // ]
  
    // function afterInsertData(err){
    // if (err){
    //   return console.log(error)
    // }
    // console.log('Cadastrado com Seucesso!')
    // console.log(this);      
    // }
    
    // db.run(query, values, afterInsertData)//quando chama função sem passar dados, só executa apoś execução das partes anteriores;  
    
    // //consultar os dados da table
    // db.all(`SELECT * FROM places`, function(err, rows){
    //   if (err){
    //     return console.log (err)
    //   } 
    //   console.log("Aqui estão os registros")
    //   console.log(rows)
    // })

   //deletar os dados da tabela
//     db.run(`DELETE FROM places WHERE id = ?`, [7], function(err){
//       if (err){
//         return console.log (err)
//       } 
//       console.log("Registro deletado com sucesso")
//     })
    
// })

module.exports = db
