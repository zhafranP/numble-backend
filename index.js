import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import gameRoutes from "./routes/game.js";
import userRoutes from "./routes/user.js";

import { pool } from "./db.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// Routes
app.use("/", gameRoutes);
app.use("/users", userRoutes);

// app.use(express.static(path.join(__dirname, "./client/build")));

// app.get("*", function (_, res) {
//   res.sendFile(
//     path.join(__dirname, "./client/build/index.html"),
//     function (err) {
//       if (err) {
//         res.status(500).send(err);
//       }
//     }
//   );
// });

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
