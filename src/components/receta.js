import React, { Component } from "react";
import { MyContext } from "./recetas";

class Receta extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const receta = this.props.location.state.receta;

    console.log(receta);

    return (
      <div className="receta_container">
        <div className="receta_image">
          <img src={receta.imagen} alt="imagen receta"></img>
        </div>
        <div className="receta_body">

        
            <h1>titulo{receta.titulo}</h1>
          <p>preparacion{receta.preparacion}</p>
          <p>dificultad{receta.dificultad}</p>
          <p>tiempo{receta.tiempo}</p>
          <p>raciones{receta.raciones}</p> 




        </div>
      </div>
    );
  }
}
export default Receta;
