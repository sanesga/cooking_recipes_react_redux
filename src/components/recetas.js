import React, { Component } from "react";
import { recetas } from "../recetas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Receta from "./receta";

class Recetas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recetas: recetas
    };
  }

  render() {
    // console.log(this.state.recetas.length);
    return (
      <div>
        {this.state.recetas.map(receta => (
          <div className="card" key={receta.id}>
            <div className="card-header">
              <img
                className="card-image"
                src={receta.imagen}
                alt="imagen receta 1"
              ></img>
            </div>
            <div className="card-footer">
              <div>{receta.titulo}</div>
              {/* <FontAwesomeIcon icon={faTrash} /> */}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Recetas;
