import express from "express";
import db from "../prisma";
import Users from "./routes/users";
import { engine } from 'express-handlebars';

export const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

app.use(express.json());
app.use("/users", Users);

app.get("/", (req, res) => {
  res.render("home");
});


