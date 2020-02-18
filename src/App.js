import React, { Component } from "react";
//importamos la librería de iconos fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
//css
import "./App.css";
//hacemos el import del Router, link y switch
import { Route, Link, Switch } from "react-router-dom";
//importamos el provider y el store
import { Provider } from "react-redux";
// importamos el store para que pueda ser utilizado por todos los componentes
import store from "./store";

//importamos los componentes
import Recetas from "./components/recetas";
import Receta from "./components/receta";
import Formulario from "./components/formulario";
import Favoritos from "./components/favoritos";
import Header from "./components/header";
import Buscador from "./components/buscador";

//convertimos App en componente
class App extends Component {
  //añadimos constructor para poder recibir props
  constructor(props) {
    super(props);
    this.state = {
      //esta variable mostrará el formulario añadir receta cuando pulsemos en el botón +
      mostrarModal: false
    };
  }

  //cambiamos la variable mostrarModal a true en el state, para que muestre el formulario
  showModal = e => {
    this.setState({
      mostrarModal: true
    });
  };

  render() {
    return (
      <div>
        {/* cargamos el menú */}
        <Header></Header>
        {/* al hacer click en el botón +, haremos un link al componente formulario */}
        <Link to="/formulario">
          {" "}
          <button onClick={this.showModal} className="add_button">
            {" "}
            {/* añadimos icono de fontawesome */}
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </Link>

        {/* todas las rutas utilizadas en la aplicación están aquí declaradas */}
        <Switch>
          {/* cargamos todas las recetas por defecto al cargar la página */}
          {/* englobamos todos los componentes en el store, para que puedan utilizarlo */}
          <Provider store={store}>
            <Route exact path="/" component={Recetas} />
            <Route exact path="/receta" component={Receta} />
            <Route exact path="/formulario" component={Formulario} />
            <Route exact path="/favoritos" component={Favoritos} />
            <Route exact path="/header" component={Header} />
            <Route exact path="/buscador/:texto" component={Buscador} />
          </Provider>
        </Switch>
      </div>
    );
  }
}
export default App;
