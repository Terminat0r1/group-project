const prisma = require("../prisma");

/** Seeds the database with a user and some tasks */
const seed = async (numStudents = 20, taskPerStudent = 5 ) => {
  for (let i =0; i < numStudents; i++) {
    const tasks = [];
    for (let j=0; j < taskPerStudent; j++) {
      tasks.push({
        name: `Task ${j+1}`,          //This means that the task will begin at 1 and not 0.
      })
    }
    await prisma.student.create({
      data: {
        name: `Student ${i+1}`,   //This means that the student will begin at 1 and not 0.
        tasks: {
          create: tasks
   },
   },
  });
  }
};
  