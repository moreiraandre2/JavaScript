//Metodos HTTP: Get, Post, Put, Delete
//Tipos de parametros
//Query Params: request.query (Filtros, paginação, ordenação)
//Route Params: Identificar um recurso na alteração ou remoção
//Body: Utilizado no post e no put: request.bosy criação ou alteraçã de um registro

//Mongo DB: NoSql base em documentos
const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;