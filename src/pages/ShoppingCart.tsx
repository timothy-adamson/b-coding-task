import React from "react";
import CartList from "../components/cart/CartList";
import { useShoppingCart } from "../utilities/useShoppingCart";
import { Link } from "react-router-dom";
import "../styles/shopping-cart.css";

const ShoppingCart: React.FC = () => {
  const { basket } = useShoppingCart();
  return (
    <div>
      <Link to="/">back</Link>
      <CartList products={basket}></CartList>
    </div>
  );
};

export default ShoppingCart;
