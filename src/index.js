import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

// new Promise((resolve, reject) => {
//   return reject(new Error("No bears"));
//   setTimeout(() => {
//     resolve("Bears,Whateves,Whateves2");
//   }, 2000);
// })
//   .then(quote => {
//     console.log(quote);
//   })
//   .catch(error => console.log(error));
