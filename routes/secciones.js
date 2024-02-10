var express = require('express');
var router = express.Router();
var SeccionesController = require("../Controllers/secciones.c");
const { seccionesBD } = require('../Models/modelos');

//Mostrar Eventos
router.get('/', function(req, res, next) {
  res.send(SeccionesController.Mostrar());
});

//Ingresar Eventos
router.post('/', function(req, res, next) {
 
  const evento = SeccionesController.ingresar(req.body);
  res.send(seccionesBD);

});

//Editar Eventos
router.put("/:id", function(req, res, next) {
  res.send(SeccionesController.Modificar(req.params.id , req.body));
  
});

//Eliminar Eventos
router.delete("/:id", function(req, res, next) {
  res.send(SeccionesController.Eliminar(req.params.id));
});


module.exports = router;