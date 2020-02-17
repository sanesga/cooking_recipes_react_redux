import React, { Component } from "react";
import Logo from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHeart } from "@fortawesome/free-solid-svg-icons";
//hacemos el import del Router, link y switch
//import { Route, Link, Switch } from "react-router-dom";

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
            <img className="logo" src={Logo} alt="logo"></img>
          </li>
          <li>
            <input className="search" type="text" placeholder="Introduce ingredientes"></input>
            <button className="search_button"><FontAwesomeIcon icon={faSearch}/></button>
          </li>
          <li className="li_right">
            <button className="favorite_button"><FontAwesomeIcon icon={faHeart}/></button>
          </li>
        </ul>
      </div>
    );
  }
}
export default Header;
