import { Link } from "react-router-dom"
import useRegister from "../hooks/useRegister"
import { useState } from "react"

const Register = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const { isLoading, register } = useRegister()

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        // const { name, email, password, confirmPassword } = values;
        await register({ ...values })
    }

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
                <h1 className="text-3xl font-semibold text-center text-gray-700">
                    Sign Up <span className="text-pink-400">Buzz Chat</span>
                </h1>

                <form onSubmit={onSubmit}>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter name"
                            className="w-full input input-bordered h-10"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                        />
                    </div>

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
                            <span className="text-base label-text">
                                Password
                            </span>
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

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">
                                Confirm Password
                            </span>
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm password"
                            className="w-full input input-bordered h-10"
                            name="confirmPassword"
                            value={values.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-block btn-secondary btn-sm mt-6"
                        disabled={isLoading}
                    >
                        Sign Up
                    </button>

                    <p className="text-sm  mt-2 text-center">
                        Already have an account?{" "}
                        <Link
                            to={"/login"}
                            className="hover:text-blue-400 cursor-pointer"
                        >
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
export default Register
