import { readFile } from "../lib/fsRead.js";
import construct from "../interpreter/configs/construct.js";
import { stdWrite } from "../lib/std.js";

export default function info() {
  const yaatVersionsArray = readFile(".yaat_versions");
  const yaatVersions = construct(yaatVersionsArray);
  const yaatUser = readFile(".user");

  const clientVersion = yaatVersions[3];
  const serverVersion = yaatVersions[1];
  const rootUser = yaatUser;

  const HEAD = (header) => [header, "green", false, false];
  const BODY = (value) => [value, "white", true];

  stdWrite(...HEAD("[CLIENT_VERSION] "));
  stdWrite(...BODY(clientVersion));
  stdWrite(...HEAD("[SERVER_VERSION] "));
  stdWrite(...BODY(serverVersion));
  stdWrite(...HEAD("[Root-user] "));
  stdWrite(...BODY(rootUser));

  return void 0;
}

/* RETURN =
[Client-version] 1.2
[Server-version] 1.2
[Root-user] yaat@no-user
 */
