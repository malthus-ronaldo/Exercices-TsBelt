// Crée une fonction createCounter qui utilise une closure pour maintenir un compteur privé. Chaque appel à la fonction renvoie une fonction qui incrémente et renvoie le compteur actuel.

// Aide : Utilise une variable à l'intérieur de la fonction et retourne une fonction anonyme qui modifie cette variable.

export const CounterIncludes = () => {
  const createCounter = () => {
    let count = 0;

    return () => {
      count++; // Incrémente le compteur
      return count; // Retourne la valeur actuelle
    };
  };

  // Utilisation
  const counter = createCounter();
  console.log("EXO1 Closure");
  console.log(counter());
  console.log(counter());
  console.log(counter());
};
