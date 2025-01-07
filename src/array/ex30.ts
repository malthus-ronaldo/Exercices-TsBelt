import { Product } from "./type";

const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
];

export const applyDiscount = (
  products: Product[],
  discountCriteria: (product: Product) => boolean,
  discountPercentage: number,
): number => {
  const totalAfterDiscount = products.reduce((total, product) => {
    if (discountCriteria(product)) {
      const discountedPrice = product.price * (1 - discountPercentage / 100);
      return total + discountedPrice;
    }
    return total + product.price;
  }, 0);

  return totalAfterDiscount;
};

export const ArrayFn30 = () => {
  const discountCriteria = (product: Product) => product.price > 100; // Réduction sur les produits à plus de 100
  const discountPercentage = 10; // Réduction de 10%

  const total = applyDiscount(products, discountCriteria, discountPercentage);

  console.log("EXO30");
  console.log(`Total price after discount: ${total}`);
};
