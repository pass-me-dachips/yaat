import { cwd } from "node:process";
import argsParser from "../lib/argsParser.js";
import formatPath from "../lib/formatPath.js";
import { writeFile, mkDir } from "../lib/fsWrite.js";
import {
  mode_dotyaatembed,
  mode_overview,
  tree_dotyaatconstruct,
} from "../templates/init/branch.js";
import { stdWrite } from "../lib/std.js";

export default function init(args) {
  const parsedArgs = argsParser(args, ["m-", "t-"]);
  const mode = parsedArgs[0];
  const title = parsedArgs[1] ?? "Yaat Aplication";

  if (mode && (mode === "tree" || mode === "branch")) {
    const HEAD = (heading) => [`[${heading}] `, "green", false, false];
    const BODY = (content) => [`${content}`, "white", true, false];

    stdWrite(...BODY(`[-] initializing app...... \n`));
    stdWrite(...HEAD("Mode"));
    stdWrite(...BODY(mode));
    stdWrite(...HEAD("Title"));
    stdWrite(...BODY(title));

    const path = (base) => formatPath(cwd(), base);
    mkDir(path("docs"));
    process.chdir(path("docs")); //change the working dir to docs

    const COMPLETEOUTPUT = (mode) => [
      `[done] ${mode} Build completed!.\n`,
      "green",
      false,
      true,
    ];

    if (mode === "tree") {
      stdWrite(...BODY("\n" + `[!] writing (3) files to \`${cwd()}\` \n`));
      writeFile(path("app.yaat"), mode_overview(title));
      writeFile(path(".yaatconstruct"), tree_dotyaatconstruct());
      writeFile(path(".yaatEmbed"), mode_dotyaatembed(mode));
      stdWrite(...COMPLETEOUTPUT("Tree"));
    } else {
      // branch
      stdWrite(...BODY("\n" + `[!] writing (2) files to \`${cwd()}\` \n`));
      writeFile(path("app.yaat"), mode_overview(title));
      writeFile(path(".yaatEmbed"), mode_dotyaatembed(mode));
      stdWrite(...COMPLETEOUTPUT("Branch"));
    }
  } else {
    let message = `Invalid argument parsed. expected \`tree\` or \`branch\`, got \`${parsedArgs[0]}\`.`;
    throw { message };
  }
}
