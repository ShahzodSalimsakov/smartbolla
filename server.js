const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";

console.log(process.env);

const app = next({ dev });
const router = express.Router();
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("*", (req, res) => {
    return handle(req, res);
  });
  server.post("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(process.env.PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${process.env.PORT}`);
  });
});
