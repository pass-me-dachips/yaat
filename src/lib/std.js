import { stdout } from "node:process";
import chalk from "chalk";

export function stdWrite(message, color = "white", breakLine = true) {
  let output = message;
  if (breakLine) {
    output += "\n";
  }
  stdout.write(chalk[color](output));
  return void 0;
}
