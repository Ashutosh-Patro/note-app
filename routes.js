import express from "express";
import { createNote, getNotes, updateNote, deleteNote } from "./functions.js"

const route = express.Router();

route.get("/", function (req, res) {
    res.send("Welcome to backend");
});

route.post("/create", createNote);
route.get("/get", getNotes);
route.put("/update", updateNote);
route.delete("/delete", deleteNote);

export default route;