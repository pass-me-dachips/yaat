import { cwd } from "node:process";
import argsParser from "../lib/argsParser.js";
import formatPath from "../lib/formatPath.js";
import { writeFile, mkDir } from "../lib/fsWrite.js";
import chalk from "chalk";
import { branch_IndexdotYaat, branch_dotyaatEmbed } from "../init/branch.js";
import {
  tree_installation,
  tree_introduction,
  tree_useCases,
  tree_dotyaatconstruct,
  tree_dotyaatEmbed,
} from "../init/tree.js";

const stdout = (data) => process.stdout.write(data);

export default function init(args) {
  const parsedArgs = argsParser(args, ["m-", "t-"]);
  const mode = parsedArgs[0];
  const title = parsedArgs[1] ?? "Yaat Aplication";

  if (mode && (mode === "tree" || mode === "branch")) {
    stdout(chalk.blue(`[-] initializing app...... \n`));
    stdout(chalk.blue(`[mode] - ${chalk.white(mode)} \n`));
    stdout(chalk.blue(`[title]  - ${chalk.white(title)} \n\n`));

    const path = (base) => formatPath(cwd(), base);
    mkDir(path("docs"));
    process.chdir(path("docs")); //change the working dir to docs

    if (mode === "tree") {
      stdout(chalk.blue.bold(`[!] writing (5) files to \`${cwd()}\` \n`));
      writeFile(path("introduction.yaat"), tree_introduction(title));
      writeFile(path("installation.yaat"), tree_installation());
      writeFile(path("useCases.yaat"), tree_useCases());
      writeFile(path(".yaatconstruct"), tree_dotyaatconstruct());
      writeFile(path(".yaatEmbed"), tree_dotyaatEmbed());
      stdout(chalk.white(`[done] Build completed 🍹🍹.\n`));
    } else {
      // branch
      stdout(chalk.blue.bold(`[!] writing (2) files to \`${cwd()}\` \n`));
      writeFile(path("index.yaat"), branch_IndexdotYaat(title));
      writeFile(path(".yaatEmbed"), branch_dotyaatEmbed());
      stdout(chalk.white(`[done] Build completed 🍹🍹.\n`));
    }
  } else {
    let message = `Invalid argument parsed. expected \`tree\` or \`branch\`, got \`${parsedArgs[0]}\`.`;
    throw { message };
  }
}
