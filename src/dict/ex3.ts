export const DictFn3 = () => {
  const extractNumberProperties = (obj: Record<string, any>) => {
    const result: Record<string, number> = {};

    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === "number") {
        result[key] = value;
      }
    }

    return result;
  };

  // Utilisation
  const obj = {
    name: "Laptop",
    price: 1000,
    stock: true,
    category: "Electronics",
  };
  const extracted = extractNumberProperties(obj);

  console.log("EXO DictFn3");
  console.log(extracted);
};
