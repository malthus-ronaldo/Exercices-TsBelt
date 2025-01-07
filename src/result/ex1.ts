// import * as Result from "path-to-result-module";

// export const resultFn1 = () => {
//   // Transformer une exécution en Result
//   const fromExecution = <T>(fn: () => T): Result.Result<T, Error> => {
//     try {
//       const value = fn(); // Tente d'exécuter la fonction
//       return Result.Ok(value); // Retourne un résultat Ok si aucune erreur
//     } catch (error) {
//       return Result.Error(error as Error); // Capture l'erreur et retourne un résultat Error
//     }
//   };

//   // Fonction risquée
//   const riskyFunction = () => {
//     if (Math.random() > 0.5) {
//       return 100;
//     }
//     throw new Error("Erreur");
//   };

//   const result = fromExecution(riskyFunction);

//   Result.match(
//     result,
//     (value) => {
//       console.log("EXO Result");
//       console.log(`Succès : ${value}`);
//     },
//     (error) => {
//       console.log("EXO Result");
//       console.log(`Erreur : ${error.message}`);
//     },
//   );
// };
