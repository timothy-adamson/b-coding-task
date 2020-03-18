import React from "react";
import "../../styles/page-layout.css";
import { useShoppingCart } from "../../utilities/useShoppingCart";
import { Link } from "react-router-dom";

const PageLayout: React.FC = ({ children }) => {
  const { basket } = useShoppingCart();

  const basketSize = basket.reduce<number>((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <div className="container">
      <div className="cart-indicator">
        <Link to="/cart">
          <h6>{`${basketSize} items`}</h6>
          <i className="material-icons">shopping_cart</i>
        </Link>
      </div>
      {children}
    </div>
  );
};

export default PageLayout;
