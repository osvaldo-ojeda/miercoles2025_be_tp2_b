// import { stdout, stdin } from "node:process";

// stdout.write(`🚀 ~ :`);

// stdin.on("data", (data) => {
//   console.log( data.toString().trim())
//   stdout.write(`🚀 ~ :${data}`);
//   stdout.write(`🚀 ~ :`);
// });
// -----------------------

// import { stdout, stdin } from "node:process";
// import { date, pwd } from "./cli.js";

// stdout.write(`🚀 ~ :`);

// stdin.on("data", async (data) => {
//   const input = data.toString().trim();

//   if (input === "date") {
//     const fecha = await date();
//     stdout.write(`${fecha}\n`);
//   }
//   if (input === "pwd") {
//     const dir = await pwd();
//     stdout.write(`${dir}\n`);
//   }

//   stdout.write(`🚀 ~ : `);
// });

// --------------------------------
import { stdout, stdin } from "node:process";
import * as commands from "./cli.js";
//  console.log(`🚀 ~ commands:`, Object.keys(commands))

// const comandos= {
//      date: commands.date,
//      pwd: commands.pwd,
//      ls: commands.ls,
//      cat: commands.cat,
//      echo: commands.echo,
//      head: commands.head,
//      tail: commands.tail,
// }

stdout.write(`🚀 ~ :`);

stdin.on("data", async (data) => {
  try {
    const input = data.toString().trim();
    const [command, ...params] = input.split(" ")

    if (!commands[command]) {
      throw new Error(
        `Command not found: ${command}, available commands: ${Object.keys(
          commands
        ).join(", ")}`
      );
    }

    const res = await commands[command](params);
    stdout.write(`${res}\n`);
  } catch (error) {
    stdout.write(`Error: ${error.message}\n`);
  } finally {
    stdout.write(`🚀 ~ : `);
  }
});
