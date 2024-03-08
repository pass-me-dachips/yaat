// -o

import { cwd } from "node:process";
import formatPath from "../lib/formatPath.js";
import basePath from "../lib/basePath.js";
import { stdWrite } from "../lib/std.js";
import YAATCOMPOSE from "../lib/YAATCOMPOSE.js";
import { defaultPort } from "../templates/config.js";
import startSever from "../server/server.js";

const HEAD = (m, col) => [m, col ?? "green", true, false];

function customBasePath(path) {
  if (path.startsWith("/")) path = path.slice(1);
  if (path.startsWith("./")) path = path.slice(2);

  const pathsArgs = path.split("/");
  return pathsArgs;
}

export default function o(options) {
  const path = options[0];
  if (path) {
    stdWrite("Yaat! another anotation tool \n");

    const formatedPath = basePath(cwd(), path);

    const missingPath = customBasePath(path);
    missingPath.pop();
    const ifEmbed = basePath(formatPath(cwd(), missingPath), ".yaatEmbed");

    const yaatOptions = [formatedPath, "branch", ifEmbed];

    stdWrite(...HEAD(`[-] Composing ${path}...`));
    const Build = YAATCOMPOSE(...yaatOptions);
    Build["type"] = "branch";
    stdWrite(...HEAD(`[/] Composed ${path} Successfully!`));
    // build ready

    let portToUse = defaultPort;
    if (options[1] === "port-" && options[2]) {
      portToUse = options[2];
    }
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
    throw {
      message: "Invalid Argument at char[3]. expected `args` got undefined",
    };
  }
}
