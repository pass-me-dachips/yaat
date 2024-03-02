import express from "express";
import { argv } from "node:process";
import { join } from "node:path";

// process.on("uncaughtException", (err) => {
//   if (err.message.includes("address already in use")) {
//     console.log("PORT ERROR");
//   } else {
//     console.log(err.message);
//     process.exit(1);
//   }
// });

export default function startSever(tree, port) {
  const server = express();
  const cb = () => console.log(`yaat running on port ${port}`);

  const staticPath = (lastDir) =>
    join(argv[1], "src", "server", "public", "assets", lastDir);

  server.use(express.static("public"));
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
    server.get("/apis/tree", (req, res) => {
      res.status(200).json(tree);
    });
  }

  server.listen(port, cb);

  return void 0;
}
