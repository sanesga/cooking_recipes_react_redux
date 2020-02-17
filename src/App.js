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
      //redirect:false,
      //valores por defecto
       mostrarModal: false,
      // titulo: "",
      // preparacion: "",
      // dificultad: "", 
      // tiempo: "00:00",
      // raciones: 0
    };
  }

  showModal = e => {
    console.log("entra a show modal");
    this.setState({
      //redirect: true,
      mostrarModal: true
    });
  };

//  shouldComponentUpdate(){

//  }



  render() {
   
    //  if (this.state.mostrarModal) {

    //   const form = document.getElementById("formulario_añadir_receta");
    //   console.log(form);
    //   form.style.visibility = "hidden";
    // }
    

    return (
      <div>
        <Header></Header>
       
          <Link to="/formulario"> <button onClick={this.showModal} className="add_button"> <FontAwesomeIcon icon={faPlus} /></button></Link>
      

        {/* todas las rutas utilizadas en la aplicación están aquí declaradas */}
        <Switch>
          {/* cargamos todas las recetas por defecto al cargar la página */}
           <Provider store={store}> 
            <Route exact path="/" component={Recetas} />
            <Route exact path="/receta" component={Receta} />
             <Route exact path="/formulario" component={Formulario} /> 
             <Route exact path="/favoritos" component={Favoritos} /> 
            {/* {this.state.mostrarModal ? <Formulario></Formulario>: null}  */}
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
//export default connect(mapStateToProps, mapDispatchToProps)(App);
