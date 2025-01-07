import { A } from "@mobily/ts-belt";
import { Product } from "./type";

// Exercice 7: garder les produits qui sont au dessus de 74€
const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
  { name: "Monitor", price: 200, inStock: true },
  { name: "Headphones", price: 50, inStock: false },
];

export const ArrayFn7 = () => {
  const filteredProducts = A.filter(products, (product) => product.price > 74);

  console.log("EXO7");
  console.log("Filtered products:", filteredProducts);
};
