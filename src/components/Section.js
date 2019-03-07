import React, { Component } from "react";
import Data from "../data.json";


// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
 sectionStyles: {
   background: "white"
 }
};

// We use JSX curly braces to evaluate the style object on the JSX tag
// console.log(this.state.Data)
class Section extends Component {

 state = {
   data: Data,
   score: 0,
   topScore: 0,
 }
 componentDidMount() {
   this.setState({ data:Data });
 }

 render() {
   return (
     // <div>section</div>
     <div>
       {
         this.state.data.map((item, index)=>
           <img src={item.image} key = {index}
           className = "disney" alt = "disney" height = "130" width = "130"/>
         )
       }
     </div>
   )
 }
}

export default Section;