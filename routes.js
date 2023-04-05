import express from "express";
import { createNote, getNotes, updateNote, deleteNote } from "./functions.js"

const route = express.Router();

route.get("/", function (req, res) {
    res.send("Welcome to backend");
});

route.post("/noteSchema/create", createNote);
route.get("/noteSchema/get", getNotes);
route.put("/noteSchema/update", updateNote);
route.delete("/noteSchema/delete", deleteNote);

export default route;