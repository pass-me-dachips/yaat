import { writeFile } from "../lib/fsWrite.js";

export default function chuser(arg) {
  if (arg) {
    writeFile(".user", arg);
  }
  return void 0;
}
