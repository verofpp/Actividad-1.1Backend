var express = require('express');
var router = express.Router();
var MateriasController = require("../Controllers/materias.c");
const { materiasBD } = require('../Models/modelos');

//Mostrar Eventos
router.get('/', function(req, res, next) {
  res.send(MateriasController.Mostrar());
});

//Ingresar Eventos
router.post('/', function(req, res, next) {
 
  const evento = MateriasController.ingresar(req.body);
  res.send(materiasBD);

});

//Editar Eventos
router.put("/:id", function(req, res, next) {
  res.send(MateriasController.Modificar(req.params.id , req.body));
  
});

//Eliminar Eventos
router.delete("/:id", function(req, res, next) {
  res.send(MateriasController.Eliminar(req.params.id));
});


module.exports = router;