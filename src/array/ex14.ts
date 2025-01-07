import { A } from "@mobily/ts-belt";
import { Product } from "./type";

const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
];

export const ArrayFn14 = () => {
  const uniqueProductsByPrice = A.uniqBy(products, (product) => product.price);

  console.log("EXO14");
  console.log("Liste sans doublons (par prix):", uniqueProductsByPrice);
};
