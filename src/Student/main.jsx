import React from "react";
import ReactDOM from "react-dom/client";

import "./index.less";

import { Provider } from "react-redux";
import store from "./store/index.js";

<<<<<<< HEAD:src/Student/main.jsx
import AuthForm from "./features/auth/AuthForm.jsx";
import Tasks from "./features/tasks/Tasks.jsx";
=======
import AuthForm from "./features/auth/AuthForm";
import StudentsLists from "./features/tasks/StudentsLists";
>>>>>>> main:src/client/main.jsx
import Root from "./layout/Root.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <StudentLists /> },
      { path: "/students", element: <StudentsLists/> },
      { path: "/login", element: <AuthForm /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
