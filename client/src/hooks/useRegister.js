import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { saveUser } = useAuthContext();
  const navigate = useNavigate();

  const register = async ({ name, email, password, confirmPassword }) => {
    const valuesExistAndCheckPassword = checkInputValues({
      name,
      email,
      password,
      confirmPassword,
    });
    if (!valuesExistAndCheckPassword) return;

    const registerUser = { name, email, password };
    setIsLoading(true);
    try {
      const { data } = await axios.post("/api/v1/auth/register", registerUser);
      toast.success(`${data.msg}`);
      setIsLoading(false);
      saveUser(data.user);
      navigate("/");
    } catch (error) {
      //   toast.error(error);
      toast.error(error.response.data.msg);
      setIsLoading(false);
    }
  };

  return { isLoading, register };
};

function checkInputValues({ name, email, password, confirmPassword }) {
  if (!name || !email || !password || !confirmPassword) {
    toast.error("Please provide values for all required fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match!");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}

export default useRegister;
