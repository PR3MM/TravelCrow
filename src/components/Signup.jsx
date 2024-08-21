import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login() {
  const emailref = useRef();
  const passref = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await signup(emailref.current.value, passref.current.value);
      navigate("/");
    } catch (error) {
      console.error("Error during Signup:", error.message);
      setError(error.message || "Failed to create an account");
    }
    setLoading(false);
  }

  async function handleGoogleLogin() {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      // Handle user and token as needed
      navigate("/");
    } catch (error) {
      console.error("Error during Google Login:", error.message);
      setError(error.message || "Failed to Login with Google");
    }
  }

  return (
    <section className="bg-white dark:bg-black min-h-screen flex items-center justify-center ">
      <div className="max-w-lg w-full  bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm transition duration-300 hover:bg-opacity-20 hover:shadow-xl ">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Create an account
        </h1>
        {error && (
          <p className="mb-4 text-sm text-red-600 dark:text-red-400">
            {error}
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email address
            </label>
            <input
              id="email"
              type="email"
              ref={emailref}
              required
              placeholder="Email address"
              className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              id="password"
              type="password"
              ref={passref}
              required
              placeholder="Password"
              className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center rounded-md border border-transparent bg-black px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-50"
          >
            {loading ? 'Creating account...' : 'Create account'}
          </button>
        </form>
        <div className="my-4 flex items-center">
          <hr className="flex-grow border-gray-300 dark:border-gray-600" />
          <span className="mx-4 text-gray-500 dark:text-gray-400">OR</span>
          <hr className="flex-grow border-gray-300 dark:border-gray-600" />
        </div>
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full inline-flex items-center justify-center rounded-md border border-transparent bg-gray-50 px-4 py-2 text-base font-medium text-black shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        >
          <svg
            className="mr-3 h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.207 10.491c.775-1.53 1.234-3.23 1.234-5.083 0-.535-.048-1.058-.144-1.566H12v2.951h4.945c-2.293 2.102-3.693 5.186-3.693 8.878 0 1.726.29 3.384.855 4.934l-1.34.876C11.329 20.18 10.071 18.501 9.5 16.423 8.762 17.95 7.582 19.042 6.065 19.042 3.285 19.042 1 16.485 1 13.125 1 10.866 3.285 8.309 6.065 8.309c.717 0 1.412.161 2.061.445l1.486-1.486C9.143 6.849 8.227 6.65 7.375 6.65 4.64 6.65 2.5 8.944 2.5 11.875 2.5 14.805 4.64 17.1 7.375 17.1c2.72 0 5.055-1.73 5.926-4.091h-2.832v-2.951H20.207z"
              fill="#4285F4"
            />
          </svg>
          Sign up with Google
        </button>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-black hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
          >
            Sign in
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;