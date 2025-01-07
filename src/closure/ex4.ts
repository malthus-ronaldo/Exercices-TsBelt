// Crée une fonction memoize qui prend une fonction lente en paramètre et retourne une version mémorisée de cette fonction. La fonction mémorisée doit stocker les résultats des appels précédents dans une closure.

export const MemoizeExample = () => {
  const memoize = (fn: (x: number) => number) => {
    const cache: Record<number, number> = {};

    return (x: number) => {
      if (x in cache) {
        console.log(`Fetching from cache for ${x}`);
        return cache[x];
      } else {
        console.log(`Calculating result for ${x}`);
        const result = fn(x);
        cache[x] = result;
        return result;
      }
    };
  };

  const slowFunction = (n: number) => {
    return n * n;
  };

  const memoizedFunction = memoize(slowFunction);

  console.log("EXO4 Closure");
  console.log(memoizedFunction(5));
  console.log(memoizedFunction(5));
  console.log(memoizedFunction(10));
  console.log(memoizedFunction(10));
};
