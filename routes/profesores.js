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

// Mostrar Eventos por Semana de una Materia para un Profesor específico
router.get('/:profesorId/materias/:materiaId/eventos-semana', function(req, res, next) {
  res.send(ProfesoresController.listarEventosSemanaMateria(req, res));
});


module.exports = router;