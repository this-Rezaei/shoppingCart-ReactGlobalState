import React, { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import "./ProductCard.css";
import formatCurrency from "format-currency";
import Rating from "./Rating";

const ProductCard = ({ product }) => {
    const { addtoCart } = useContext(CartContext);
    const ClickHandler = (e) => {
        e.preventDefault();
        addtoCart(product);
    };
    const options = { format: "%s%v", symbol: "€" };
    return (
        <div className="productCard__wrapper">
            <div>
                <img className="productCard__img" src={product.image} alt="" />
                <h4>{product.name}</h4>
                <div className="ProductCard__price">
                    <h5>{formatCurrency(`${product.price}`, options)}</h5>
                </div>
                <div className="ProductCard__Rateing">
                    <Rating
                        value={product.rating}
                        text={`${product.numReviews}`}
                    />
                </div>
                <button onClick={ClickHandler} className="ProductCard__button">
                    Add to basket
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
