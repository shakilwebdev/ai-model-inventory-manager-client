import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const { createUser, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const displayName = event.target.displayName.value;
    const photoURL = event.target.photoURL.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // password validation: at least 1 uppercase, 1 lowercase, min 6 chars
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    if (!hasUpper || !hasLower || password.length < 6) {
      toast.error(
        "Password must be at least 6 characters and include 1 uppercase and 1 lowercase letter"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        // update profile then navigate
        updateUserProfile(displayName, photoURL)
          .then(() => {
            toast.success("User created successfully!");
            // navigate to desired route or home
            const dest = location?.state?.from?.pathname || "/";
            navigate(dest);
          })
          .catch((err) => {
            console.error(err);
            toast.error(err.message || "Profile update failed");
          });
      })
      .catch((error) => {
        console.log(error);
        // Generic message to avoid leaking technical details
        toast.error(error.message || "Registration failed");
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success("Signed in successfully!");
        console.log(result.user);
        const dest = location?.state?.from?.pathname || "/";
        navigate(dest);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message || "Google sign-in failed");
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="card bg-base-100 w-full mx-auto max-w-sm shadow-2xl border border-gray-200 transform -translate-y-8">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Register</h1>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* email field */}
              <label className="label">Name</label>
              <input
                type="text"
                name="displayName"
                className="input w-full bg-white rounded-full focus:border-gray-300 focus:outline-none"
                placeholder="Name"
              />

              <label className="label">PhotoURL</label>
              <input
                type="text"
                name="photoURL"
                className="input w-full bg-white rounded-full focus:border-gray-300 focus:outline-none"
                placeholder="Photo URL"
              />
              {/* email field */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full bg-white rounded-full focus:border-gray-300 focus:outline-none"
                placeholder="Email"
              />
              {/* password field */}
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input w-full bg-white rounded-full focus:border-gray-300 focus:outline-none pr-10"
                  placeholder="Password"
                />
                <span
                  className="absolute right-3 top-3.5 cursor-pointer text-gray-500 z-10"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn text-white mt-4 rounded-full bg-linear-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600">
                Register
              </button>
            </fieldset>
          </form>

          <button
            onClick={handleGoogleSignIn}
            className="btn bg-gray-50 rounded-full text-indigo-600 border-gray-300"
          >
            <FaGoogle />
            Login with Google
          </button>
          <p className="text-center">
            Already have an account?{" "}
            <Link className="text-blue-500 hover:text-blue-800" to="/login">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
