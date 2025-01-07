export const DictFn4 = () => {
  const filterProperties = (obj: Record<string, any>, prefix: string) => {
    return Object.fromEntries(
      Object.entries(obj).filter(([key]) => key.startsWith(prefix)),
    );
  };

  const obj = { price: 1000, stock: true, brand: "Dell", processor: "Intel" };

  const filteredObj = filterProperties(obj, "p");

  console.log("EXO4 Dict");
  console.log(filteredObj);
};
