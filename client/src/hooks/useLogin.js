import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { saveUser } = useAuthContext();
  const navigate = useNavigate();

  const login = async (email, password) => {
    const valuesExist = checkInputValues(email, password);
    if (!valuesExist) return;

    const loginUser = { email, password };
    setIsLoading(true);
    try {
      const { data } = await axios.post("/api/v1/auth/login", loginUser);
      toast.success(`Welcome, ${data.user.name.toUpperCase()}!`);
      setIsLoading(false);
      saveUser(data.user);
      navigate("/");
    } catch (error) {
      //   toast.error(error);
      toast.error(error.response.data.msg);
      setIsLoading(false);
    }
  };

  return { isLoading, login };
};

function checkInputValues(email, password) {
  if (!email || !password) {
    toast.error("Please provide values for all required fields");
    return false;
  }
  return true;
}

export default useLogin;
