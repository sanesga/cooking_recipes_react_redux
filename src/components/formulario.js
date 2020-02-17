import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect , Link } from "react-router-dom";

const mapStateToProps = state => {
  return {
  recetas: state.recetas
  };
};

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
   const posicion= this.props.recetas.length;
   const receta=this.props.recetas.find(receta => receta.id===posicion);
 
    this.state = {
      id: receta.id++,
      atras:false,
      titulo: "",
      preparacion: "",
      dificultad: "",
      tiempo: "00:00",
      raciones: 0
    };
  }

  añadir = e => {
    this.props.agregar(this.state);
    this.setState({
      atras:true
    });
  };
  guardar = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {

    if (this.state.atras) {
      return <Redirect to="/"></Redirect>;
    }

    return (
      <div>
        {/* FORMULARIO EDITAR RECETA */}
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

          <div className="form_footer">
            <input type="button" value="Guardar" onClick={this.añadir}></input>
       <Link to="/"> <button id="boton_cancelar" value="Cancelar">Cancelar</button></Link>
          </div>
        </form>
      </div>
    );
  }
}
//export default Formulario;
export default connect(mapStateToProps, mapDispatchToProps)(Formulario);
