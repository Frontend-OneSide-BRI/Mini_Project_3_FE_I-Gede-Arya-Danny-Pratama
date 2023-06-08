import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex flex-col items-center my-32 gap-10">
      <div className="flex flex-col gap-3 w-full max-w-md">
        <p className="text-2xl mb-4 text-center">LOGIN</p>

        <form className="flex flex-col gap-3">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="bg-zinc-900 border border-zinc-500 p-3 rounded-sm"
          />
          <div className="relative">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="bg-zinc-900 border border-zinc-500 p-3 rounded-sm w-full"
            />
            <div className="absolute top-0 right-2 h-full flex items-center">
              <img alt="hide" className="p-2 cursor-pointer bg-zinc-900" />
            </div>
          </div>
          <button
            type="submit"
            className="bg-red-700 hover:bg-red-800 p-3 rounded-sm"
          >
            Login
          </button>
        </form>
        <p>
          Don&apos;t have account?{" "}
          <Link to="/register">
            <u>Register</u>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
