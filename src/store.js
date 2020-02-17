import { createStore } from "redux";
//json de recetas
const estadoInicial = {
  recetas: [
    {
      id: 1,
      imagen: require("./img/receta1.jpg"),
      titulo: "Pizza",
      preparacion: "Para hacer la masa de pizza italiana es muy sencillo. En un bol agregamos el aceite, el agua y la levadura. Mezclamos y seguidamente le añadimos la harina y la pizca de sal. Una vez que tengáis mas o menos mezclado todo en el bol lo pasamos a la encima para amasar bien.",
      dificultad: "Fácil",
      tiempo: "00:20",
      raciones: 2
    },
    {
      id: 2,
      imagen: require("./img/receta2.jpg"),
      titulo: "Cóctel",
      preparacion: "En un vaso mezclador añadimos 3-4 hielos, añadimos el zumo de arándanos y el de limón, añadimos el jarabe de jengibre y el licor de almendras, echamos la ginebra y con una cuchara removemos unos 20 segundos. En la copa que vayamos a utilizar la llenamos casi hasta arriba de hielo picado, si no tenéis este hielo metéis en un trapo el hielo en cubitos y los rompéis para convertirlo en hielo roto, también os vale.",
      dificultad: "Media",
      tiempo: "00:30",
      raciones: 4
    },
    {
      id: 3,
      imagen: require("./img/receta3.jpg"),
      titulo: "Arroz con huevo y verduras",
      preparacion: "En una olla pon aceite de oliva a calentar y ve añadiendo las verduras, incorporándolas poco a poco: primero el ajito, cuando esté dorado, la cebolla. Luego la zanahoria, para que se vaya cocinando. Cuando veas que empieza a estar blandita, ponle el pimiento, el puerro y el calabacín.",
      dificultad: "Media",
      tiempo: "01:00",
      raciones: 4
    },
    {
      id: 4,
      imagen: require("./img/receta4.jpg"),
      titulo: "Brownie",
      preparacion: "En un bol ponemos el chocolate y la mantequilla. Lo metemos al microondas a temperatura media para que se vaya derritiendo. Una vez derretido lo lo mezclamos muy bien.",
      dificultad: "Media",
      tiempo: "01:30",
      raciones: 4
    }//fin receta
  ],//fin array recetas
  favoritos:[]

};//fin const estadoInicial
const reducerRecetas = (state = estadoInicial, action) => {

  if (action.type === "AGREGAR_A_RECETA") {
    var newListaRecetas= state.recetas.concat(action.receta);
    sessionStorage.setItem('recetas', JSON.stringify(newListaRecetas));
    return {
      ...state,
      recetas: newListaRecetas
    };
  }

  if (action.type === "ELIMINAR_RECETA") {
    var newListaRecetas= state.recetas.filter(receta=> receta.id !== action.id);
    sessionStorage.setItem('recetas', JSON.stringify(newListaRecetas));
        return {
      ...state,
      recetas: newListaRecetas
    };
  }

  if (action.type === "EDITAR_RECETA") {

     var newListaRecetas= state.recetas.filter(receta=> receta.id !== action.receta.id).concat(action.receta);
     sessionStorage.setItem('recetas', JSON.stringify(newListaRecetas));
    return {
       ...state,
       recetas: newListaRecetas
    };
  
  }

  if (action.type === "AGREGAR_RECETA") {

    var newListaRecetas= state.recetas.concat(action.receta);
    sessionStorage.setItem('recetas', JSON.stringify(newListaRecetas));
   return {
      ...state,
      recetas: newListaRecetas
   };
 
 }
  return state;
};
export default createStore(reducerRecetas);
