// // Exercice 1: extraire les produits en stock

import { Product } from "./type";

import { A } from "@mobily/ts-belt";

const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
];

export const ArrayFn1 = () => {
  const allInStock = A.all(products, (product) => product.inStock);
  const anyOutOfStock = A.any(products, (product) => !product.inStock);
  const totalProducts = A.length(products);

  console.log("EXO1");
  console.log(allInStock, anyOutOfStock, totalProducts);
};
