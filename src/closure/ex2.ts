// Crée une fonction createMultiplier qui prend un facteur en paramètre et retourne une fonction qui multiplie un nombre par ce facteur.

export const MultiplierIncludes = () => {
  const createMultiplier = (factor: number) => {
    return (num: number) => {
      return num * factor;
    };
  };

  const double = createMultiplier(2);
  console.log("EXO2 closure ");
  console.log(double(5));
  console.log(double(3));
  console.log(double(10));
};
