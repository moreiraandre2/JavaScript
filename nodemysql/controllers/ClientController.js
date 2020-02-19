const conn = require('../models/utils/connect');
const Cli = require('../models/Client');
const axios = require('axios');

module.exports = {
    async index(request, response){

        const sql = "SELECT * FROM clients;";

        await conn.query(sql, function(err, results, fields ){
            if (err) 
                return response.json(err);
            else
                return response.json(results);
            
        });

    },
    async store(request, response){

        const { nome, cpf } = request.body;

        const sql = "INSERT INTO clients (nome, cpf) VALUES ('"+ nome +"','"+ cpf +"');";

        await conn.query(sql, function(err, results, fields ){
            if (err) 
                return response.json(err);
            else
                return response.json(results);
        });
        
    },
    async update(request, response){

        const { nome, cpf, id } = request.body;

        const sql = "UPDATE clients SET nome='"+ nome +"', cpf='"+ cpf +"' WHERE id='"+ id +"';";

        await conn.query(sql, function(err, results, fields ){
            if (err) 
                return response.json(err);
            else
                return response.json(results);
        });
    },
    async delete(request, response){

        const { id } = request.body;

        const sql = "DELETE FROM clients WHERE id='"+ id +"';";

        await conn.query(sql, function(err, results, fields ){
            if (err) 
                return response.json(err);
            else
                return response.json(results);
        });
    }
    
}
