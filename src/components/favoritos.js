
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";


const mapStateToProps = state => {

  if(JSON.parse(sessionStorage.getItem("favoritos"))){
    return {
     favoritos: JSON.parse(sessionStorage.getItem("favoritos"))
    };
  }else{
    return {
      favoritos: state.favoritos
    };
  }
};

const mapDispatchToProps = dispatch => ({

});

class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarDetalle: false,
      receta: null
    };
  }

  mostrarDetalle(receta) {
    this.setState({
      mostrarDetalle: true,
      receta: receta
    });
  }

  render() {
    console.log(this.state.receta);
    if (this.state.mostrarDetalle) {
     
      return (
        <div>
          <Redirect
            to={{
              pathname: "/receta",
              state: { receta: this.state.receta }
            }}
          />
        </div>
      );
    }

    return (
      <div className="cards_container">
        {this.props.favoritos.map(receta => (
          <div
            className="card"
            key={receta.id}
            onClick={() => this.mostrarDetalle(receta)}
          >
            <div className="card_header">
              <img
                className="card_image"
                src={receta.imagen}
                alt="imagen receta 1"
              ></img>
            </div>
            <div className="card_footer">
              <div>{receta.titulo}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Favoritos);
