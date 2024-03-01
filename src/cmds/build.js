import { cwd } from "node:process";
import formatPath from "../lib/formatPath.js";
import { readFile } from "../lib/fsRead.js";
import yaatTree from "../interpreter/app/yaat.js";
import { stdWrite } from "../lib/std.js";

export default function build(path) {
  if (path) {
    const formatedPath = formatPath(cwd(), path);

    const HEAD = (header) => [`[*] ${header} `, "blue", false, false];
    const BODY = () => [`[Done]`, "white", true, false];

    stdWrite(...HEAD("Reading " + formatedPath));
    const yaat = readFile(formatedPath);
    stdWrite(...BODY());

    stdWrite(...HEAD("Building " + formatedPath));
    const engineBuild = yaatTree(yaat, path);
    stdWrite(...BODY());

    console.log("");
    console.log(engineBuild);
    return void 0;
  } else {
    throw {
      message: "Invalid Argument at char[3]. expected `args` got undefined",
    };
  }
}
