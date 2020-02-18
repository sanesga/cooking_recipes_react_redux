import React, { Component } from "react";
//importamos la librería redirect
import {Redirect} from "react-router-dom";
import { connect } from "react-redux";

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    
    const texto = this.props.match.params.texto.toLowerCase();
    var array = [];
    for (const receta of this.props.recetas) {
     if(receta.titulo.toLowerCase().includes(texto)){
       array.push(receta);
     }
    }
    return (
      // LISTADO DE RECETAS
      <div className="cards_container">
        {array.map(receta => (
          <div
            className="card"
            key={receta.id}
            onClick={() => this.mostrarDetalle(receta)}
          >
            <div className="card_header">
              <img
                className="card_image"
                src={receta.imagen}
                alt="imagen receta 1"
              ></img>
            </div>
            <div className="card_footer">
              <div>{receta.titulo}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  if (JSON.parse(sessionStorage.getItem("recetas"))) {
    return {
      recetas: JSON.parse(sessionStorage.getItem("recetas"))
    };
  } else {
    return {
      recetas: state.recetas
    };
  }
};

const mapDispatchToProps = dispatch => ({
  
});
export default connect(mapStateToProps, mapDispatchToProps)(Buscador);

