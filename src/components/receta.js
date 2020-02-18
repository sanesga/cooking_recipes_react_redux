import React, { Component } from "react";
//importamos iconos de fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBlender,
  faClock,
  faUtensils,
  faHeart,
  faEdit,
  faTrash,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
//importamos el redirect
import { Redirect } from "react-router-dom";
//importamos el connect
import { connect } from "react-redux";

//no recuperamos los datos del store, porque le pasamos la receta seleccionada por props desde el componente recetas
const mapStateToProps = state => ({});
//accedemos al store y a los reducers siguientes para realizar cambios en el state y en el session storage
const mapDispatchToProps = dispatch => ({
  //se eliminará la receta anterior y se guardará la nueva receta actualizada en el array de recetas
  editar(receta) {
    dispatch({
      type: "EDITAR_RECETA",
      receta
    });
  },
  //borramos la receta seleccionada, buscándola por id
  borrar(id) {
    dispatch({
      type: "ELIMINAR_RECETA",
      id
    });
  },
  //agregamos la receta seleccionada al array de favoritos
  fav(receta) {
    dispatch({
      type: "AGREGAR_FAVORITO",
      receta
    });
  }
});

class Receta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //mostrará el formulario editar receta
      mostrarModal: false,
      //nos redirige a la paǵina principal
      atras: false,
      //propiedades de la receta
      //las hemos enviado por props desde el componente recetas
      id: this.props.location.state.receta.id,
      titulo: this.props.location.state.receta.titulo,
      imagen: this.props.location.state.receta.imagen,
      preparacion: this.props.location.state.receta.preparacion,
      dificultad: this.props.location.state.receta.dificultad,
      tiempo: this.props.location.state.receta.tiempo,
      raciones: this.props.location.state.receta.raciones,
      favorito: false
    };
  }

  //nos mostrará el formulario editar receta al hacer el render
  mostrarModal = e => {
    this.setState({
      mostrarModal: true
    });
  };

  //ocultará el formulario editar receta al hacer el render
  cancelar = e => {
    this.setState({
      mostrarModal: false
    });
  };

  //guarda los valores recogidos en el formulario editar receta en cada variable del state
  guardar = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //llama a mapDispatchToProps enviando el state, para que modifique la receta en el store
  modificar = e => {
    this.props.editar(this.state);
    //al mismo tiempo, oculta el formulario editar receta
    this.setState({
      mostrarModal: false
    });
  };
  //al hacer click en el icono de la flecha, nos redirige a la página principal (al hacer el render)
  atras = e => {
    this.setState({
      atras: true
    });
  };
  //llama a mapDispatchToProps para que elimine la receta en el store con el id que le hemos pasado
  eliminar = e => {
    this.props.borrar(this.state.id);
  };
  //cambia el valor de la variable favorito a true para cambiar el color del icono favorito
  //llama a mapDispatchToProps para que agregue la receta que le pasamos en el store
  favorito = e => {
    this.setState({
      favorito: true
    });
    this.props.fav(this.state);
  };

  render() {
    //obtenemos el formulario del dom
    const form = document.getElementsByClassName("formulario");

    //si existe y según la variable mostrarModal sea true a false, se muestra o se oculta
    if (form.length !== 0) {
      if (this.state.mostrarModal) {
        form[0].style.visibility = "visible";
      } else {
        form[0].style.visibility = "hidden";
      }
    }

    //si hemos hecho click en el icono de la flecha atrás, nos redirige a home
    if (this.state.atras) {
      return <Redirect to="/"></Redirect>;
    }

    //si hacemos click en el botón favorito, cambia de color
    var botonFavorito = document.getElementById("boton_favorito");
    if (botonFavorito) {
      if (this.state.favorito) {
        botonFavorito.style.backgroundColor = "grey";
      } else {
        botonFavorito.style.backgroundColor = "white";
      }
    }

    return (
      <div>
        {/* MENÚ LATERAL ICONOS EDITAR, ELIMINAR, FAVORITO Y ATRÁS */}
        {/* cada botón llama a su correspondiente método */}
        <div className="menu_lateral">
          <button className="menu_lateral_buttons" onClick={this.mostrarModal}>
            {/* insertamos iconos de fontawesome */}
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button className="menu_lateral_buttons" onClick={this.eliminar}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button
            id="boton_favorito"
            className="menu_lateral_buttons"
            onClick={this.favorito}
          >
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button className="menu_lateral_buttons" onClick={this.atras}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </div>

        {/* DETALLE DE LA RECETA */}
        {/* imprimos las variable desde el state */}
        <div className="receta_container">
          <div className="receta_image">
            <img src={this.state.imagen} alt="imagen receta"></img>
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
        {/* en cada input mostramos el valor de cada propiedad de la receta, a través del state */}
        {/* cada input tiene asignado un método onChange que guardará los datos que se introduzcan, en sus respectivas variables */}
        <form
          action="#"
          className="formulario formulario_modificar"
          method="post"
        >
          {/* HEADER DEL FORMULARIO */}
          <div className="form_header">
            <h1>EDITAR RECETA</h1>
          </div>

          {/* BODY DEL FORMULARIO */}
          <div className="form_body">
            <label htmlFor="titulo">Título</label>
            <input
              id="titulo"
              name="titulo"
              type="text"
              value={this.state.titulo}
              onChange={this.guardar}
            ></input>
            <br></br>

            <label htmlFor="preparacion">Preparación</label>
            <textarea
              name="preparacion"
              id="preparacion"
              onChange={this.guardar}
              value={this.state.preparacion}
            ></textarea>
            <br></br>

            <label htmlFor="dificultad">Dificultad</label>
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
            <br></br>

            <label htmlFor="tiempo">Tiempo</label>
            <input
              id="tiempo"
              name="tiempo"
              type="time"
              value={this.state.tiempo}
              onChange={this.guardar}
            ></input>
            <br></br>

            <label htmlFor="raciones">Raciones</label>
            <input
              id="raciones"
              name="raciones"
              type="number"
              value={this.state.raciones}
              onChange={this.guardar}
            ></input>
            <br></br>
          </div>
          {/* FOOTE DEL FORMULARIO */}
          <div className="form_footer">
            <input
              type="button"
              value="Guardar"
              onClick={this.modificar}
            ></input>

            <input
              type="button"
              onClick={this.cancelar}
              value="Cancelar"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
//export default Receta;
export default connect(mapStateToProps, mapDispatchToProps)(Receta);
