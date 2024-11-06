import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContent from "./Components/MainContent/MainContent";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import JobDescription from "./Components/JobDescription/JobDescription";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="app">
                <Sidebar />
                <div className="main-container">
                  <Header />
                  <MainContent />
                </div>
              </div>
            }
          ></Route>
          <Route
            path="/description"
            element={<JobDescription></JobDescription>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
