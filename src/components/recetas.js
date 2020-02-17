// import React from "react";
// //import React, { Component } from "react";
// //import { recetas } from "../store";
// //import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// //import { faTrash } from "@fortawesome/free-solid-svg-icons";
// //import Receta from "./receta";
// import { connect } from "react-redux";

// const Recetas = ({ recetas, agregarReceta }) => (

//       <div className="cards_container">
//         {recetas.map(receta => (
//           <div className="card" key={receta.id} onClick={() => agregarReceta(receta)}>
//             <div className="card_header">
//               <img
//                 className="card_image"
//                 src={receta.imagen}
//                 alt="imagen receta 1"
//               ></img>
//             </div>
//             <div className="card_footer">
//               <div>{receta.titulo}</div>
//               {/* <FontAwesomeIcon icon={faTrash} /> */}
//             </div>
//           </div>
//         ))}
//       </div>

// );

// const mapStateToProps = state => {
//   //console.log(state.recetas);
//   return {
//    ...state,
//     recetas: state.recetas
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   agregarReceta(receta){
//     //console.log("entra a agregarReceta");
//     dispatch({
//       type: 'AGREGAR_RECETA',
//       receta
//     })
//   }
// });

// //export default Recetas;
// export default connect(mapStateToProps, mapDispatchToProps)(Recetas);

//COMO CLASE

import React, { Component } from "react";
//import { recetas } from "../store";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faTrash } from "@fortawesome/free-solid-svg-icons";
//import Receta from "./receta";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";


const mapStateToProps = state => {
  //console.log(state.recetas);
 // console.log(localStorage.getItem("recetas"));

  if(JSON.parse(sessionStorage.getItem("recetas"))){
   // console.log("cogemos las recetas del local storage");
    return {
     recetas: JSON.parse(sessionStorage.getItem("recetas"))
    };

  }else{
   // console.log("cogemos las recetas del store");
    return {
      //  ...state,
      recetas: state.recetas
    };
  }
};

const mapDispatchToProps = dispatch => ({
  // agregarASupermercado1(producto){
  //     dispatch({
  //         type: 'AGREGAR_A_SUPERMERCADO_1',
  //         producto
  //     })
  //},
});

//utilizamos el context para pasar la receta seleccionada al componente receta
export const MyContext = React.createContext();

class Recetas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarDetalle: false,
      id: -1,
      receta: null
    };
  }

  mostrarDetalle(receta) {
    this.setState({
      mostrarDetalle: true,
      id: receta.id,
      receta: receta
    });

    // <MyContext.Provider value={receta}>
    //   <Receta></Receta>
    // </MyContext.Provider>
  }

  render() {
    
    if (this.state.mostrarDetalle) {
      // console.log(this.state.receta)
      // return <Receta></Receta>
      return (
        <div>
          {/* <MyContext.Provider value={this.state.id}>
        <Receta></Receta>
      </MyContext.Provider> */}
          {/* <Redirect to="/receta"></Redirect> */}
          <Redirect
            to={{
              pathname: "/receta",
              state: { receta: this.state.receta }
            }}
          />
        </div>
      );
    }

    return (
      <div className="cards_container">
        {this.props.recetas.map(receta => (
          <div
            className="card"
            key={receta.id}
            onClick={() => this.mostrarDetalle(receta)}
          >
            {/* si hemos guardado un id en el state porque hemos hecho click, guardará la receta en el context */}
            {/* {this.state.id !== -1 && (
              <MyContext.Provider value={receta}>
                <Receta></Receta>
              </MyContext.Provider>
            )} */}
            <div className="card_header">
              <img
                className="card_image"
                src={receta.imagen}
                alt="imagen receta 1"
              ></img>
            </div>
            <div className="card_footer">
              <div>{receta.titulo}</div>
              {/* <FontAwesomeIcon icon={faTrash} /> */}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
//export default Recetas;
export default connect(mapStateToProps, mapDispatchToProps)(Recetas);
