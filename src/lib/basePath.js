import { join } from "node:path";

export default function basePath(cwd, parsedPath) {
  if (parsedPath.startsWith("/")) parsedPath = parsedPath.slice(1);
  if (parsedPath.startsWith("./")) parsedPath = parsedPath.slice(2);

  const pathsArgs = parsedPath.split("/");
  const fp = join(cwd, ...pathsArgs);
  return fp;
}

//  ./hello/index.js
// index.js
// /hello/index.js
