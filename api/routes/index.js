var express = require('express');
var router = express.Router();

var ctrlModulos = require('../controllers/modulos.controller.js');
var ctrlUsers = require('../controllers/users.controller.js');
var ctrlTopics = require('../controllers/topics.controller.js');

// Modulos routes
router
  .route('/modulos')
  .get(ctrlModulos.modulosGetAll);

router
  .route('/modulos/:moduloId')
  .get(ctrlModulos.moduloGetOne);

router
  .route('/modulos/delete/:moduloId')
  .delete(ctrlModulos.moduloDeleteOne)


// Topics Routes
router
  .route('/modulos/:moduloId/topics')
  .get(ctrlTopics.topicsGetAll)

router
  .route('/modulos/:moduloId/topics/:topicId')
  .get(ctrlTopics.topicsGetOne)


// Authentication
router
  .route('/users/register')
  .post(ctrlUsers.register);

router
  .route('/users/login')
  .post(ctrlUsers.login);

module.exports = router;