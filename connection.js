import { urlData } from "./config.js";
import mongoose from "mongoose";

export async function connection() {
    await mongoose
        .connect(`mongodb+srv://${urlData.name}:${urlData.password}@cluster0.9cir3a3.mongodb.net/${urlData.dbName}?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Connected");
        })
        .catch((err) => {
            console.error(err);
        });
}