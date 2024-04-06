const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="text-3xl font-semibold text-center text-gray-700">
          Sign Up <span className="text-pink-400">Buzz Chat</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter name"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Enter email"
              className="w-full input input-bordered h-10"
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
            />
          </div>

          <button
            type="submit"
            className="btn btn-block btn-secondary btn-sm mt-6"
          >
            Sign Up
          </button>

          <p className="text-sm  mt-2 text-center">
            Already have an account?{" "}
            <span className="hover:text-blue-400 cursor-pointer">Login</span>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Register;
