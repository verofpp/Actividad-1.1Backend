const {profesoresBD} = require("../Models/modelos")

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
}


module.exports = new ProfesoresController();