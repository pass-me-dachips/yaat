
import { stdWrite } from "../lib/std.js";
import { CLIENT_VERSION, SERVER_VERSION } from "../templates/config.js";

export default function info() {
  const HEAD = (header) => [header, "green", false, false];
  const BODY = (value) => [value, "white", true];

  stdWrite(...HEAD("[CLIENT_VERSION] "));
  stdWrite(...BODY(CLIENT_VERSION));
  stdWrite(...HEAD("[SERVER_VERSION] "));
  stdWrite(...BODY(SERVER_VERSION));
  stdWrite(...HEAD("[LAST_EXECUTED] "));
  stdWrite(...BODY(new Date().toDateString()));

  return void 0;
}

/* RETURN =
[Client-version] 1.2
[Server-version] 1.2
[LAST_EXECUTED] Sat Mar 16 2024
 */
