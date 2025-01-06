import { A } from "@mobily/ts-belt";
import { Product } from "./type";

//Exercice 6: Utilise A.includes (pour vérifier si un produit spécifique est inclus dans la liste)

const products1: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
];
const products2: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Keyboard", price: 75, inStock: true },
];

export const ArrayFn6 = () => {
  const isIncluded = A.includes(products1, products2[1]);

  console.log("EXO6");
  console.log(`Is the specific product included in products1? ${isIncluded}`);
};
