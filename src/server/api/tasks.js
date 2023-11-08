// const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

/** User must be logged in to access tasks. */
// router.use((req, res, next) => {
//   if (!res.locals.user) {
//     return next(new ServerError(401, "You must be logged in."));
//   }
//   next();
// });


/** Sends all tasks */
router.get("/", async (req, res, next) => {
  try {
    const tasks = await prisma.task.findMany({
      where: { userId: res.locals.user.id },
    });
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

/** Creates new task and sends it */
router.post("/", async (req, res, next) => {
  try {
    const students = await prisma.student.findMany();
    res.json(students);

  } catch (err) {
    next(err);
  }
});


/** Sends a single student by id */
router.get("/students/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const task = await prisma.task.findUnique({ where: { id } });
    validateTask(res.locals.user, task);

  } catch (err) {
    next(err);
  }
});


/** Updates single task by id */
router.put("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const { description, done } = req.body;

//     const task = await prisma.task.findUnique({ where: { id } });
//     validateTask(res.locals.user, task);

//     const updatedTask = await prisma.task.update({
//       where: { id },
//       data: { description, done },
//     });
//     res.json(updatedTask);
//   } catch (err) {
//     next(err);
//   }
// });


/** Deletes single student by id */
// router.delete("/:id", async (req, res, next) => {
//   try {
//     const id = +req.params.id;

//     const task = await prisma.task.findUnique({ where: { id } });
//     validateTask(res.locals.user, task);

    await prisma.task.delete({ where: { id } });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
