import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PersonalDetailsForm from "./components/PersonalDetailsForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PersonalDetailsForm />} />
      </Routes>
    </Router>
  );
}

export default App;
