// // Exercice 1: Supprimer une clé d'un objet avec deleteKey.

export const DictFn1 = () => {
  const deleteKey = (obj: Record<string, any>, key: string) => {
    const { [key]: _, ...rest } = obj;
    return rest;
  };

  const objf = { name: "Laptop", price: 1000, stock: true };
  const updatedObj = deleteKey(objf, "price");

  console.log("EXO1 Dict");
  console.log("Original Object:", objf);
  console.log("Updated Object:", updatedObj);
};
