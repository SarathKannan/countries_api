import http from "http";

import mongoose from "./services/mongoose";
import express from "./services/express";
import { ip, mongo, port, apiRoot } from "./config";
import api from "./api";

const app = express(apiRoot, api);
const server = http.createServer(app);


mongoose.connect(mongo.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = Promise;

setImmediate(() => {
  server.listen(port, ip, () => {
    console.log(`express server listening on http://${ip}:${port}`);
  });
});
export default app;
