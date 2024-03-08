#!/usr/bin/env node

// Yaat! Another Annotation Technology.
import { stdWrite } from "./src/lib/std.js";
import { argv } from "node:process";
import yaat from "./src/cmds/yaat.js";
import o from "./src/cmds/o.js";
import init from "./src/cmds/init.js";
import build from "./src/cmds/build.js";
import cat from "./src/cmds/cat.js";
import help from "./src/cmds/help.js";
import info from "./src/cmds/info.js";
import chuser from "./src/cmds/chuser.js";

process.on("uncaughtException", (error) => {
  const options = ["\n\n" + error.message, "red", true, false];
  stdWrite(...options);
});

const cmds = argv;
const yaatPortion = cmds.slice(2);

if (yaatPortion.length === 0 || yaatPortion[0] === "port-") {
  yaat(yaatPortion[1]);
} else {
  const cmd = yaatPortion[0];
  const options = yaatPortion.slice(1);

  switch (cmd) {
    case "o":
      o(options);
      break;
    case "init":
      init(options);
      break;
    case "build":
      build(options[0]);
      break;
    case "cat":
      cat();
      break;
    case "help":
      help(cmds[1]);
      break;
    case "info":
      info();
      break;
    case "chuser":
      chuser(options[0]);
      break;
    default:
      console.log("Command not found!");
      console.log("run `yaat help` to see the list of commands.");
      break;
  }
}
// End.
