import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { Home, Login, Register } from "./pages";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { user, isLoading } = useAuthContext();

  if (isLoading) {
    return (
      <div className="p-4 h-screen flex justify-center items-center">
        <span className="loading loading-spinner text-secondary"></span>
      </div>
    );
  }

  return (
    <div className="p-4 h-screen flex justify-center items-center">
      <Router>
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
