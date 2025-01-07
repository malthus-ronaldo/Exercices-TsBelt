// import * as F from "@mobily/ts-belt";
// import { pipe } from "@mobily/ts-belt";
// import * as R from "@mobily/ts-belt/Result";

// export const PipeExample = () => {
//   // Exemple : Transformation avec pipe
//   const parseUserName = (input: string) => {
//     return pipe(
//       input,
//       F.tryCatch<string, { name: string }>(JSON.parse),
//       R.map((user) => user.name),
//       R.getWithDefault("oops"),
//     );
//   };

//   console.log("EXO4 function");
//   console.log(parseUserName('{"name": "Joe"}'));
//   console.log(parseUserName('{"invalid": "data"}'));
//   console.log(parseUserName("not a JSON"));
// };
