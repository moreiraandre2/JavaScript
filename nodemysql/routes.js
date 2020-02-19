const {Router} = require('express');
const ClientController = require('./controllers/ClientController')
const routes = Router();

routes.get('/', ClientController.index);
routes.post('/clients', ClientController.store);
routes.put('/clients', ClientController.update);
routes.delete('/clients', ClientController.delete);

module.exports = routes;