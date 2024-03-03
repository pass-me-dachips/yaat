// yaat
import { cwd } from "node:process";
import formatPath from "../lib/formatPath.js";
import { stdWrite } from "../lib/std.js";
import YAATCOMPOSE from "../lib/YAATCOMPOSE.js";
import { defaultPort } from "../templates/config.js";
import startSever from "../server/server.js";
import { normalize } from "node:path";
import { fsExists, readFile } from "../lib/fsRead.js";
import construct from "../interpreter/configs/construct.js";

const HEAD = (m, col) => [m, col ?? "green", true, false];
const BODY = (m, col) => [m, col ?? "blue", false, false];

export default function yaat(port) {
  stdWrite("Yaat! another anotation tool \n");

  const docPathExists = fsExists(formatPath(cwd(), "docs"));

  if (docPathExists) {
    const formatedPath = formatPath(cwd(), "docs");
    stdWrite(...HEAD(`[-] Switched to ${normalize(formatedPath)}`));
    // format path to docs

    const ifEmbed = formatPath(formatedPath, ".yaatEmbed");
    const pathToYaatConstruct = formatPath(formatedPath, ".yaatconstruct");
    // format path to .yaatconstruct

    stdWrite(...HEAD(`[-] Reading .yaatconstruct .....`));
    const yaatConstructContent = readFile(pathToYaatConstruct);
    stdWrite(...HEAD(`\n[-] Constructing .yaatconstruct .....`, "white"));
    const yaatFiles = construct(yaatConstructContent);
    // read and construct .yaatconstruct

    if (yaatFiles[1]) {
      // only if there is a path to the first page.
      stdWrite(...BODY(`[-] Build started @ `, "green"));
      stdWrite(...BODY(yaatFiles[1] + "\n"));

      const yaatOptions = [
        formatPath(formatedPath, yaatFiles[1]),
        "tree",
        ifEmbed,
      ];

      stdWrite(...HEAD(`[-] Composing Application...`));
      const Build = YAATCOMPOSE(...yaatOptions);
      Build["type"] = "tree";
      Build["activeFile"] = 0;
      Build["files"] = yaatFiles.filter((e, index) => index % 2 === 0);
      stdWrite(...HEAD(`[/] Composed ${formatedPath} Successfully!`));
      // build ready

      let portToUse = port ?? defaultPort;
      // determine port

      stdWrite(
        ...HEAD(
          `\nStarting app on port ${portToUse} ${
            portToUse === defaultPort ? "(default)" : "(specified)"
          }`,
          "blue"
        )
      );
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
  } else {
    stdWrite(...HEAD(`[x] Could not find docs directory`, "red"));
  }
}
