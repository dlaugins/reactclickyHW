import React from "react";


// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  headerStyle: {
    backgroundImage: "url(" + "https://tse2.mm.bing.net/th?id=OIP.FzAl6D4GENt1Wx-_0ImqkQHaDg&pid=15.1&P=0&w=323&h=154" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    opacity: "50"
  },
  headingStyle: {
    fontSize: 100,
    height: "300px",
    position: "center"

  },
  headingSubStyle: {
    fontSize: 50,
    position: "center",
    marginRight: "15px",
    marginLeft: "15px",
    fontWeight:"bold"

  }
};

// We use JSX curly braces to evaluate the style object

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <div class="row">
        <div class="col-2"></div>
        <div class="col-8">
          <h1 style={styles.headingStyle}>Clicky Game!</h1>
        </div>
        <div class="col-2" ></div>
      </div>
      <div class="row">
          <h1 style={styles.headingSubStyle}>Click on an image to earn points, 
          but don't click on any more than once! </h1>
     </div >
    </header >
  );
}

export default Header;
