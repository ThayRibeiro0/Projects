console.clear()
const express = require('express')
const users = require("./routes/users");
const { engine } = require('express-handlebars');
const db = require('../prisma');
const app = express();

//css
app.use(express.static(__dirname + '/public'))

//handlebars
app.engine('hbs', engine({ defaultLayout: 'main.hbs' }));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.get('/', async (req, res) => {
    const users = await db.user.findMany();
    console.log(users);
    res.render('home', { users });
});

//rota users
app.use(express.json());
app.use("/users", users);

module.exports = { app };