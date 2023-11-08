import React from "react";  
import { useStudentsQuery } from "./api";  //Is the custom hook to fetch the data from the API

// Studentlist is the function that renders a list of students, by using the 
// useStudentsQuery custom hook. After it fetches the data from the API
// it renders a list of students. 
const StudentList = () => {
    const { data: students } = useStudentsQuery();

    return (
        <div>
            <ul>
                {students.map((student) => (
                    <li key={student.id}>
                        {student.firstname}, {student.lastname}, {student.email}
                        </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;