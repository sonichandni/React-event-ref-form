import React from "react";
import ReactDOM from "react-dom";

import Counter from "./App";
import Autofocus from "./Rref";
import FormComponent from "./Form";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Counter />
    <Autofocus />
    <FormComponent />
  </React.StrictMode>,
  rootElement
);
