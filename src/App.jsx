import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login/login";
import SignUp from "./pages/Login/signUp";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
