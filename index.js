import React from "react";
import ReactDOM from "react-dom/client";



// const element=React.createElement("h1",{},"my name is khan and i am not a terrorist");
// const root=ReactDOM.createRoot(document.getElementById("container"));
// root.render(element);

const x=["mahika"," ganduka"];

// JSX ==> React.createElement ==> React element JS Object ==> HTML Element(Rendered)


// h1 is a React Element 
const headingElement=<h1> namaste react using jsx {x} </h1>;      //this is JSX not HTML (JSX is HTML like syntax in JS)




// h2 is a React Component    1) Class basrd components (old way of writing code)   2) Functional components ( new way of writing code)


// React functional component
const Headingcomponent= ()=>{ return <h2> namaste react using functional component </h2> };





const root=ReactDOM.createRoot(document.getElementById("container"));
root.render(headingElement);




