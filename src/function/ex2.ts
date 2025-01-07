export const FunctionFn2 = () => {
  const allPass = (num: number, predicates: ((n: number) => boolean)[]) => {
    return predicates.every((predicate) => predicate(num));
  };

  const number = 12;
  const predicates = [(n: number) => n > 10, (n: number) => n % 2 === 0];

  console.log("EXO2 Function");
  console.log(allPass(number, predicates));

  const anotherNumber = 9;
  console.log(allPass(anotherNumber, predicates));
};
