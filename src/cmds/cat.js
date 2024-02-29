import { cwd } from "node:process";
import formatPath from "../lib/formatPath.js";
import { readFile } from "../lib/fsRead.js";
import construct from "../interpreter/configs/construct.js";
import chalk from "chalk";

const stdout = (data) => process.stdout.write(data);

export default function cat() {
  const currentWorkingDir = cwd();
  const filePath = formatPath(currentWorkingDir, ".yaatconstruct");

  stdout(`[-] Reading ${filePath} `);
  const yaatConstruct_raw = readFile(filePath);
  stdout(chalk.green(`[done]\n`));

  stdout(`[-] Constructing ${filePath} `);
  const yaatconstruct = construct(yaatConstruct_raw);
  stdout(chalk.green(`[done]\n\n`));

  const ycLen = yaatconstruct.length;

  if (ycLen > 0) {
    let object = {};
    for (let i = 0; i < ycLen; i++) {
      if (i % 2 === 0) {
        object[yaatconstruct[i]] = yaatconstruct[i + 1];
      }
    }
    console.log(object);
  } else {
    console.log({});
  }
  return void 0;
}
