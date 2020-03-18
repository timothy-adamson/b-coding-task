import React from "react";
import { Product } from "../../interfaces/products_interfaces";
import ProductCard from "./ProductCard";
import "../../styles/products.css";

interface ProductsListProps {
  products: Product[];
}

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  return (
    <div className="products-list">
      {products.map((product: Product) => (
        <div key={product.id}>
          <ProductCard product={product}></ProductCard>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
