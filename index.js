// import { stdout, stdin } from "node:process";

// stdout.write(`🚀 ~ :`);

// stdin.on("data", (data) => {
//   console.log( data.toString().trim())
//   stdout.write(`🚀 ~ :${data}`);
//   stdout.write(`🚀 ~ :`);
// });
// -----------------------

import { stdout, stdin } from "node:process";
import { saludar, chau } from "./saludar.js";
console.log(`🚀 ~ saludar:`, saludar);
// import saludarr from "./saludar.js";
// console.log(`🚀 ~ saludarr:`, saludarr)

stdout.write(`🚀 ~ :`);

stdin.on("data", async (data) => {
  const input = data.toString().trim();

  if (input === "date") {
    const date = new Date().toString();
    stdout.write(`${date}\n`);
  }

  stdout.write(`🚀 ~ : 3`);
});
