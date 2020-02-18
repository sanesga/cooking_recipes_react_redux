import React, { Component } from "react";
//importamos connect
import { connect } from "react-redux";

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    //recogemos el texto enviado por props desde el buscador del componente header y lo pasamos a minúsculas
    const texto = this.props.match.params.texto.toLowerCase();
    //array donde guardaremos el resultado de la búsqueda
    var resultado = [];
    //recorremos el array que hemos recuperado del store y si el nombre de alguna receta contiene el nombre que buscamos, añadimos la receta al nuevo array
    for (const receta of this.props.recetas) {
     if(receta.titulo.toLowerCase().includes(texto)){
       resultado.push(receta);
     }
    }
    return (
      // IMPRIMIMOS EL RESULTADO DE LA BÚSQUEDA
      <div className="cards_container">
        {resultado.map(receta => (
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
//recuperamos la lista de recetas del store o de session storage
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

//no utilizamos este método
const mapDispatchToProps = dispatch => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(Buscador);

