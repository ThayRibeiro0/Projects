const express = require ('express')
const app = express ();
const db = require('../prisma');
const users = require("./routes/users");

    app.get('/:email?', async (req, res) => {

        if(req.params.email){
            const user = await db.user.findFirst({
                where: {
                    email: req.params.email
                }
            });//find by email at url
            res.json(user);
        }else {
            const user = await db.user.findMany(); //brings all users
            res.json(user);
        }
    })

    app.use(express.json());
    app.use("/users", users);

    module.exports = { app };