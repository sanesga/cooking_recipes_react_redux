import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const mapStateToProps = state => {
  if (JSON.parse(sessionStorage.getItem("recetas"))) {
    return {
      recetas: JSON.parse(sessionStorage.getItem("recetas"))
    };
  } else {
    return {
      recetas: state.recetas
    };
  }
};

const mapDispatchToProps = dispatch => ({
});

//utilizamos el context para pasar la receta seleccionada al componente receta
export const MyContext = React.createContext();

class Recetas extends Component {
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

    // <MyContext.Provider value={receta}>
    //   <Receta></Receta>
    // </MyContext.Provider>
  }

  render() {
    if (this.state.mostrarDetalle) {
      // console.log(this.state.receta)
      // return <Receta></Receta>
      return (
        <div>
          {/* <MyContext.Provider value={this.state.id}>
        <Receta></Receta>
      </MyContext.Provider> */}
          {/* <Redirect to="/receta"></Redirect> */}
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
        {this.props.recetas.map(receta => (
          <div
            className="card"
            key={receta.id}
            onClick={() => this.mostrarDetalle(receta)}
          >
            {/* si hemos guardado un id en el state porque hemos hecho click, guardará la receta en el context */}
            {/* {this.state.id !== -1 && (
              <MyContext.Provider value={receta}>
                <Receta></Receta>
              </MyContext.Provider>
            )} */}
            <div className="card_header">
              <img
                className="card_image"
                src={receta.imagen}
                alt="imagen receta 1"
              ></img>
            </div>
            <div className="card_footer">
              <div>{receta.titulo}</div>
              {/* <FontAwesomeIcon icon={faTrash} /> */}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
//export default Recetas;
export default connect(mapStateToProps, mapDispatchToProps)(Recetas);
