import React, { Component } from "react";
//importamos el connect
import { connect } from "react-redux";
//importamos el redirect
import { Redirect } from "react-router-dom";

//recuperamos el array de recetas
//la primera vez del store (se cargan 4 recetas por defecto)
//una vez hecho algún cambio en el programa, se cargarán de session storage para que los datos persistan y no se borren los cambios al actualizar (se eliminarán al cerrar la pestaña del navegador).
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

//en este componente no hacemos cambios en el state ni en session storage
const mapDispatchToProps = dispatch => ({});

class Recetas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //variable utilizada para redirigir al componente receta (para ver el detalle)
      mostrarDetalle: false,
      //receta seleccionada
      receta: null
    };
  }

  //al hacer click sobre una receta, se actualiza el state y al llamar al render se redirige al componente receta para mostrar el detalle
  mostrarDetalle(receta) {
    this.setState({
      mostrarDetalle: true,
      //guardamos la receta seleccionada
      receta: receta
    });
  }

  render() {
    //si la variable es true, se redirige al componente receta para ver el detalle
    if (this.state.mostrarDetalle) {
      return (
        <div>
          {/* en el redirect le pasamos la receta al componente receta a través de props */}
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
      // LISTADO DE RECETAS
      <div className="cards_container">
        {this.props.recetas.map(receta => (
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
export default connect(mapStateToProps, mapDispatchToProps)(Recetas);
