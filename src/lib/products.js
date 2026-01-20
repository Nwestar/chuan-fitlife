import products from "../data/products.json";

export const getProducts = () => products;

export const getProductById = (id) =>
  products.find((product) => product.id === id);
