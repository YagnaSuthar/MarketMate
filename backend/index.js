import express from "express";
import dotenv from "dotenv";
import db from "./utils/db.js"

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/test",(req,res) => {
    res.status(200).json({
        "message":"test working"
    })
})
await db()
app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}/`);
});
