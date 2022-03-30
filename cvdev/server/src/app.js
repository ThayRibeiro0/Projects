console.clear()
const express = require('express')
const users = require("./routes/users");
const { engine } = require('express-handlebars');
const app = express();

//css
app.use(express.static(__dirname + '/public'))

//handlebars
app.engine('hbs', engine({ defaultLayout: 'main.hbs' }));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.render('home');
});

//rota users
app.use(express.json());
app.use("/users", users);

module.exports = { app };