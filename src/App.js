import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import About from "./routes/About";
import Chungwoon from "./routes/Chungwoon";
import Sarum from "./routes/Sarum";
import "./App.css";

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/chungwoon" element={<Chungwoon />}></Route>
        <Route path="/sarum" element={<Sarum />}></Route>
      </Routes>
      <hr />

      <Footer />
    </Router>
  );
}

export default App;
