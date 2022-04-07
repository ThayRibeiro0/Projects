import { Router } from "express";
import db from "../../../prisma"; // import your database conection from /prisma folder
const router = Router()

// GET http://locahost:3001/users => show all users
router.get("/", async (req, res) => {
  const user = await db.user.findMany();
  res.json(user);
});

// GET http://locahost:3001/users/${uuid} => show one user by uuid
router.get("/:uuid", async (req, res) => {
  const user = await db.user.findFirst({
    where: {
      uuid: req.params.uuid,
    },
  });
  res.json(user);
});

// POST http://locahost:3001/users => create new user
router.post("/", async (req, res) => {
  const user = await db.user.create({
    data: req.body,
  });
  res.json(user);
});

// PUT http://locahost:3001/users/${uuid} => update one user by uuid
router.put("/:uuid", async (req, res) => {
  const user = await db.user.update({
    where: {
      uuid: req.params.uuid,
    },
    data: req.body,
  });
  res.json(user);
});

// [DELETE] http://locahost:3001/users/${uuid} => delete one user by uuid
router.delete("/:uuid", async (req, res) => {
  const user = await db.user.delete({
    where: {
      uuid: req.params.uuid,
    },
  });
  res.json(user);
});

export default router;