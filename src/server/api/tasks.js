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

    const student = await prisma.student.findUnique({ where: { id } });
    
    res.json(student);

  } catch (err) {
    next(err);
  }
});


/** Creates new student */
router.post("/", async (req, res, next) => {
  try {
    const { firstName, lastName, email, imageUrl, gpa } = req.body;

    const newStudent = await prisma.student.create({
      data: {
        firstName,
        lastName,
        email,
        imageUrl,
        gpa,
      }
    });

    res.json(newStudent);

  } catch (err) {
    next(err);
  }
});


/** Updates a single student by id */
router.put("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const { firstName, lastName, email, imageUrl, gpa } = req.body;

    const updatedStudent = await prisma.student.update({
      where: { id },
      data: { firstName, lastName, email, imageUrl, gpa }
    })

    res.json(updatedStudent);

  } catch (err) {
    next(err);
  }
});


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
