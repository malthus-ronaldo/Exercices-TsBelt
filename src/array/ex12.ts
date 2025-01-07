// //  grouper les produits par catéogire de prix: ceux entre 0 à 100 et ceux entre 100 à 1000
import { A } from "@mobily/ts-belt";
import { Product } from "./type";

const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
  { name: "Monitor", price: 200, inStock: true },
];
export const ArrayFn12 = () => {
  console.log("EXO12");
  const lowPriceCategory = A.filter(
    products,
    (product) => product.price >= 0 && product.price <= 100,
  );
  const midPriceCategory = A.filter(
    products,
    (product) => product.price > 100 && product.price <= 1000,
  );

  const groupedProducts = {
    "0-100": lowPriceCategory,
    "101-1000": midPriceCategory,
  };

  console.log("Grouped Products:");
  console.log(groupedProducts);

  return groupedProducts;
};

ArrayFn12();
