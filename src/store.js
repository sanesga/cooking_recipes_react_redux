//archivo store, donde está nuestro array de recetas que se cargará por defecto y los reducers, que harán los cambios en el state
import { createStore } from "redux";
//json de recetas
const estadoInicial = {
  recetas: [
    {
      id: 1,
      imagen: require("./img/receta1.jpg"),
      titulo: "Pizza",
      preparacion:
        "Para hacer la masa de pizza italiana es muy sencillo. En un bol agregamos el aceite, el agua y la levadura. Mezclamos y seguidamente le añadimos la harina y la pizca de sal. Una vez que tengáis mas o menos mezclado todo en el bol lo pasamos a la encima para amasar bien.",
      dificultad: "Fácil",
      tiempo: "00:20",
      raciones: 2,
      favorito: false
    },
    {
      id: 2,
      imagen: require("./img/receta2.jpg"),
      titulo: "Cóctel",
      preparacion:
        "En un vaso mezclador añadimos 3-4 hielos, añadimos el zumo de arándanos y el de limón, añadimos el jarabe de jengibre y el licor de almendras, echamos la ginebra y con una cuchara removemos unos 20 segundos. En la copa que vayamos a utilizar la llenamos casi hasta arriba de hielo picado, si no tenéis este hielo metéis en un trapo el hielo en cubitos y los rompéis para convertirlo en hielo roto, también os vale.",
      dificultad: "Media",
      tiempo: "00:30",
      raciones: 4,
      favorito: false
    },
    {
      id: 3,
      imagen: require("./img/receta3.jpg"),
      titulo: "Arroz con huevo y verduras",
      preparacion:
        "En una olla pon aceite de oliva a calentar y ve añadiendo las verduras, incorporándolas poco a poco: primero el ajito, cuando esté dorado, la cebolla. Luego la zanahoria, para que se vaya cocinando. Cuando veas que empieza a estar blandita, ponle el pimiento, el puerro y el calabacín.",
      dificultad: "Media",
      tiempo: "01:00",
      raciones: 4,
      favorito: false
    },
    {
      id: 4,
      imagen: require("./img/receta4.jpg"),
      titulo: "Brownie",
      preparacion:
        "En un bol ponemos el chocolate y la mantequilla. Lo metemos al microondas a temperatura media para que se vaya derritiendo. Una vez derretido lo lo mezclamos muy bien.",
      dificultad: "Media",
      tiempo: "01:30",
      raciones: 4,
      favorito: false
    } //fin receta
  ], //fin array recetas
  favoritos: []
}; //fin const estadoInicial

//reducer (hará loscambios en el state)
const reducerRecetas = (state = estadoInicial, action) => {
  //agregar una receta al array de recetas
  if (action.type === "AGREGAR_RECETA") {
    //concatenamos la receta que le enviamos a través del action
    var list1 = state.recetas.concat(action.receta);
    //guardamos las recetas en session storage para que los datos persistan aunque recarguemos la página (se perderán al cerrar la pestaña del navegador)
    sessionStorage.setItem("recetas", JSON.stringify(list1));
    return {
      ...state,
      recetas: list1
    };
  }

  //eliminar una receta del array de recetas
  if (action.type === "ELIMINAR_RECETA") {
    //añadimos todas las recetas del array de recetas, a uno nuevo, excepto la que queremos eliminar
    var list2 = state.recetas.filter(receta => receta.id !== action.id);
    sessionStorage.setItem("recetas", JSON.stringify(list2));
    return {
      ...state,
      recetas: list2
    };
  }

  //modificar una receta
  if (action.type === "EDITAR_RECETA") {
    //agregamos todas las recetas menos la que queremos modificar al nuevo array (se eliminará) para luego concatenar la nueva modificada.
    var list3 = state.recetas
      .filter(receta => receta.id !== action.receta.id)
      .concat(action.receta);
    sessionStorage.setItem("recetas", JSON.stringify(list3));
    return {
      ...state,
      recetas: list3
    };
  }

  //agregamos la receta seleccionada al array de favoritos
  if (action.type === "AGREGAR_FAVORITO") {
    var list5 = state.favoritos.concat(action.receta);
    sessionStorage.setItem("favoritos", JSON.stringify(list5));
    return {
      ...state,
      favoritos: list5
    };
  }
  //eliminamos la receta seleccionada del array de favoritos
  if (action.type === "ELIMINAR_FAVORITO") {
    var list6 = state.favoritos.filter(
      receta => receta.id !== action.receta.id
    );
    sessionStorage.setItem("favoritos", JSON.stringify(list6));
    return {
      ...state,
      favoritos: list6
    };
  }
  return state;
};
export default createStore(reducerRecetas);
