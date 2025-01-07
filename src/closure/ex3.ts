// Crée une fonction applyOperation qui prend une fonction d'opération (comme addition ou multiplication) et renvoie une nouvelle fonction qui applique cette opération à deux arguments.

export const OperationIncludes = () => {
  const applyOperation = (operation: (a: number, b: number) => number) => {
    return (a: number, b: number) => {
      return operation(a, b);
    };
  };

  const add = applyOperation((a, b) => a + b);
  console.log("EXO3 Closure");
  console.log(add(3, 4));
  console.log(add(10, 15));

  const multiply = applyOperation((a, b) => a * b);
  console.log(multiply(3, 4));
  console.log(multiply(6, 7));
};
