profesoresBD = [
    {
        id: 1,
        nombre:"Katiuska",
        apellido:"Morillo",
        materias_id: [1, 2],
    },
    {
        id: 2,
        nombre:"Yerson",
        apellido:"Gonzales",
        materias_id: [5],
    },
    {
        id: 3,
        nombre:"Suleima",
        apellido:"Espinoza",
        materias_id: [3, 4],
    },
    {
        id: 4,
        nombre:"Roberto",
        apellido:"Di Michele",
        materias_id: [6, 7, 8],
    },
],

materiasBD = [
    {
        id: 1,
        nombre:"Matematica IV",
    },
    {
        id: 2,
        nombre:"Diseño Logico II"
    },
    {
        id: 3,
        nombre:"Entornos De desarrollo"
    },
    {
        id: 4,
        nombre:"Analisis y Diseño de Sistemas"
    },
    {
        id: 5,
        nombre:"Estructura de datos I"
    },
    {
        id: 6,
        nombre:"Backend"
    },
    {
        id: 7,
        nombre:"Base de Datos I"
    },
    {
        id: 8,
        nombre:"Front End I"
    },
],


seccionesBD = [
    {
        id: 1,
        nombre:"Semipresencial"
    },
    {
        id: 2,
        nombre:"Virtual"
    },
    {
        id: 3,
        nombre:"Fin de semana"
    },
]


eventosBD = [
    {
        id: 1,
        tipo: "Evaluación",
        fecha: "",
        materias_id: 1,
        profesores_id:"",
        seccion_id: ""
    },
    {
        id: 2,
        tipo: "Corte de nota",
        fecha: "",
        materias_id: 1,
        profesores_id:"",
        seccion_id: ""
    },
    {
        id: 3,
        tipo: "encuentros",
        fecha: "",
        materias_id: 1,
        profesores_id:"",
        seccion_id: ""
    },
    {
        id: 4,
        tipo: "video conferencias",
        fecha: "",
        materias_id: 1,
        profesores_id:"",
        seccion_id: ""
    },
],


module.exports = {profesoresBD, materiasBD, eventosBD, seccionesBD};