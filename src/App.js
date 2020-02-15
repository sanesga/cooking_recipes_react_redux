import React, { Component } from "react";
import Recetas from "./components/recetas";
import Header from "./components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// importamos la librería de bootstrap
//import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  showModal() {

  }

  render() {
    return (
      <div>
        <Header></Header>
        <Recetas></Recetas>
        <button onClick={this.showModal} className="add_button">
          <FontAwesomeIcon icon={faPlus} />
        </button>
        
        <div className="modal">
        <form action="#" className="add_form" enctype="application/x-www-form-urlencoded" method="get">

          <input type="text" placeholder="Título"></input>

          <input type="text" placeholder="Preparación"></input>

          <input type="text" placeholder="Dificultad"></input>

          <input type="text" placeholder="Tiempo"></input>

          <input type="number" placeholder="Raciones"></input>

          <input type="text" placeholder="Ingredientes"></input>

          <input type="submit" value="Guardar"></input>
          <input type="reset" value="Cancelar"></input>

        </form>
        </div>
      </div>
    );
  }
}

export default App;
