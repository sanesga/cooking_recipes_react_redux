import { createStore } from "redux";
//json de recetas
const estadoInicial = {
  recetas: [
    {
      id: 1,
      imagen: require("./img/receta1.jpg"),
      titulo: "Pizza",
      preparacion: "Se introduce el arroz en una cazuela con agua...",
      dificultad: "Fácil",
      tiempo: "20 minutos",
      raciones: 2
    },
    {
      id: 2,
      imagen: require("./img/receta2.jpg"),
      titulo: "Refresco",
      preparacion: "Se mezcla agua con harina, se amasa...",
      dificultad: "Media",
      tiempo: "60 minutos",
      raciones: 4
    },
    {
      id: 3,
      imagen: require("./img/receta2.jpg"),
      titulo: "Refresco",
      preparacion: "Se mezcla agua con harina, se amasa...",
      dificultad: "Media",
      tiempo: "60 minutos",
      raciones: 4
    },
    {
      id: 4,
      imagen: require("./img/receta2.jpg"),
      titulo: "Refresco",
      preparacion: "Se mezcla agua con harina, se amasa...",
      dificultad: "Media",
      tiempo: "60 minutos",
      raciones: 4
    }//fin receta
  ],
  currentReceta:null//fin array recetas
};//fin consst estadoInicial
const reducerRecetas = (state = estadoInicial, action) => {
  if (action.type === "AGREGAR_A_RECETA") {
    return {
      ...state,
      currentReceta: action.receta
    };
  }

  if (action.type === "ELIMINAR") {
    return {
      ...state,
     // supermercado1: state.supermercado1.filter(
       // j => j.id !== action.producto.id
     // ),
     // productos: state.productos.concat(action.producto)
    };
  }

  if (action.type === "MODIFICAR") {
    return {
      // ...state,
      // supermercado2: state.supermercado2.filter(
      //   j => j.id !== action.producto.id
      // ),
      // productos: state.productos.concat(action.producto)
    };
  }
  return state;
};
export default createStore(reducerRecetas);
