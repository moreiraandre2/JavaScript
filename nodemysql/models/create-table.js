const mysql = require('mysql');
const Conn = require('./utils/connect');

 Conn.connect(function(err){
     if(err)  return  console.log(err);
     console.log('Foi!');
     createTable(Conn);
 });

 function createTable(conn){

    const sql = "CREATE TABLE IF NOT EXISTS clients("+
                "ID int NOT NULL AUTO_INCREMENT,"+
                "Nome varchar(50) NOT NULL,"+
                "CPF char(11) NOT NULL,"+
                "PRIMARY KEY (ID)"+
                ");";
    
    conn.query(sql, function(errors, results, fields){
        if(errors) return  console.log(errors);
        console.log('Tabela criada com sucesso!');
        addRows(conn);
    });

 }

 function addRows(conn){
    const sql = "INSERT INTO clients (Nome, CPF) VALUES ?"
    const values = [
        ['teste', '1234579'],
        ['teste2', '789456'],
        ['teste3', '456123']
    ];

    conn.query(sql, [values], function(errors, results, fields){
        if(errors) return console.log(errors);
        console.log('Resgistros adicionados');
        conn.end();
    });
 }