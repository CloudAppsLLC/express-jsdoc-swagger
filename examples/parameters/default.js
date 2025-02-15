const express = require("express");

const logger = require("../utils/logger");
const expressJSDocSwagger = require("../..");

const options = {
  info: {
    version: "1.0.0",
    title: "Albums store",
    license: {
      name: "MIT",
    },
  },
  filesPattern: "./enum.js",
  baseDir: __dirname,
};

const app = express();
const port = 3000;

expressJSDocSwagger(app)(options);

/**
 * GET /api/v1
 * @summary This is the summary of the endpoint
 * @param {string} name.query.required - name param description - default:type1
 * @return {string} 200 - success response
 */
app.get("/api/v1", (req, res) => res.send("Hello World!"));

/**
 * GET /api/v1/albums
 * @summary This is the summary of the endpoint
 * @param {string} name.query.required - name param description -  default:type1
 * @param {string} license.query - default:MIT - name param description
 * @return {object} 200 - success response - application/json
 */
app.get("/api/v1/albums", (req, res) =>
  res.json([
    {
      title: "abum 1",
    },
  ])
);

app.listen(port, () =>
  logger.info(`Example app listening at http://localhost:${port}`)
);
