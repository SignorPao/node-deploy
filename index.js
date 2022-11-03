import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    deploy: "vercel",
  });
});

app.listen(8000, () => console.log("Server listening on PORT: 8000"));
