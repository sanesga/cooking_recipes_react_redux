import React, { Component } from "react";
import Logo from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHeart } from "@fortawesome/free-solid-svg-icons";
//hacemos el import del Router, link y switch
import {  Link } from "react-router-dom";
import { connect } from "react-redux";


// const mapStateToProps = state => {
//   return {
//     recetas: state.recetas
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   agregar(receta) {
//     dispatch({
//       type: "AGREGAR_RECETA",
//       receta
//     });
//   }
// });

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto:""
    };
  }

  buscador = e => {
    this.setState({
      [e.target.name]: e.target.value
    });

  };

  render() {
    return (
      <div className="menu">
        <ul>
          <li>
          <Link to="/"><img className="logo" src={Logo} alt="logo"></img> </Link>
          </li>
          <li>
            <input name="texto" className="search" type="text" placeholder="Introduce ingredientes" onChange={this.buscador}></input>
            <button className="search_button"><FontAwesomeIcon icon={faSearch}/></button>
          </li>
          <li className="li_right">
          <Link to="/favoritos"> <button className="favorite_button"> <FontAwesomeIcon icon={faHeart} /></button></Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default Header;

//export default connect(mapStateToProps, mapDispatchToProps)(Header);
