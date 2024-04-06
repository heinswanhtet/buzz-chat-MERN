import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, Login, Register } from "./pages";

function App() {
  return (
    <div className="p-4 h-screen flex justify-center items-center">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
