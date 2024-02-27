import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import router from "./routes/DataRoutes.js";
import cors from "cors";
import { db } from "./config/db.js";

// // files path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// using app with express
const app = express();

// css static link
app.use(express.static(path.join(__dirname)));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);
// cors
app.use(cors());

// Home page index html linking
app.get("/Homepage", (req, res) => {
  res.status(200).sendFile(__dirname + "/Public/index.html");
});

// app.get("/search", (req, res) => {
//   const { first_name } = req.body;
//   db("soldires")
//     .select("*")
//     .where("first_name", "%" + first_name + "%");
// });

// console.log(__dirname);

app.listen(process.env.Port || 3000, (req, res) => {
  console.log(`Server running on ${process.env.Port || 3000}`);
});
