import express from "express";
const app = express();

app.get("/", (_req, res) => res.send("Hello from ECS Fargate!"));
app.get("/health", (_req, res) => res.status(200).send("OK"));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server listening on port ${port}`));
