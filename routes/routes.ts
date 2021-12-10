import express from 'express';
import { getAllPosts, getAllStudents, addStudent, Student } from '../services';
const router = express.Router();

router.get("/", async (req, res, next)=>{
    console.log('students', await getAllStudents())
})

router.get("/test", async (request, response) => {
    const posts = await getAllPosts();
    response.render("newStudent", { hello: "Hello Manuel", posts})
});

router.get("/new-student", async (request, response) => {
    response.render("newStudent")
});

router.post("/new-student", async (request, response) => {
    let student: Student = (request.body as Student);
    student = await addStudent(student);
    response.render("student", { student })
});

export default router;

