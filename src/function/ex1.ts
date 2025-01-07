import { F } from "@mobily/ts-belt";

export const FunctionFn1 = () => {
  const createIdentity = <T>(value: T) => F.identity(value);

  console.log("EXO1 Function");
  console.log(createIdentity(42));
  console.log(createIdentity("Hello, World!"));
  console.log(createIdentity({ name: "Alice", age: 30 }));
};
