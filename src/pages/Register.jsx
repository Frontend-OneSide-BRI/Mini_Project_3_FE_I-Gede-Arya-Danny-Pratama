import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <div className="flex flex-col items-center my-32 gap-10">
      <div className="flex flex-col gap-3 w-full max-w-md">
        <p className="text-2xl mb-4 text-center">REGISTER</p>

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
              type={isPasswordShown ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              className="bg-zinc-900 border border-zinc-500 p-3 rounded-sm w-full"
            />
            <div className="absolute top-0 right-2 h-full flex items-center">
              <img
                onClick={() => setIsPasswordShown(!isPasswordShown)}
                src={
                  isPasswordShown
                    ? "src/assets/images/ic_eyeoff.svg"
                    : "src/assets/images/ic_eye.svg"
                }
                alt="hide"
                className="p-2 cursor-pointer bg-zinc-900"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-red-700 hover:bg-red-800 p-3 rounded-sm"
          >
            Register
          </button>
        </form>
        <p>
          Already have account?{" "}
          <Link to="/login">
            <u>Login</u>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
