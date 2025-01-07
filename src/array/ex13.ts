import { A } from "@mobily/ts-belt";
import { Product } from "./type";

// Définition des produits
const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
  { name: "Monitor", price: 200, inStock: true },
];

export const ArrayFn13 = () => {
  console.log("EXO13");
  const reversedProducts = A.reverse(products);

  const shuffledProducts = A.shuffle(products);

  console.log("EXO13");
  console.log("Reversed products:");
  console.log(reversedProducts);
  console.log("Shuffled products:");
  console.log(shuffledProducts);
};
