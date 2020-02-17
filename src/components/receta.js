import React, { Component } from "react";
//import { MyContext } from "./recetas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Redirect } from "react-router-dom";
import {
  faBlender,
  faClock,
  faUtensils,
  faHeart,
  faEdit,
  faTrash,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  //receta: state.receta
});

const mapDispatchToProps = dispatch => ({
  editar(receta) {
    console.log(receta);
    dispatch({
      type: "EDITAR_RECETA",
      receta
    });
  }
});

class Receta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarModal: false,
      atras: false,
      id: this.props.location.state.receta.id,
      titulo: this.props.location.state.receta.titulo,
      imagen: this.props.location.state.receta.imagen,
      preparacion: this.props.location.state.receta.preparacion,
      dificultad: this.props.location.state.receta.dificultad,
      tiempo: this.props.location.state.receta.tiempo,
      raciones: this.props.location.state.receta.raciones
    };
  }

  mostrarModal = e => {
    this.setState({
      mostrarModal: true
    });
  
  };

  cancelar = e => {
   // console.log("entra a cancelar");
    this.setState({
      mostrarModal: false
    });
  };

  guardar = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
 // this.props.editar(this.state);
  };
  modificar = e => {
      this.props.editar(this.state);
      this.setState({
        mostrarModal: false
      });
  };
  atras = e => {
    this.setState({
      atras: true
    });   
};

  render() {
    const form = document.getElementsByClassName("modal_editar_receta");
    const receta = this.props.location.state.receta;

    if (form.length !== 0) {
      if (this.state.mostrarModal) {
        //es true al hacer click en el botón +
        form[0].style.visibility = "visible";
      } else {
        //es false al hacer click en el botón cancelar
        const form = document.getElementsByClassName("modal_editar_receta");
        form[0].style.visibility = "hidden";
      }
    }

    if(this.state.atras){
      return(
        <Redirect to="/"></Redirect>
      );   
    }

    //console.log(receta);

    return (
      <div>
        {/* menu lateral con botones editar, eliminar, favorito y atrás */}
        <div className="menu_lateral">
          <button className="menu_lateral_buttons" onClick={this.mostrarModal}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button className="menu_lateral_buttons">
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button className="menu_lateral_buttons">
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button className="menu_lateral_buttons" onClick={this.atras}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </div>



        <div className="receta_container">
          <div className="receta_image">
            <img src={receta.imagen} alt="imagen receta"></img>
          </div>
          <div className="receta_body">
            <h1>{this.state.titulo}</h1>

            {/* DIFICULTAD */}
            <div className="general_container">
              <div className="receta_button_container">
                <button className="receta_buttons">
                  <FontAwesomeIcon icon={faBlender} />
                </button>
              </div>
              <div className="receta_text_buttons">
                <span className="texto_negrita">Dificultad</span>
                <span>{this.state.dificultad}</span>
              </div>
            </div>

            {/* TIEMPO */}
            <div className="general_container">
              <div className="receta_button_container">
                <button className="receta_buttons">
                  <FontAwesomeIcon icon={faClock} />
                </button>
              </div>
              <div className="receta_text_buttons">
                <span className="texto_negrita">Tiempo</span>
                <span>{this.state.tiempo}</span>
              </div>
            </div>

            {/* RACIONES */}
            <div className="general_container">
              <div className="receta_button_container">
                <button className="receta_buttons">
                  <FontAwesomeIcon icon={faUtensils} />
                </button>
              </div>
              <div className="receta_text_buttons">
                <span className="texto_negrita">Raciones</span>
                <span>{this.state.raciones}</span>
              </div>
            </div>

            <div className="receta_descripcion">
              <div className="header_descripcion">
                <h3>PASOS A SEGUIR</h3>
              </div>
              <div className="preparacion">{this.state.preparacion}</div>
            </div>
          </div>
        </div>

        {/* FORMULARIO EDITAR RECETA */}
        <div className="modal_editar_receta">
          <form action="#" className="add_form" method="post">
            <div className="form_title">
              <h1>EDITAR RECETA</h1>
            </div>

            <input
              name="titulo"
              type="text"
              value={this.state.titulo}
              onChange={this.guardar}
            ></input>

            <textarea
              name="preparacion"
              id="preparacion"
              rows="4"
              cols="50"
              onChange={this.guardar}
              value={this.state.preparacion}
            ></textarea>

            <select
              className="form-control mb-4"
              id="dificultad"
              name="dificultad"
              onChange={this.guardar}
              value={this.state.dificultad}
            >
              <option value="Alta">Baja</option>
              <option value="Media">Media</option>
              <option value="Baja">Alta</option>
            </select>

            <input
              name="tiempo"
              type="time"
              value={this.state.tiempo}
              onChange={this.guardar}
            ></input>

            <input
              name="raciones"
              type="number"
              value={this.state.raciones}
              onChange={this.guardar}
            ></input>

            <input type="button" value="Guardar" onClick={this.modificar}></input>

            <input
              type="button"
              onClick={this.cancelar}
              value="Cancelar"
            ></input>
          </form>
        </div>
      </div>
    );
  }
}
//export default Receta;
export default connect(mapStateToProps, mapDispatchToProps)(Receta);
