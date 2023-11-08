const prisma = require("../prisma");

/** Seeds the database with a students */
const student = async (numStudents = 20) => {
  for (let i =0; i < numStudents; i++) {
    await prisma.student.create({
      data: {
        firtname: `Firstname ${i}`,
        lastname: `Lastname ${i}`,
        email: `student${i}@example.com`,
        gpa: Math.random() * 4,
      },
    });
  }
};

export default student;