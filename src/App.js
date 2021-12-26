import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/navbar";
import Landing from "./components/homepage/landing";
import Resume from "./components/resumePage/resume";
import Projects from "./components/projectsPage/projects";
import Zworld from "./components/zworldPage/zworld";
import Blog from "./components/blogPage/blog";
import "./App.css";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/home" element={<Landing />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/zworld" element={<Zworld />} />
                <Route path="/" element={<Navigate replace to="/home" />} />
            </Routes>
        </div>
    );
}

export default App;
