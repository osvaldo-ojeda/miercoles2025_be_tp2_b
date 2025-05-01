import { cwd } from "node:process";
import { readdir, readFile } from "node:fs/promises";

export async function date() {
  const date = new Date().toString();
  return date;
}

export async function pwd() {
  return cwd();
}

export async function ls() {
  // console.log(await readdir(cwd()))
  return (await readdir(cwd())).join("\n");
  //     resolver con stat los datos del archivo
}

export async function echo(params) {
  return params.join(" ");
}

export async function cat(params) {
     console.log(`🚀 ~ cat ~ params:`, params)
     return readFile(params[0], "utf-8")
   }
