console.log('it works')

const { app } = require(".//app");
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log('running server at http://localhost:' + PORT);
});
