import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
// import NewTask from "./NewTask";
// import Task from "./Task";
import { useGetTasksQuery } from "./taskSlice";



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
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
      )}
    </div>
  );
}


