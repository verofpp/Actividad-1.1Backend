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
    listarProximosEventos(req, res) {
      const fechaDeseada = new Date(req.query.fecha);
  
      if (isNaN(fechaDeseada.getTime())) {
        return res.status(400).json({ mensaje: "Fecha inválida" });
      }
  
      const dosSemanasDespues = new Date(fechaDeseada.getTime() + 14 * 24 * 60 * 60 * 1000);
  
      const proximosEventos = eventosBD.filter(
        (evento) => evento.fecha >= fechaDeseada && evento.fecha <= dosSemanasDespues
      );
  
      res.json({ proximosEventos });
    }
}


module.exports = new EventosController();