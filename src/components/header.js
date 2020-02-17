import React, { Component } from "react";
import Logo from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHeart } from "@fortawesome/free-solid-svg-icons";
//hacemos el import del Router, link y switch
import {  Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="menu">
        <ul>
          <li>
          <Link to="/"><img className="logo" src={Logo} alt="logo"></img> </Link>
          </li>
          <li>
            <input className="search" type="text" placeholder="Introduce ingredientes"></input>
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
