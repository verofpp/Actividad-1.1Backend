const {seccionesBD} = require("../Models/modelos")

class SeccionesController {
    Mostrar() {
        return seccionesBD;
    }
    ingresar(secciones){
        seccionesBD.push(secciones);
        console.log("Se ha creado una sección nueva");
        return (seccionesBD);
    }
    Modificar(seccion , newSeccion){
        var id = + seccion;
        var search = seccionesBD.findIndex(u => u.id == id)
        if (search == "-1" ){
          console.log("La sección con id " + id + " no existe");
        }else if(seccionesBD[search].id == id){ 
          console.log("La sección con id "+ id + " se modificará");
          console.log(seccionesBD[search]);
          seccionesBD[search]= newSeccion;
          console.log("La sección ha sido modificada");
          console.log(seccionesBD[search]);
        }
      }
    Eliminar(seccion){
      var id = + seccion;
      var search = seccionesBD.findIndex(u => u.id == id)
      if (search == "-1" ){
        console.log("La sección con id " + id + " no existe");
      }else if(seccionesBD[search].id == id){
        console.log("La sección con id "+ id + " ha sido eliminada");
        seccionesBD.splice(search,1);
      }
    }
}


module.exports = new SeccionesController();