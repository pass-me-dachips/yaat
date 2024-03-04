import { chdir, cwd } from "node:process";
import formatPath from "../lib/formatPath.js";
import { stdWrite } from "../lib/std.js";
import YAATCOMPOSE from "../lib/YAATCOMPOSE.js";
import { fsExists, readFile } from "../lib/fsRead.js";
import { normalize } from "node:path";
import construct from "../interpreter/configs/construct.js";

const HEAD = (m, col) => [m, col ?? "yellow", true, false];

export default function getFileContents(base) {
  if (fsExists("docs")) {
    chdir("docs");

    const pathToYaatConstruct = formatPath(cwd(), ".yaatconstruct");
    const yaatConstructContent = readFile(pathToYaatConstruct);
    const yaatFiles = construct(yaatConstructContent);

    if (yaatFiles[1] && yaatFiles.includes(base)) {
      const baseIndex = yaatFiles.indexOf(base);
      const basePath = yaatFiles[baseIndex + 1];
      // get path to base title parsed

      const formatedPath = formatPath(cwd(), basePath);
      const ifEmbed = formatPath(cwd(), ".yaatEmbed");
      const yaatOptions = [formatedPath, "tree", ifEmbed];
      const Build = YAATCOMPOSE(...yaatOptions);
      // build ready

      stdWrite(...HEAD(`Transferring ${basePath} to AppView`, "blue"));
      return Build;
    } else {
      throw {
        message: `[x] Cannot read .yaatconstruct: expected <contents>,  got null.`,
      };
    }
  } else {
    throw {
      message: `cannot find any directory called 'docs' in root : ${normalize(
        cwd()
      )}`,
    };
  }
}

getFileContents("Application");
