const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const midlewares = jsonServer.defaults({
  static: "./build",
});
const PORT = process.env.PORT || 4000;
server.use(midlewares);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);
server.use(router);
server.listen(PORT, () => {
  console.log("Sever is running");
});
