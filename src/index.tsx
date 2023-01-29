import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import './firebase'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
console.log(process.env)
root.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>
);


