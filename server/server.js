import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ urlencoded: true }));

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`server listening at port: ${PORT}`);
});
