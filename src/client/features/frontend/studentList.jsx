import React from 'react';
import student from 


const StudentList = ({ students }) => {
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;