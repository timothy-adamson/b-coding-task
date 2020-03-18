import React, { useState, useEffect } from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import { Product } from "../interfaces/products_interfaces";
import { getProduct } from "../utilities/getProducts";
import ProductCard from "../components/products/ProductCard";

interface MatchParams {
  id: string;
}

const ViewProduct: React.FC<RouteComponentProps<MatchParams>> = ({
  match
}: RouteComponentProps<MatchParams>) => {
  const [product, setProduct] = useState<Product | undefined>();

  useEffect(() => {
    getProduct(match.params.id)
      .then(data => setProduct(data))
      .catch(() => {
        throw new Error("An error occurred fetching product data.");
      });
  }, [match.params.id]);

  return (
    <div className="view-single-product">
      {product ? (
        <React.Fragment>
          <Link to="/">back</Link>
          <ProductCard product={product}></ProductCard>
          <div>
            <h2>{product.title}</h2>
            <h4>{product.brand.name}</h4>
          </div>
        </React.Fragment>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ViewProduct;
