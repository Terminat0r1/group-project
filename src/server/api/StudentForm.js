import React, { useState } from "react";
import { useAddStudentMutation, useStudentsQuery } from "./api";


// AddStudentForm is the function that is used to add a new student
// to the database. It has input fields for the students details 
// and a button to submit the form. 
const AddStudentForm = () => {
    const [newStudent, setNewStudent] = useState({ firstname: "", lastname: "", email: "", gpa: 0.0});
    const {mutate: addStudent} = useAddStudentMutation();
    const { refetch: refetchStudents } = useStudentsQuery();


// This function executes a callback function that refetches the
// students from the API and restores the input fields to an empty state.
// Then when you add the student it will automatically update without 
// having to refresh the page.
    const handleAddStudent = () => {
        addStudent(newStudent, {
            onSuccess: () => {
                refetchStudents();
                setNewStudent({ firstname: "", lastname: "", email: "", gpa: 0.0});
            },
        });
    };


    return (
        <div>
            <input
                type="text"
                name="firstname"
                value={newStudent.firstname}
                onChange={(e) => setNewStudent({ ...newStudent, firstname: e.target.value })}
            />
            <input
                type="text"
                name="lastname"
                value={newStudent.lastname}
                onChange={(e) => setNewStudent({ ...newStudent, lastname: e.target.value })}
            />
            <input
                type="text"
                name="email"
                value={newStudent.email}
                onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
            />
            <input
                type="number"
                name="gpa"
                value={newStudent.gpa}
                onChange={(e) => setNewStudent({ ...newStudent, gpa: e.target.value })}
            />
            <button onClick={handleAddStudent}>Add Student</button>
        </div>
    );
    };

    export default AddStudentForm;
