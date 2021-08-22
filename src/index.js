import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import CartState from "./context/cart/CartState";
ReactDOM.render(
    <CartState>
        <App />
    </CartState>,
    document.getElementById("root")
);
