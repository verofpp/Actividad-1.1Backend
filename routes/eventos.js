var express = require('express');
var router = express.Router();
var EventosController = require("../Controllers/eventos.c");
const { eventosBD } = require('../Models/modelos');

//Mostrar Eventos
router.get('/', function(req, res, next) {
  res.send(EventosController.Mostrar());
});

//Ingresar Eventos
router.post('/', function(req, res, next) {
 
  const evento = EventosController.ingresar(req.body);
  res.send(eventosBD);

});

//Editar Eventos
router.put("/:id", function(req, res, next) {
  res.send(EventosController.Modificar(req.params.id , req.body));
  
});

//Eliminar Eventos
router.delete("/:id", function(req, res, next) {
  res.send(EventosController.Eliminar(req.params.id));
});

// Mostrar Próximos Eventos en las dos semanas siguientes a la fecha deseada
router.get('/proximos-eventos/fecha', function(req, res, next) {
  res.send(EventosController.listarProximosEventos(req, res));
});

module.exports = router;