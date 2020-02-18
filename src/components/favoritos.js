import React, { Component } from "react";
//importamos el connect
import { connect } from "react-redux";
//importamos el redirect
import { Redirect } from "react-router-dom";
//importamos iconos de fontawesome
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//la primera vez que entremos estará vacío, si añadimos alguna receta a favoritos, leerá el array de session storage y no del store
//(lo hacemos así para que persistan los datos aunque se recarge la página, se eliminarán cuando se cierre la pestaña del navegador).
const mapStateToProps = state => {
  if (JSON.parse(sessionStorage.getItem("favoritos"))) {
    return {
      favoritos: JSON.parse(sessionStorage.getItem("favoritos"))
    };
  }
};

//enviamos la receta seleccionada al store para que el reducer la elimine de favoritos cuando hacemos click en el icono eliminar
const mapDispatchToProps = dispatch => ({
  eliminarFavorito(receta) {
    dispatch({
      type: "ELIMINAR_FAVORITO",
      receta
    });
  }
});

class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //booleano para mostrar el componente receta, donde visualizamos los detalles de la receta
      mostrarDetalle: false,
      //receta seleccionada
      receta: null
    };
  }

  //al hacer click en la imagen de la receta, nos modifica el state, guardando la receta seleccionada y mostrarDetalle a true, para que cargue el componente de detalle en el render.
  mostrarDetalle(receta) {
    this.setState({
      mostrarDetalle: true,
      receta: receta
    });
  }

  //llamamos al método mapDispatchToProps para que elimine la receta seleccionada del store y del sessionStorage
  eliminarFav(receta) {
    this.props.eliminarFavorito(receta);
  }

  render() {
    //si no existen favoritos, no se cargará nada
    if(this.props.favoritos===undefined){
      return false;
    }
    //si la variable mostrarDetalle es true (se ha hecho click en la imagen de la receta), hacemos un redirect al componente receta enviando la receta por props.
    if (this.state.mostrarDetalle) {
      return (
        <div>
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
        {/* recorremos el array de favoritos con un map para imprimir cada receta */}
        {this.props.favoritos.map(receta => (
          <div className="card" key={receta.id}>
            <div className="card_header">
              {/* al hacer click en la imagen de la receta, nos cambia el state y redirecciona al componente detalle */}
              <img
                onClick={() => this.mostrarDetalle(receta)}
                className="card_image"
                src={receta.imagen}
                alt="imagen receta 1"
              ></img>
            </div>
            <div className="card_footer card_footer_fav">
              <div>
                {receta.titulo}
                {/* al hacer click en el botón eliminar, vamos al store y eliminamos la receta seleccionada del array de favoritos */}
                <button
                  onClick={() => this.eliminarFav(receta)}
                  className="boton_eliminar_fav"
                >
                  {/* cargamos el icono de fontawesome */}
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Favoritos);
