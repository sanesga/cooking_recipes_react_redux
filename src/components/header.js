import React, { Component } from "react";
//importamos el logo del header
import Logo from "../img/logo.png";
//importamos los iconos de fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHeart } from "@fortawesome/free-solid-svg-icons";
//hacemos el import de link
import { Link } from "react-router-dom";


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: ""
    };
  }
  //guardamos el texto introducido en el buscador en la variable del state
  guardar = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      // MENU
      <div className="menu">
        <ul>
          {/* al pulsar sobre el logo de la página, redirige a la página principal */}
          <li>
            <Link to="/">
              <img className="logo" src={Logo} alt="logo"></img>{" "}
            </Link>
          </li>
          {/* buscador de recetas, al introducir un nombre, guarda el texto en una variable a través del onChange */}
          {/* al hacer click en el icono de buscar, pasamos el texto a través de la url con Link */}
          <li>
            <input
              name="texto"
              className="search"
              type="text"
              placeholder="Introduce ingredientes"
              onChange={this.guardar}
            ></input>
            {/* insertamos un icono de fontawesome */}
            <Link to={"/buscador/"+this.state.texto}>
              <button className="search_button" onClick={this.buscar}>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </Link>
          </li>
          {/* el botón favoritos, nos dirige al componente favoritos */}
          <li className="li_right">
            <Link to="/favoritos">
              <button className="favorite_button">
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default Header;
