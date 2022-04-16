import express from "express";
import db from "../prisma";
import Users from "./routes/users";
import { engine } from 'express-handlebars';
import fs from 'fs';

export const app = express();

const styleslist = fs.readdirSync('./public/styles')
console.log(styleslist)

app.use(express.static('./public'))

app.engine('handlebars', engine({
  partialsDir: "./src/views/components"
}));
app.set('view engine', 'handlebars');
app.set('views', './src/views');

app.use(express.json());
app.use("/users", Users);

app.get('/', (req, res) => {
  res.redirect('home');
});

app.get('/home', (req, res) => {
  res.render('home', { styleslist: styleslist });
});

app.get('/login', (req, res) => {
  res.render('login', { styleslist: styleslist });
});
