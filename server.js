import express from "express";
import routes from "./routes.js"
import cors from "cors";
import { connection } from "./connection.js";

const app = express()

const port = 8080;

app.use(express.json());

app.use(cors());

app.use("/api", routes);

app.use((error, req, res, next) => {
    if (error) {
        res.status(error.status).send({
            data: error.data,
            message: error.message,
            success: false
        })
    }
})

app.listen(port, () => {
    console.log(`Listening in ${port}`);
});

connection();