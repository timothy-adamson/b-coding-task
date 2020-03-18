import React, { useEffect, useState } from "react";
import ProductsList from "../components/products/ProductsList";
import { Product } from "../interfaces/products_interfaces";
import { getAllProducts } from "../utilities/getProducts";

const ViewAllProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    getAllProducts()
      .then(data => setProducts(data))
      .catch(() => {
        throw new Error("An error occurred fetching products data.");
      });
  }, []);

  return (
    <div>
      <div>
        <h2>Products</h2>
      </div>
      {products ? (
        <ProductsList products={products}></ProductsList>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ViewAllProducts;
