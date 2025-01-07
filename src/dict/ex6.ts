import { D } from "@mobily/ts-belt";

export const DictFn6 = () => {
  const obj = { name: "Laptop", price: 1000, stock: true };

  const price = D.get(obj, "price");

  const stock = D.getUnsafe(obj, "stock");

  console.log("EXO DictFn6");
  console.log(`Price (with get): ${price}`);
  console.log(`Stock (with getUnsafe): ${stock}`);
};
