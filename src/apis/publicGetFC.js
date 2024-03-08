import formatPath from "../lib/formatPath.js";
import YAATCOMPOSE from "../lib/YAATCOMPOSE.js";
import { readFile } from "../lib/fsRead.js";
import construct from "../interpreter/configs/construct.js";

export default function publicGETFC(base) {
  const currentPath = formatPath(process.argv[1], ".public");
  const pathToYaatConstruct = formatPath(currentPath, ".yaatconstruct");
  const yaatConstructContent = readFile(pathToYaatConstruct);
  const yaatFiles = construct(yaatConstructContent);

  if (yaatFiles[1] && yaatFiles.includes(base)) {
    const baseIndex = yaatFiles.indexOf(base);
    const basePath = yaatFiles[baseIndex + 1];
    // get path to base title parsed

    const formatedPath = formatPath(currentPath, basePath);
    const ifEmbed = formatPath(currentPath, ".yaatEmbed");
    const yaatOptions = [formatedPath, "tree", ifEmbed];
    const Build = YAATCOMPOSE(...yaatOptions);
    // build ready

    return Build;
  } else {
    throw {
      message: `[x] Cannot read .yaatconstruct: expected <contents>,  got null.`,
    };
  }
}
