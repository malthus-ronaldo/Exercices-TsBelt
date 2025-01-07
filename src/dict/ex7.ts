export const DictFn7 = () => {
  const clearObject = (obj: Record<string, any>) => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        delete obj[key];
      }
    }
    return obj;
  };

  const obj = { name: "Laptop", price: 1000, stock: true };
  console.log("EXO7 Dict");
  console.log("Before clearing:", obj);

  clearObject(obj);
  console.log("After clearing:", obj);

  const isEmpty = Object.keys(obj).length === 0;
  console.log("Is the object empty?", isEmpty);
};
