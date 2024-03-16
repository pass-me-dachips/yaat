
// Yaat! Another Annotation Tool.
import { stdWrite } from "./src/lib/std.js";
import { argv } from "node:process";
import yaat from "./src/cmds/yaat.js";
import help from "./src/cmds/help.js";

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
  switch (cmd) {
    case "help":
      help();
      break;
    default:
      console.log("Command not found!");
      break;
  }
}
// End.
