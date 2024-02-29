import { cwd } from "node:process";
import formatPath from "../lib/formatPath.js";
import { readFile } from "../lib/fsRead.js";
import yaatTree from "../interpreter/app/yaat.js";
import chalk from "chalk";

const stdout = (data) => process.stdout.write(data);

export default function build(path) {
  if (path) {
    const formatedPath = formatPath(cwd(), path);

    stdout(`[-] Reading ${formatedPath} `);
    const yaat = readFile(formatedPath);
    stdout(chalk.green(`[done]\n`));

    stdout(`[-] Building ${formatedPath} `);
    const engineBuild = yaatTree(yaat, path);
    stdout(chalk.green(`[done]\n\n`));

    console.log(engineBuild);
    return void 0;
  } else {
    throw { message: "Invalid char[3]. expected `args` got undefined" };
  }
}
