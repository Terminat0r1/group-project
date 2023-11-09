import { useState } from "react";
import { useCreateTaskMutation } from "./taskSlice";
import { addStudent } from './studentsSlice'; // Import the addStudent action
import { useDispatch } from "react-redux";

/** Form for creating new tasks */
export default function StudentForm() {
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [email, setemail] = useState();
  const [imageUrl] = useState();
  const [gpa, setgpa] = useState();
  const [createTask] = useCreateTaskMutation();
  const dispatch = useDispatch();
    
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const age = event.target.age.value;
    
    // Dispatch the addStudent action to add a new student
    dispatch(addStudent({ name, age }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"   name="firstName" placeholder="firstName" />
      <input type="text"   name="lastName" placeholder="lastName" />
      <input type="text"   name="email" placeholder="email" />
      <input type="text"   name="imageUrl" placeholder="imageUrl" />
      <input type="number" name="gpa" placeholder="gpa" />
      <button type="submit">Add Student</button>
    </form>
  );
}
