import { cwd } from "node:process";
import formatPath from "../lib/formatPath.js";
import { readFile } from "../lib/fsRead.js";
import construct from "../interpreter/configs/construct.js";
import { stdWrite } from "../lib/std.js";

export default function cat() {
  const currentWorkingDir = cwd();
  const filePath = formatPath(currentWorkingDir, ".yaatconstruct");

  const HEAD = (header) => [`[*] ${header} `, "blue", false, false];
  const BODY = () => [`[Done]`, "yellow", true, false];

  stdWrite(...HEAD("Reading " + filePath));
  const yaatConstruct_raw = readFile(filePath);
  stdWrite(...BODY());

  stdWrite(...HEAD("Constructing " + filePath));
  const yaatconstruct = construct(yaatConstruct_raw);
  stdWrite(...BODY());

  const ycLen = yaatconstruct.length;

  if (ycLen > 0) {
    let object = {};
    for (let i = 0; i < ycLen; i++) {
      if (i % 2 === 0) {
        object[yaatconstruct[i]] = yaatconstruct[i + 1];
      }
    }
    stdWrite("\n" + object + "\n", "green", true);
    console.log(object);
  } else {
    stdWrite("\n{}", "green", true, false);
  }
  return void 0;
}
