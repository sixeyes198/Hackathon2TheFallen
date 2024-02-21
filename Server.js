import express, { urlencoded } from "express";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api", (req, res) => {
  res.status(200).send("<h1>Test</h1>");
});

app.listen(process.env.Port || 3000, (req, res) => {
  console.log(`Server running on ${process.env.Port || 3000}`);
});
