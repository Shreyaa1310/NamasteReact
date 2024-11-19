


// const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, 'hello from React');
    // console.log(heading);  
    // const root = ReactDOM.createRoot(document.getElementById('root'));
    // root.render(heading)
    
import React from "react";
import ReactDOM from "react-dom/client";


// React.createElement => Object => HTMLElement(render)

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

// JSX -- HTML like or XML like syntax
// JSX transpiled before it reaches the JS engine - who is transpiling Babel is doing it
// -- BAbel is a package

const jsxHeading = <h1 id="heading">Namaste React Using JSX</h1>
 
console.log(jsxHeading)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(jsxHeading);