export const DictFn8 = () => {
  const obj = { name: "Laptop", price: 1000 };

  const updatedObj = { ...obj, price: 2000 };

  const result =
    obj.price !== updatedObj.price
      ? "Les prix sont différents"
      : "Les prix sont identiques";

  console.log("EXO8 DictFn");
  console.log(result);
};
