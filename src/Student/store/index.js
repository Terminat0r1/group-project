import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import api from "./api";
import studentsReducer from "./studentsSlice"; // Create this reducer

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
  },
  reducer: {
    students: studentsReducer,
    // Add more reducers if needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

export default store;
