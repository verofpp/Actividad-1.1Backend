const {eventosBD} = require("../Models/modelos")

class EventosController {
    Mostrar() {
        return eventosBD;
    }
    ingresar(eventos){
        eventosBD.push(eventos);
        console.log("Se ha creado un evento");
        return (eventosBD);
    }
    Modificar(evento , newEvento){
        var id = + evento;
        var search = eventosBD.findIndex(u => u.id == id)
        if (search == "-1" ){
          console.log("El evento con id " + id + " no existe");
        }else if(eventosBD[search].id == id){ 
          console.log("El evento con id "+ id + " se modificará");
          console.log(eventosBD[search]);
          eventosBD[search]= newEvento;
          console.log("El evento ha sido modificado");
          console.log(eventosBD[search]);
        }
      }
    Eliminar(evento){
      var id = + evento;
      var search = eventosBD.findIndex(u => u.id == id)
      if (search == "-1" ){
        console.log("El evento con id " + id + " no existe");
      }else if(eventosBD[search].id == id){
        console.log("El evento con id "+ id + " ha sido eliminado");
        eventosBD.splice(search,1);
      }
    }
}


module.exports = new EventosController();