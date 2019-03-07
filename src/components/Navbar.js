import React from "react";


// By importing the Navbar.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  navbarStyle: {
    background: "blue",
    height: "100px",
    fontSize: "25px",
    fontWeight: "bold",
    color:"White"
  }
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Navbar() {
  return (
    <nav style={styles.navbarStyle} className="navbar">
        <div className="row">
          <div className="col-3">CLICKY GAME</div>
          <div className="col-4">Click an Image to begin!</div>
          <div className="col-2">Score: 0  </div>
          <div className="col-2" >Top Score: 0</div>
        </div>
     </nav>
  )};
export default Navbar;
