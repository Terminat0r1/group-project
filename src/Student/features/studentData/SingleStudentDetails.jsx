
import student from '../../../server/prisma/seed';



export default StudentDetail;

useEffect(async() => {
  try {
      const response = await fetch(backend_api_url)
      const data = await response.json()
      setStudent(data)
  } catch {
      console.log(error)
  }
})
const handleDeleteClick = () => {
  // Call the onDelete function with the studentId
  onDelete && onDelete(studentId);
};

return (
  <div>
      <h2>{student.data.firstname + student.data.lastname}</h2>
      <p>{student.data.email}</p>
      <p>{student.data.gpa}</p>
      <button onClick={handleDeleteClick}>Delete Student</button>
  </div>
)
