import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// css static link
app.use(express.static(path.join(__dirname)));
// Home page
app.get("/Homepage", (req, res) => {
  res.status(200).sendFile(__dirname + "/index.html");
});

// console.log(__dirname);

app.listen(process.env.Port || 3000, (req, res) => {
  console.log(`Server running on ${process.env.Port || 3000}`);
});
