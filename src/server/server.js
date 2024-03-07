import express from "express";
import { argv } from "node:process";
import { join } from "node:path";
import { stdWrite } from "../lib/std.js";
import execBrowser from "../lib/execBrowser.js";
import getFileContents from "../apis/getFileContents.js";

// process.on("uncaughtException", (err) => {
//   if (err.message.includes("address already in use")) {
//     console.log("PORT ERROR");
//   } else {
//     console.log(err.message);
//     process.exit(1);
//   }
// });

const server = express();
const cb = (port) => {
  stdWrite(`yaat running on ${port} \n`);

  const url = `http://localhost:${port}`;
  stdWrite(`opening ${url} \n`, "blue");

  const openBrowser = execBrowser(url);

  if (openBrowser === true) {
    // executed successfully
    stdWrite(`---> App running`, "green", true, true);
  } else {
    // unsupported platform
    stdWrite(`Unsupported platform!`, "red");
  }
  return void 0;
};

export default function startSever(tree, port) {
  const staticPath = (lastDir) =>
    join(argv[1], "src", "server", "public", "assets", lastDir);

  server.use(express.static("public"));

  server.use(
    "/assets/scripts",
    express.static(staticPath("scripts"), {
      setHeaders: (res, path) => {
        if (path.endsWith(".js")) {
          res.setHeader("Content-Type", "text/javascript");
        }
      },
    })
  );

  server.use(
    "/assets/styles",
    express.static(staticPath("styles"), {
      setHeaders: (res, path) => {
        if (path.endsWith(".css")) {
          res.setHeader("Content-Type", "text/css");
        }
      },
    })
  );
  server.use(
    "/assets/icons",
    express.static(staticPath("icons"), {
      setHeaders: (res, path) => {
        if (path.endsWith(".svg")) {
          res.setHeader("Content-Type", "image/svg+xml");
        }
      },
    })
  );
  server.use(
    "/assets/fonts",
    express.static(staticPath("fonts"), {
      setHeaders: (res, path) => {
        if (path.endsWith(".ttf")) {
          res.setHeader("Content-Type", "font/ttf");
        }
      },
    })
  );

  server.use("/apis", express.json());

  server.get("/", (rq, rs) => {
    rs.sendFile(join(argv[1], "src", "server", "public", "index.html"));
  });

  server.get("/apis", (req, res) => {
    res.status(200).json(tree);
  });

  if (tree.type === "tree") {
    server.get("/apis/tree/:title", async (req, res) => {
      try {
        const tree = getFileContents(req.params.title);
        res.status(200).json(tree);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  }

  server.listen(port, cb(port));
}
