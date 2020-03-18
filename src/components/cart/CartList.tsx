import React, { useState, useEffect } from "react";
import { FullProductSku } from "../../interfaces/products_interfaces";
import CartItem from "./CartItem";
import "../../styles/products.css";
import { getFullProductSku } from "../../utilities/getProducts";
import { BasketItem } from "../../interfaces/shopping_cart_interfaces";
import { useShoppingCart } from "../../utilities/useShoppingCart";

interface CartListProps {
  products: BasketItem[];
}

const CartList: React.FC<CartListProps> = ({ products }) => {
  const [cartItems, setCartItems] = useState<(FullProductSku | undefined)[]>(
    []
  );

  // Fetch full details of SKU including image and title

  useEffect(() => {
    Promise.all(products.map(product => getFullProductSku(product.id))).then(
      skuData => {
        setCartItems(skuData);
      }
    );
  }, [products]);

  const { empty } = useShoppingCart();

  return (
    <div className="cart-list">
      {cartItems.map((product: FullProductSku | undefined, index) =>
        product && products[index] ? (
          <div key={product.id}>
            <CartItem
              product={product}
              quantity={products[index].quantity}
            ></CartItem>
          </div>
        ) : (
          <div>Error finding product</div>
        )
      )}
      {cartItems.length > 0 ? (
        <button onClick={() => empty()}>Empty Shopping Cart</button>
      ) : (
        <h6>No items in your shopping cart</h6>
      )}
    </div>
  );
};

export default CartList;
