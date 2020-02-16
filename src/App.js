import React, { Component } from "react";
import Recetas from "./components/recetas";
import Receta from "./components/receta";
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //redirect:false,
      mostrarModal: false,
    
    };
  }

  showModal = e => {
    this.setState({
      //redirect: true,
      mostrarModal: true
    });
  };

  cancelar = e => {
    this.setState({
      mostrarModal: false
    });
  };

  render() {
    //const redirect  = this.state.redirect;
    const mostrarModal = this.state.mostrarModal;

    //console.log("entra al render");
    //console.log(mostrarModal);

    //   if(redirect){
    //     return <Redirect to="/modal"></Redirect>
    // }

    const form = document.getElementsByClassName("modal");

  
    if (form.length !== 0) {
      if (mostrarModal) {
        //es true al hacer click en el botón +
        form[0].style.visibility = "visible";
      } else {
        //es false al hacer click en el botón cancelar
        const form = document.getElementsByClassName("modal");
        form[0].style.visibility = "hidden";
      }
    }

    return (
      <div>
        <Header></Header>
        <button onClick={this.showModal} className="add_button">
          <FontAwesomeIcon icon={faPlus} />
        </button>
    
        {/* <Receta></Receta> */}

        <div className="modal">
          <form action="#" className="add_form" method="get">
            <div className="form_title">
              <h1>AÑADIR RECETA</h1>
            </div>

            <input type="text" placeholder="Título"></input>

            <input type="text" placeholder="Preparación"></input>

            <input type="text" placeholder="Dificultad"></input>

            <input type="text" placeholder="Tiempo"></input>

            <input type="number" placeholder="Raciones"></input>

            <input type="submit" value="Guardar"></input>

            <input
              type="reset"
              onClick={this.cancelar}
              value="Cancelar"
            ></input>
          </form>

        </div>

        {/* todas las rutas utilizadas en la aplicación están aquí declaradas */}
        <Switch>
          {/* cargamos todas las recetas por defecto al cargar la página */}
          <Provider store={store}>
          <Route exact path="/" component={Recetas} />
          <Route exact path="/receta" component={Receta} />
          </Provider>

          {/* <Route exact path="/modal" component={Formulario} />  */}
          {/* le pasamos al componente postres, dos parámetros, que serán las frutas de temporada que queremos incluir en la carta */}
          {/* <Route
              exact
              path="/postres/:tipoFruta1/:tipoFruta2"
              component={Postres}
            /> */}
          {/* le pasamos el número de comensales a través del input, se llama al componente capacidad que hace las validaciones y con una redirección a info, nos dice si los comensales caben o no */}
          {/* <Route exact path="/capacidad/:comensales" component={Capacidad} />
            <Route exact path="/info/:message" component={Info} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
