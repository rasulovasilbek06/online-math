import React from "react";
import Home from "./components/Home";
import Videolar from "./components/Videolar";
import Masalalar from "./components/Masalalar";
import Sign from "./components/Sign";
import Course from "./components/Course";
import Students from "./components/Students";
import Added from "./components/Added";
import Algebra from "./components/Algebra";
import Error from "./components/Error"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="masalalar" element={<Masalalar />}></Route>
          <Route path="videolar" element={<Videolar />}></Route>
          <Route path="signIn" element={<Sign />}></Route>
          <Route path="course" element={<Course />}></Route>
          <Route path="students" element={<Students />}></Route>
          <Route path="signIn/added" element={<Added />}></Route>
          <Route path="masalalar/algebra" element={<Algebra />}></Route>
          <Route path="error" element={<Error/>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
