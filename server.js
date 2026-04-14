/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import "dotenv/config";
import { createRequestHandler } from "@react-router/express";
import express from "express";
import apiRoutes from "./apiRoutes.cjs";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// WATCH OUT FOR CORS ERRORS
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
  ? () => viteDevServer.ssrLoadModule("virtual:react-router/server-build")
  : await import("./build/server/index.js");

app.use("/api/", apiRoutes);

app.all("*", createRequestHandler({ build }));

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
