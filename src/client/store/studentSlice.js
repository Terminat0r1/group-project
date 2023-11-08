import { createSlice } from "@reduxjs/toolkit";

const studentsSlice = createSlice({
  name: "students",
  initialState: [], // Initial state can be an empty array
  reducers: {
    addStudent: (state, action) => {
      // Add a new student to the state
      state.push(action.payload);
    },
    updateStudent: (state, action) => {
      // Update an existing student in the state
      const { id, name, age } = action.payload;
      const student = state.find((s) => s.id === id);
      if (student) {
        student.name = name;
        student.age = age;
      }
    },
    // Define more actions for deleting, fetching, etc.
  },
});

export const { addStudent, updateStudent } = studentsSlice.actions;
export default studentsSlice.reducer;
