import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
// import NewTask from "./NewTask";
// import Task from "./Task";
import { useGetTasksQuery } from "./taskSlice";
import React from 'react';
import { Link } from 'react-router-dom';
const students = require('../../../server/prisma/seed');


import "./Tasks.less";

/** Main interface for user to interact with their tasks */
export default function StudentsList() {
  const token = useSelector(selectToken);
  const { data: tasks, isLoading } = useGetTasksQuery();

  const handleDelete = (studentId) => {
    // Filter out the student with the specified ID
    const updatedStudents = students.filter((student) => student.id !== studentId);
    setStudents(updatedStudents);
  };
  if (!token) {
    return <p>You must be logged in to see your students.</p>;
  }

  return (
    <div className="tasks">
      <h1>All Students</h1>
      {isLoading && <p>Loading Students...</p>}
      {tasks && (
       <ul>
       {students.map((student) => (
         <li key={student.id}>
           <Link to={`/students/${student.id}`}>{student.fullName}</Link>
           <button onClick={() => handleDelete(student.id)}>X</button>
         </li>
       ))}
     </ul>
      )}
    </div>
  );
}


