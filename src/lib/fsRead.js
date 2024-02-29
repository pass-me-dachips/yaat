import { readFileSync, existsSync, readdirSync } from "node:fs";

export function fsExists(path) {
  return existsSync(path);
}

export function readDir(dir) {
  const dirs = readdirSync(dir, "utf-8");
  return dirs;
}

export function readFile(file) {
  const data = readFileSync(file, "utf-8");
  return data;
}
