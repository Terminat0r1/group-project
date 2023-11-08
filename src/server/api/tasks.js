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


/** Sends all students */
router.get("/students", async (req, res, next) => {
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

    const student = await prisma.task.findUnique({ where: { id } });
    res.json(student);

  } catch (err) {
    next(err);
  }
});


/** Add a new student */
// router.post("/", async (req, res, next) => {
//   try {
//     const { description, done } = req.body;
//     if (!description) {
//       throw new ServerError(400, "Description required.");
//     }

//     const task = await prisma.student.create({
//       data: {
//         description,
//         done: 
//       },
//     });
//     res.json(task);
//   } catch (err) {
//     next(err);
//   }
// });


/** Checks if task exists and belongs to given user */
// const validateTask = (user, task) => {
//   if (!task) {
//     throw new ServerError(404, "Task not found.");
//   }

//   if (task.userId !== user.id) {
//     throw new ServerError(403, "This task does not belong to you.");
//   }
// };


/** Updates single student by id */
// router.put("/students/:id", async (req, res, next) => {
//   try {
//     const id = +req.params.id;
//     const { description, done } = req.body;

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

//     await prisma.task.delete({ where: { id } });
//     res.sendStatus(204);
//   } catch (err) {
//     next(err);
//   }
// });