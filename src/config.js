import path from "path";
require("dotenv").config();

const config = {
  ip: process.env.IP || "0.0.0.0",
  port: process.env.PORT || 2828,
  apiRoot: process.env.API_ROOT || "/api/v2",
  rootDir: path.join(__dirname, ".."),
  mongo: {
    uri: "mongodb://localhost/country-db-dev",
    options: {
      debug: true,
    },
  },
};

module.exports = config;
