import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


//routes
import Home from "./Pages/Home/Home";
import Lessons from "./Pages/Lessons/Lessons";
import Lesson from "./Pages/Lesson/Lesson";
import Vocab from "./Pages/Vocab/Vocab";

//components
import Menu from "./Components/Menu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Static routes */}
        <Route path="/" element={<Home />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/vocab" element={<Vocab />} />
        {/* Dynamic route with URL pa rameter */}
        <Route path="/lesson/:lessonId" element={<Lesson />} />
      </Routes>
      <Menu />
    </BrowserRouter>
  );
}

export default App;
