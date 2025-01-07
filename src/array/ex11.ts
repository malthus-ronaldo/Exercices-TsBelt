// extraire une sous liste de l'index 1 à 3
// prendre les 2 premiers éléments
// prendre des éléments tant que le prix est supérieur à 5
import { A } from "@mobily/ts-belt";
import { Product } from "./type";

const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
  { name: "Monitor", price: 200, inStock: true },
];
export const ArrayFn11 = () => {
  console.log("EXO11");

  const subList = A.slice(products, 1, 4);
  console.log("Sous-liste (index 1 à 3):", subList);

  const firstTwo = A.take(products, 2);
  console.log("Les 2 premiers éléments:", firstTwo);

  const filtered = A.takeWhile(products, (product) => product.price > 5);
  console.log("Éléments avec prix > 5:", filtered);
};
