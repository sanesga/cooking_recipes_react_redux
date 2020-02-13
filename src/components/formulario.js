import React, { Component } from "react";

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      titulo: "",
      responsable: "",
      descripcion: "",
      //por defecto la prioridad de la tarea, si no se selecciona ninguna prioridad, será alta
      prioridad: "Alta"
    };
  }

  //al introducir datos en los inputs, a través del onChange se llama a este método, que se encarga de guardar cada valor en su correspondiente atributo del state
  guardar = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  //al hacer click en el botón guardar tarea, enviamos la tarea al componente padre (App) para que actualice el array de tareas lo envíe al componente tarea para imprimirlo actualizado
  crearTarea = e => {
    this.props.getTarea(this.state);
  };

  render() {
    return (
      <div id="form" className="mt-5">
        <div className="card ml-3 bg-dark">
          <div className="form-group">
            <div className="card-body">
              <input
                type="text"
                className="form-control mb-4"
                name="titulo"
                id="titulo"
                placeholder="Título"
                onChange={this.guardar}
              />

              <input
                type="text"
                className="form-control  mb-4"
                name="responsable"
                id="responsable"
                placeholder="Responsable"
                onChange={this.guardar}
              />

              <input
                type="text"
                className="form-control  mb-4"
                name="descripcion"
                id="descripcion"
                placeholder="Descripción"
                onChange={this.guardar}
              />

              <select
                className="form-control mb-4"
                id="prioridad"
                name="prioridad"
                onChange={this.guardar}
              >
                <option value="Alta">Alta</option>
                <option value="Media">Media</option>
                <option value="Baja">Baja</option>
              </select>

              <button
                className="btn btn-success d-block m-auto"
                onClick={this.crearTarea}
              >
                Guardar tarea
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Formulario;
