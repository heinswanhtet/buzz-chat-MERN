import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom"
import "./App.css"
import {
    ForgotPassword,
    Home,
    Login,
    Register,
    ResetPassword,
    VerifyEmail,
} from "./pages"
import { useAuthContext } from "./context/AuthContext"
import { Toaster } from "react-hot-toast"

function App() {
    const { user, isLoading } = useAuthContext()

    if (isLoading) {
        return (
            <div className="p-4 h-screen flex justify-center items-center">
                <span className="loading loading-spinner text-secondary"></span>
            </div>
        )
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
                    <Route
                        path="/forgot-password"
                        element={<ForgotPassword />}
                    />
                    <Route
                        path="/user/verify-email"
                        element={<VerifyEmail />}
                    />
                    <Route
                        path="/user/reset-password"
                        element={<ResetPassword />}
                    />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Router>
            <Toaster />
        </div>
    )
}

export default App
