import React, { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import formatCurrency from "format-currency";
import CartItem from "./CartItem";
import "./Cart.css";
const Cart = () => {
    const { cartItems, showCart, showHideCart } = useContext(CartContext);
    const options = { format: "%s%v", symbol: "€" };
    return (
        <>
            {showCart && (
                <div className="cart__wrapper">
                    <div style={{ textAlign: "right" }}>
                        <i
                            style={{ cursor: "pointer" }}
                            className="fa fa-times-circle"
                            aria-hidden="true"
                            onClick={showHideCart}
                        ></i>
                    </div>
                    <div className="cart__innerWrapper">
                        {cartItems.length === 0 ? (
                            <h4>Cart is Empty</h4>
                        ) : (
                            <ul>
                                {cartItems.map((item) => (
                                    <CartItem key={item._id} item={item} />
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="Cart__cartTotal">
                        <div>Cart Total</div>
                        <div></div>
                        <div style={{ marginLeft: 5 }}>
                            {formatCurrency(
                                cartItems.reduce(
                                    (amount, item) => item.price + amount,
                                    0
                                ),
                                options
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Cart;
