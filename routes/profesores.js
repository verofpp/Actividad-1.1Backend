var express = require('express');
var router = express.Router();
var ProfesoresController = require("../Controllers/profesores.c");
const { profesoresBD } = require('../Models/modelos');

//Mostrar Eventos
router.get('/', function(req, res, next) {
  res.send(ProfesoresController.Mostrar());
});

//Ingresar Eventos
router.post('/', function(req, res, next) {
 
  const evento = ProfesoresController.ingresar(req.body);
  res.send(profesoresBD);

});

//Editar Eventos
router.put("/:id", function(req, res, next) {
  res.send(ProfesoresController.Modificar(req.params.id , req.body));
  
});

//Eliminar Eventos
router.delete("/:id", function(req, res, next) {
  res.send(ProfesoresController.Eliminar(req.params.id));
});

const express = require('express');
const router = express.Router();
const ProfesoresController = require('../controllers/profesoresController');

router.post('/profesores', ProfesoresController.agregar);
router.get('/profesores', ProfesoresController.listar);
router.get('/profesores/:profesorId/eventos-semana/:materiaId', ProfesoresController.listarEventosSemanaMateria);
router.get('/proximos-eventos', ProfesoresController.listarProximosEventos);


module.exports = router;