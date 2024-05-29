import express, { json } from "express";
import { router } from "./routes/user";

const app = express();

app.use(express.json());
app.use(router)

export { app };
