import { Product, FullProductSku } from "../interfaces/products_interfaces";

export const getAllProducts: () => Promise<Product[]> = () => {
  return fetch("json/product.json")
    .then(response => {
      if (!response.ok) throw new Error("HTTP Error fetching products data");

      return response.json();
    })
    .then((json: Product[]) => json);
};

export const getProduct: (id: string) => Promise<Product | undefined> = id => {
  return fetch("../../json/product.json")
    .then(response => {
      if (!response.ok) throw new Error("HTTP Error fetching products data");
      return response.json();
    })
    .then((json: Product[]) => json.find(product => product.id === id));
};

export const getFullProductSku: (
  id: string
) => Promise<FullProductSku | undefined> = id => {
  return fetch("../../json/product.json")
    .then(response => {
      if (!response.ok) throw new Error("HTTP Error fetching products data");
      return response.json();
    })
    .then((json: Product[]) => {
      for (let i = 0; i < json.length; i++) {
        const product = json[i];
        const sku = product.skus.find(sku => sku.id === id);

        if (sku) {
          return {
            ...sku,
            image: product.image,
            brand: product.brand,
            title: product.title
          };
        }
      }
    });
};
