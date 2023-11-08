// App.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllStudents from "./AllStudents"; // Import your AllStudents component

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/students">
          <AllStudents />
        </Route>
        {/* Other routes can be defined here */}
      </Switch>
    </Router>
  );
}

export default App;
