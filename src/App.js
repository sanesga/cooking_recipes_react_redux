import React, { Component } from "react";
import Recetas from "./components/recetas";
import Receta from "./components/receta";
import Formulario from "./components/formulario";
import Favoritos from "./components/favoritos";
import Header from "./components/header";
//importamos la librería de iconos fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
//hacemos el import del Router, link y switch
//import { Route, Link, Switch } from "react-router-dom";
import { Route, Link, Switch } from "react-router-dom";
//importamos el redirect
//import { Redirect } from "react-router-dom";
//importamos el provider y el store
import { Provider } from "react-redux";
import store from "./store";
//import { Redirect } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarModal: false
    };
  }

  showModal = e => {
   // console.log("entra a show modal");
    this.setState({
      mostrarModal: true
    });
  };

  render() {
    return (
      <div>
        <Header></Header>
        <Link to="/formulario">
          {" "}
          <button onClick={this.showModal} className="add_button">
            {" "}
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </Link>
        {/* todas las rutas utilizadas en la aplicación están aquí declaradas */}
        <Switch>
          {/* cargamos todas las recetas por defecto al cargar la página */}
          <Provider store={store}>
            <Route exact path="/" component={Recetas} />
            <Route exact path="/receta" component={Receta} />
            <Route exact path="/formulario" component={Formulario} />
            <Route exact path="/favoritos" component={Favoritos} />
            <Route exact path="/header" component={Header} />
          </Provider>
        </Switch>
      </div>
    );
  }
}
export default App;
