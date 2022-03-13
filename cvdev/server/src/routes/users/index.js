const router = require("express").Router();
const db = require("../../../prisma");


router.get("/", async (req, res) => {
    const user = await db.user.findMany();
    res.json(user);
});

router.get("/:uuid", async (req, res) => {
    const user = await db.user.findFirst({
        where: {
            uuid: req.params.uuid,
        },
    });
    res.json(user);
});

router.post("/", async (req, res) => {
    const user = await db.user.create ({
        data: req.body,
    });
    res.json(user);
});

router.put("/:uuid", async (req, res) => {
    const user = await db.user.update({
        where: {
            uuid: req.params.uuid,
        },
        data: req.body,
    });
    res.json(user);
});

router.delete("/:uuid", async (req, res) => {
    const user = await db.user.delete({
        where: {
            uuid: req.params.uuid,
        },
    });
    res.json(user);
});

module.exports = router;