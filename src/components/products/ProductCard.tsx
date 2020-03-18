import React, { useState, ChangeEvent } from "react";
import { Product } from "../../interfaces/products_interfaces";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../utilities/useShoppingCart";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { add } = useShoppingCart();
  const [selectedSize, setSelectedSize] = useState(product.skus[0]);

  const handleSizeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newSelection =
      product.skus.find(sku => sku.id === event.target.value) ||
      product.skus[0];
    setSelectedSize(newSelection);
  };

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={`Product`}></img>
        <h6>{product.title}</h6>
      </Link>
      <p>{`£${selectedSize.price}`}</p>
      <div>
        <i className="material-icons" onClick={() => add(selectedSize.id, 1)}>
          add_shopping_cart
        </i>
        <select
          id={`${product.id}-size-select`}
          value={selectedSize.id}
          onChange={handleSizeChange}
        >
          {product.skus.map(sku => (
            <option key={sku.id} value={sku.id}>
              {sku.description}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductCard;
