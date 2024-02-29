#!/usr/bin/env node
// Yaat! Another Annotation Technology.
import { argv } from "node:process";
import yaat from "./src/cmds/yaat.js";
import o from "./src/cmds/o.js";
import init from "./src/cmds/init.js";
import build from "./src/cmds/build.js";
import cat from "./src/cmds/cat.js";
import help from "./src/cmds/help.js";
import info from "./src/cmds/info.js";
import chuser from "./src/cmds/chuser.js";
import startSever from "./src/server/server.js";

const cmds = argv;
const yaatPortion = cmds.slice(2);

startSever(); //would remove

if (yaatPortion.length === 0) {
  yaat();
} else {
  const cmd = yaatPortion[0];
  const options = yaatPortion.slice(1);

  switch (cmd) {
    case "o":
      o(options[0]);
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
      help();
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
