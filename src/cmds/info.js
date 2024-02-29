import chalk from "chalk";
import { readFile } from "../lib/fsRead.js";
import construct from "../interpreter/configs/construct.js";

export default function info() {
  const yaatVersionsArray = readFile(".yaat_versions");
  const yaatVersions = construct(yaatVersionsArray);
  const yaatUser = readFile(".user");

  let CLIversion =
    chalk.blue("yaat CLI version ") + chalk.yellow(yaatVersions[1]);
  let Clientversion =
    chalk.blue("yaat Client version ") + chalk.yellow(yaatVersions[3]);
  let currentUser = chalk.blue("currentUser ~ ") + chalk.yellow(yaatUser);

  let template = `
  y y y y y y y y     
  y             y    ${CLIversion}
  y             y
  y             y    ${Clientversion}
  y             y
  y       y y y y    ${currentUser}
  y       y y y
  y y y y y y        
`;

  console.log(template);
  return void 0;
}
