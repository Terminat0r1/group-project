import { useState } from "react";
import { useCreateTaskMutation } from "./taskSlice";
import { addStudent } from './studentsSlice'; // Import the addStudent action
import { useDispatch } from 'react-redux';

/** Form for creating new tasks */
export default function StudentForm() {
  const [description, setDescription] = useState("");
  const [createTask] = useCreateTaskMutation();

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const age = event.target.age.value;

    // Dispatch the addStudent action to add a new student
    dispatch(addStudent({ name, age }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" />
      <input type="number" name="age" placeholder="Age" />
      <button type="submit">Add Student</button>
    </form>
  );
}
