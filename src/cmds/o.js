// -o

import { cwd } from "node:process";
import formatPath from "../lib/formatPath.js";
import { stdWrite } from "../lib/std.js";
import YAATCOMPOSE from "../lib/YAATCOMPOSE.js";
import startSever from "../server/server.js";

export default function o(options) {
  const path = options[0];
  if (path) {
    const formatedPath = formatPath(cwd(), path);
    const ifEmbed = formatPath(cwd(), ".yaatEmbed");
    const options = [formatedPath, "branch", ifEmbed];

    const Build = YAATCOMPOSE(...options);
    Build["type"] = "branch";
    // build ready

    // startSever(Build, port ?? 6500);cle
    // start the server
  } else {
    throw {
      message: "Invalid Argument at char[3]. expected `args` got undefined",
    };
  }
}
