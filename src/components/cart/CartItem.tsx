import React from "react";
import { FullProductSku } from "../../interfaces/products_interfaces";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../utilities/useShoppingCart";

const CartItem: React.FC<{ product: FullProductSku; quantity: number }> = ({
  product,
  quantity
}) => {
  const { add, remove } = useShoppingCart();

  return (
    <div className="cart-item">
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={`Product`}></img>
      </Link>
      <div>
        <div>
          <h6>{product.title}</h6>
          <p>{product.description}</p>
        </div>
        <div className="quantity-control">
          <span>Quantity:</span>
          <i
            className="material-icons"
            onClick={() => {
              add(product.id, 1);
            }}
          >
            add
          </i>
          <span>{quantity}</span>
          <i
            className="material-icons"
            onClick={() => {
              remove(product.id, 1);
            }}
          >
            remove
          </i>
        </div>
        <p>{`£${product.price * quantity}`}</p>
      </div>
    </div>
  );
};

export default CartItem;
