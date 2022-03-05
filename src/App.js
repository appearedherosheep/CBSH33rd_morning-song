import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Searchbox from "./components/Searchbox";

function App() {
  return (
    <div>
      <Navbar />
      <Searchbox />
    </div>
  );
}

export default App;
