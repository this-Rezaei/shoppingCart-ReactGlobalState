import React, { useContext } from "react";
import "./CartItem.css";
import CartContext from "../context/cart/CartContext";
import formatCurrency from "format-currency";

const CartItem = ({ item }) => {
    const { removeItem } = useContext(CartContext);
    const options = { format: "%s%v", symbol: "€" };
    return (
        <li className="CartItem__item">
            <img src={item.image} alt="" />
            <div>
                {item.name}
                {formatCurrency(`${item.price}`, options)}
            </div>
            <button
                className="CartItem__button"
                onClick={() => removeItem(item._id)}
            >
                Remove
            </button>
        </li>
    );
};

export default CartItem;
