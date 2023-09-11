import express from "express";

const app = express();

const ip = "192.168.2.171";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, ip, () => {
  console.log(`Server is running at http://${ip}:3000`);
});
