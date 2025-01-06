import { A } from "@mobily/ts-belt";
import { Product } from "./type";

const inventory1: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
];
const inventory2: Product[] = [
  { name: "Keyboard", price: 75, inStock: true },
  { name: "Monitor", price: 200, inStock: false },
];

export const ArrayFn4 = () => {
  const commonProducts = A.intersection(inventory1, inventory2);
  const uniqueProducts = A.difference(inventory1, inventory2);

  console.log("EXO4");
  console.log(commonProducts, uniqueProducts);
};
