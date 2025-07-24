import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Portfolio />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;