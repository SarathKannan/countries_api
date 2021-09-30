import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

export default (apiRoot, routes) => {
  const app = express();

  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(apiRoot, routes);

  return app;
};
