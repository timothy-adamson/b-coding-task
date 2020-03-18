interface ProductBrand {
  id: string;
  name: string;
  slug: string;
}

interface ProductSku {
  description: string;
  id: string;
  price: number;
  stock: number;
}

export interface FullProductSku extends ProductSku {
  image: string;
  brand: ProductBrand;
  title: string;
}

export interface Product {
  image: string;
  brand: ProductBrand;
  title: string;
  id: string;
  skus: ProductSku[];
}
