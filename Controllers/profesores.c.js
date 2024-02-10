const { profesoresBD, materiasBD, eventosBD } = require("../Models/modelos")

class ProfesoresController {
    Mostrar() {
        return profesoresBD;
    }
    ingresar(profesores){
        profesoresBD.push(profesores);
        console.log("Se ha agregado un profesor");
        return (profesoresBD);
    }
    Modificar(profesor , newProfesor){
        var id = + profesor;
        var search = profesoresBD.findIndex(u => u.id == id)
        if (search == "-1" ){
          console.log("El profesor con id " + id + " no existe");
        }else if(profesoresBD[search].id == id){ 
          console.log("Los datos del profesor con id "+ id + " se modificará");
          console.log(profesoresBD[search]);
          profesoresBD[search]= newProfesor;
          console.log("Los datos han sido modificado");
          console.log(profesoresBD[search]);
        }
      }
    Eliminar(profesor){
      var id = + profesor;
      var search = profesoresBD.findIndex(u => u.id == id)
      if (search == "-1" ){
        console.log("El profesor con id " + id + " no existe");
      }else if(profesoresBD[search].id == id){
        console.log("El profesor con id "+ id + " ha sido eliminado");
        profesoresBD.splice(search,1);
      }
    }
    listarEventosSemanaMateria(req, res) {
      const profesorId = parseInt(req.params.profesorId);
      const materiaId = parseInt(req.params.materiaId);
  
      const profesor = profesoresBD.find((profesor) => profesor.id === profesorId);
  
      if (!profesor) {
        res.status(404).json({ mensaje: "Profesor no encontrado" });
        return;
      }
  
      const eventosSemana = eventosBD.filter(
        (evento) =>
          evento.materias_id === materiaId &&
          evento.fecha >= new Date() &&
          evento.fecha <= new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
      );
  
      res.json({ eventosSemana });
    }
  
    listarProximosEventos(req, res) {
      const dosSemanasDespues = new Date(new Date().getTime() + 14 * 24 * 60 * 60 * 1000);
  
      const proximosEventos = eventosBD.filter(
        (evento) => evento.fecha >= new Date() && evento.fecha <= dosSemanasDespues
      );
  
      res.json({ proximosEventos });
    }
  }

  
module.exports = new ProfesoresController();