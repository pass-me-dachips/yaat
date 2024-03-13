import { stdout } from "node:process";
import chalk from "chalk";

export function stdWrite(
  message,
  color = "white",
  breakLine = true,
  useBoldFonts = false
) {
  let output = message;
  const arg1 = useBoldFonts ? chalk.bold : chalk;
  if (breakLine) {
    output += "\n";
  }
  stdout.write(arg1[color](output));
  return void 0;
}
