import api from "../../store/api";
import { createSlice } from "@reduxjs/toolkit";

const studentsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/tasks",
      providesTags: ["Tasks"],
    }),
    getTask: builder.query({
      query: (id) => `/tasks/${id}`,
      providesTags: ["Tasks"],
    }),
    createTask: builder.mutation({
      query: (task) => ({
        url: "/tasks",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["Tasks"],
    }),
    editTask: builder.mutation({
      query: (task) => ({
        url: `/tasks/${task.id}`,
        method: "PUT",
        body: task,
      }),
      invalidatesTags: ["Tasks"],
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});

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

export const {
  useGetTasksQuery,
  useGetTaskQuery,
  useCreateTaskMutation,
  useEditTaskMutation,
  useDeleteTaskMutation,
} = tasksApi;
