import { writeFileSync, mkdirSync } from "node:fs";

export function mkDir(dir) {
  mkdirSync(dir);
  return true;
}

export function writeFile(path, data) {
  writeFileSync(path, data, "utf-8");
  return true;
}
