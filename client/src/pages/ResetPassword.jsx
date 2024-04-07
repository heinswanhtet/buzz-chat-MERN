import { useState } from "react"
import useResetPassword from "../hooks/useResetPassword"

const Register = () => {
    const [values, setValues] = useState({
        password: "",
        confirmPassword: "",
    })
    const { isLoading, resetPassword } = useResetPassword()

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        await resetPassword({ ...values })
    }

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
                <h1 className="text-3xl font-semibold text-center text-gray-700">
                    Reset Password{" "}
                    <span className="text-pink-400">Buzz Chat</span>
                </h1>

                <form onSubmit={onSubmit}>
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
                        Set New Password
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Register
