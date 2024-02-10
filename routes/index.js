var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sistema de Gestion de Universidad Valle del Momboy' });
});
router.get('/profesores', function(req, res, next) {
  res.render('profesores', { title: 'Sistema de Gestion de Universidad Valle del Momboy' });
});
router.get('/secciones', function(req, res, next) {
  res.render('secciones', { title: 'Sistema de Gestion de Universidad Valle del Momboy' });
});
router.get('/materias', function(req, res, next) {
  res.render('materias', { title: 'Sistema de Gestion de Universidad Valle del Momboy' });
});
router.get('/todos', function(req, res, next) {
  res.render('todos', { title: 'Sistema de Gestion de Universidad Valle del Momboy' });
});

module.exports = router;
