import { useState } from "react";
import useLogin from "../hooks/useLogin";
import { Link } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const { isLoading, login } = useLogin();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = values;
    console.log(values);
    await login(email, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="text-3xl font-semibold text-center text-gray-700">
          Login <span className="text-pink-400">Buzz Chat</span>
        </h1>

        <form onSubmit={onSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full input input-bordered h-10"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-block btn-secondary btn-sm mt-6"
            disabled={isLoading}
          >
            Login
          </button>

          <p className="text-sm  mt-2 text-center">
            Don't have an account?{" "}
            <Link
              to={"/register"}
              className="hover:text-blue-400 cursor-pointer"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;
