// Exercice 2: Ajouter des produits et récupérer un élément à une position donnée
// Utilise Array.prepend (pour ajouter le produit Monitor au début de la liste).
// Utilise Array.append (pour ajouter le produit Keyboard à la fin de la liste).

import { Product } from "./type";

import { A } from "@mobily/ts-belt";

import { pipe } from "@mobily/ts-belt";

const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Headphones", price: 50, inStock: true },
];
export const ArrayFn2 = () => {
  const newProducts = pipe(
    products,
    A.prepend({ name: "Monitor", price: 150, inStock: true }),
    A.append({ name: "Keyboard", price: 75, inStock: true }),
  );

  const productAtIndex2 = A.at(newProducts, 2);

  console.log("EXO2");
  console.log(newProducts, productAtIndex2);
};
