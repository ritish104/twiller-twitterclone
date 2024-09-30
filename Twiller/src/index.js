import React from "react";
import ReactDOM from 'react-dom'; // Correct import for React 18+
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(

    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')

);
