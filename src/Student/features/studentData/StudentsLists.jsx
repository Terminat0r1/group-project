import { useSelector } from "react-redux";
import React from 'react';
import { Link } from 'react-router-dom';
const students = require('../../../server/prisma/seed');




/** Main interface for user to interact with their tasks */
export default function StudentsList() {
  const token = useSelector(selectToken);
  const { data: tasks, isLoading } = useGetTasksQuery();
  

  return (
    <div className="tasks">
      <h1>All Students</h1>
      {isLoading && <p>Loading Students...</p>}
      {tasks && (
       <ul>
       {students.map((student) => (
         <li key={student.id}>
           <Link to={`/students/${student.id}`}>{student.fullName}</Link>
         </li>
       ))}
     </ul>
      )}
    </div>
  );
}


