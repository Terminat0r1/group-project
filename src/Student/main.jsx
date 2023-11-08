import React from "react";
import ReactDOM from "react-dom/client";

import "./index.less";

import { Provider } from "react-redux";
import store from "./store/index.js";

import AuthForm from "./features/auth/AuthForm.jsx";
import Tasks from "./features/tasks/Tasks.jsx";
import Root from "./layout/Root.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Tasks /> },
     // { path: "/tasks", element: <Tasks /> },
     // ^^ Change this line to match our routes
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
