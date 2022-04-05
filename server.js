const express = require("express");
const path = require("path");

const app = express();

const assetsRouter = require("./server/assets-router");

app.use("/public", express.static(path.join(__dirname, "public")));
app.use(assetsRouter);

app.get("/api/v1", (req, res) => {
  res.json({
    project: "React and Express Boilerplate",
    from: "Vanaldito",
  });
});

app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
})

const { PORT = 5000 } = process.env;

app.listen(PORT, () => {
  console.log();
  console.log(`  App running in port ${PORT}`);
  console.log();
  console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});
