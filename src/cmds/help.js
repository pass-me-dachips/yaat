// help
import formatPath from "../lib/formatPath.js";
import { stdWrite } from "../lib/std.js";
import YAATCOMPOSE from "../lib/YAATCOMPOSE.js";
import { defaultPort } from "../templates/config.js";
import startSever from "../server/server.js";
import { readFile } from "../lib/fsRead.js";
import construct from "../interpreter/configs/construct.js";

const HEAD = (m, col) => [m, col ?? "green", true, false];

export default function help(root) {
  stdWrite("Yaat! another anotation tool \n");

  const formatedPath = formatPath(root, ".public");
  // format path to .public

  const ifEmbed = formatPath(formatedPath, ".yaatEmbed");
  const pathToYaatConstruct = formatPath(formatedPath, ".yaatconstruct");
  // format path to .yaatconstruct and .yaatEmbed

  const yaatConstructContent = readFile(pathToYaatConstruct);
  const yaatFiles = construct(yaatConstructContent);
  // read and construct .yaatconstruct

  if (yaatFiles[1]) {
    // only if there is a path to the first page.
    const yaatOptions = [
      formatPath(formatedPath, yaatFiles[1]),
      "tree",
      ifEmbed,
    ];
    const Build = YAATCOMPOSE(...yaatOptions);
    Build["type"] = "tree";
    Build["asDocs"] = true;
    Build["activeFile"] = 0;
    Build["files"] = yaatFiles.filter((e, index) => index % 2 === 0);
    // build ready

    let portToUse = defaultPort;
    stdWrite(...HEAD(`\nStarting app on port  ${defaultPort}`, "blue"));
    startSever(Build, portToUse);
    // start the server and parse the tree
  } else {
    stdWrite(
      ...HEAD(
        `[x] Cannot read arg[1] of .yaatconstruct: expected a file path, got null.`,
        "red"
      )
    );
  }
}
