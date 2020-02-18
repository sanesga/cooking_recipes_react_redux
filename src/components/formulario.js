import React, { Component } from "react";
//importamos el connect
import { connect } from "react-redux";
//importamos el redirect
import { Redirect, Link } from "react-router-dom";
//importamos la imagen que utilizamos por defecto al añadir nuevas recetas
import imageDefault from "../img/default.jpg";

//recuperamos el array de recetas (aquí lo recuperamos solo para obtener el último id asignado)
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

//al hacer click en guardar nueva receta, vamos al store, la almacenamos en el array de recetas y en session storage
const mapDispatchToProps = dispatch => ({
  agregar(receta) {
    dispatch({
      type: "AGREGAR_RECETA",
      receta
    });
  }
});

class Formulario extends Component {
  constructor(props) {
    super(props);

    //obtenemos el id de la última receta añadida y lo incrementamos para asignarlo a la nueva.
    const posicion = this.props.recetas.length-1;
    const idReceta=2+(this.props.recetas[posicion].id);
  
    //propiedades de las recetas
    this.state = {
      id: idReceta,
      //variable utillizada para redirigir a la pantalla principal
      atras: false,
      titulo: "",
      preparacion: "",
      dificultad: "",
      //mostramos este tiempo y número de raciones por defecto en el formulario
      tiempo: "00:00",
      raciones: 0,
      //cargamos una imagen por defecto para todas las nuevas recetas
      imagen: imageDefault
    };
  }

  //llamamos al método del mapDispatchToProps para agregar la nueva receta al store
  añadir = e => {
    this.props.agregar(this.state);
    //al mismo tiempo, cambiamos el valor de la variable atrás, para que haga el render y nos redirija de nuevo a la pantalla principal
    this.setState({
      atras: true
    });
  };
  //guardamos los datos recogidos en el formulario, en cada variable
  guardar = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    //si atras es true, redireccionamos a la pantalla principal
    if (this.state.atras) {
      return <Redirect to="/"></Redirect>;
    }

    return (
      <div>
        {/* FORMULARIO EDITAR RECETA */}
        {/* cada input tiene un método onchange que recoge los datos escritos */}
        {/* asimismo en value imprimimos los valores por defecto de cada propiedad, asignados en el constructor */}
        <form
          action="#"
          id="formulario_añadir_receta"
          className="formulario"
          method="post"
        >
          {/* HEADER DEL FORMULARIO */}
          <div className="form_header">
            <h1>AÑADIR RECETA</h1>
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

          {/* FOOTER DEL FORMULARIO */}
          <div className="form_footer">
            {/* al hacer click en guardar, vamos al médodo añadir que llamará al mapStateToProps y guardará la receta en el store */}
            <input type="button" value="Guardar" onClick={this.añadir}></input>
            {/* el botón cancelar es un link a la página principal */}
            <Link to="/">
              {" "}
              <button id="boton_cancelar" value="Cancelar">
                Cancelar
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Formulario);
