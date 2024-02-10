const {materiasBD} = require("../Models/modelos")

class MateriasController {
    Mostrar() {
        return materiasBD;
    }
    ingresar(materias){
        materiasBD.push(materias);
        console.log("Se ha agregado una nueva materia");
        return (materiasBD);
    }
    Modificar(materia , newMateria){
        var id = + materia;
        var search = materiasBD.findIndex(u => u.id == id)
        if (search == "-1" ){
          console.log("La materia con id " + id + " no existe");
        }else if(materiasBD[search].id == id){ 
          console.log("La materia con id "+ id + " se modificará");
          console.log(materiasBD[search]);
          materiasBD[search]= newMateria;
          console.log("La materia ha sido modificada");
          console.log(materiasBD[search]);
        }
      }
    Eliminar(materia){
      var id = + materia;
      var search = materiasBD.findIndex(u => u.id == id)
      if (search == "-1" ){
        console.log("La materia con id " + id + " no existe");
      }else if(materiasBD[search].id == id){
        console.log("La materia con id "+ id + " ha sido eliminado");
        materiasBD.splice(search,1);
      }
    }
    listarEventosPorSemana(req, res) {
      const materiaId = parseInt(req.params.materiaId);
  
      const eventosMateria = eventosBD.filter(
        (evento) =>
          evento.materias_id === materiaId &&
          evento.fecha >= new Date() &&
          evento.fecha <= new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
      );
  
      res.json({ eventosMateria });
    }
}


module.exports = new MateriasController();