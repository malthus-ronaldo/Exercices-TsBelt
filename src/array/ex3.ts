// // Exercice 3: Fussionner plusieurs array

import { Product } from "./type";

import { A } from "@mobily/ts-belt";

const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
];
const accessories: Product[] = [
  { name: "Keyboard", price: 75, inStock: true },
  { name: "Monitor", price: 200, inStock: true },
];
export const ArrayFn3 = () => {
  const combinedProducts = A.concat(products, accessories);
  const addProducts = A.concatMany([products, accessories]);
  const copiedProducts = A.copy(addProducts);

  console.log("EXO3");
  console.log(combinedProducts, addProducts, copiedProducts);
};
