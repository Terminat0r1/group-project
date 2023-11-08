const router = require("express").Router();
module.exports = router;

const prisma = require ("../prisma");

// Get all students
router.get ('/', async (req,res, next)=> {
    try {
        const students = await prisma.student.findMany();
        res.json(students);
    } catch (err) {
        next(err);
    }
});

// Returns a single student with a specified id

router.get('/:id, async (req,res,next') => {
    try {
        const id= +req.params.id;
        const student = await prisma.student.findUnique({
            where: {
                id
            }
        });
        // error code not found

        if (!student){
            return next ({
                status: 404,
                message: `Student with id ${id} not found`,
            });
        }
        res.json(student);
    }
}
