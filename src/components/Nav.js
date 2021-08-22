import React, { useContext } from "react";
import CartContext from "../context/cart/CartContext";

import "./Nav.css";
const Nav = () => {
    const { cartItems, showHideCart } = useContext(CartContext);
    return (
        <div>
            <nav>
                <div className="nav__left">Store</div>
                <div className="nav__middle">
                    <div className="input__wrapper">
                        <input type="text" />
                        <i className="fas fa-search" />
                    </div>
                </div>
                <div className="nav__right">
                    <div className="cart__icon">
                        <i
                            onClick={showHideCart}
                            className="fa fa-shopping-cart"
                            aria-hidden="true"
                        />
                        {cartItems.length > 0 && (
                            <div className="item__count">
                                <span>{cartItems.length}</span>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
