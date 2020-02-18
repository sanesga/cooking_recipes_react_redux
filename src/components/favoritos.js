
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const mapStateToProps = state => {

  if(JSON.parse(sessionStorage.getItem("favoritos"))){
    return {
     favoritos: JSON.parse(sessionStorage.getItem("favoritos"))
    };
  }else{
    return {
      favoritos: state.favoritos
    };
  }
};

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
      mostrarDetalle: false,
      receta: null
    };
  }

  mostrarDetalle(receta) {
    this.setState({
      mostrarDetalle: true,
      receta: receta
    });
  }

  eliminarFav(receta) {
   // console.log("entra a aeliminar fav");
    this.props.eliminarFavorito(receta);
  }


  render() {
   
    //console.log(this.state.receta);
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
        {this.props.favoritos.map(receta => (
          <div
            className="card"
            key={receta.id}
          >
            <div className="card_header">
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
                <button onClick={() => this.eliminarFav(receta)}className="boton_eliminar_fav"><FontAwesomeIcon icon={faTrash} /></button>
             </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Favoritos);
