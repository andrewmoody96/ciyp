/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createRequestHandler } from "@remix-run/express";
import express from "express";
import dotenv from "dotenv/config";
const app = express();
const PORT = process.env.PORT || 3000;
import apiRoutes from "./apiRoutes.cjs";
import cors from "cors";
const corsOptions = {
  origin: `http://0.0.0.0:${PORT}`,
};

app.use(cors(corsOptions));

const viteDevServer =
  process.env.NODE_ENV === "production"
    ? null
    : await import("vite").then((vite) =>
        vite.createServer({
          server: { middlewareMode: true },
        })
      );

app.use(
  viteDevServer ? viteDevServer.middlewares : express.static("build/client")
);

const build = viteDevServer
  ? () => viteDevServer.ssrLoadModule("virtual:remix/server-build")
  : await import("./build/server/index.js");

app.use("/api/", apiRoutes);

app.all("*", createRequestHandler({ build }));

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
