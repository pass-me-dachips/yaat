import { platform } from "node:os";
import { exec } from "node:child_process";

export default function execBrowser(url) {
  let supportedPlatforms = ["darwin", "freebsd", "linux", "win32", "openbsd"];
  if (supportedPlatforms.includes(platform())) {
    const startProcess = {
      darwin: "open",
      freebsd: "xdg-open",
      linux: "xdg-open",
      win32: "start",
      openbsd: "xdg-open",
    };

    exec(`${startProcess[platform()]} ${url}`);

    return true; // url execution succesfull or failed (caugth by error monitor).
  } else {
    return null; //platform unsupported.
  }
}
// use case => execBrowser("https://github.com")
