import React, { useState } from 'react';
const students = require('../../../server/prisma/seed');


const StudentDetail = ({ student }) => {
  const { fullName, email, image, gpa } = student;
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <h2>{firstname + lastname}</h2>
      <p>Email: {email}</p>
      <p>GPA: {gpa}</p>
      {showMore && (
        <div>
          <p>Image: {image}</p>
        </div>
      )}
      <button onClick={toggleShowMore}>
        {showMore ? 'Hide Details' : 'See More'}
      </button>
    </div>
  );
};

export default StudentDetail;