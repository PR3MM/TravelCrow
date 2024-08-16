import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login() {
  const nameref = useRef();
  const emailref = useRef();
  const passref = useRef();
  const { Login } = useAuth();
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
      await Login(emailref.current.value, passref.current.value);
      navigate("/");
    } catch (error) {
      console.error("Error during Login:", error.message);
      setError(error.message || "Failed to Login");
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
    <section className="bg-white dark:bg-black">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <a className="block text-blue-600" href="#">
              <span className="sr-only">Home</span>
              <svg
                className="h-8 sm:h-10"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                  fill="#000000"
                />
              </svg>
            </a>
            <h1 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              Sign in to your account
            </h1>
            {error && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                {error}
              </p>
            )}
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input
                    id="email"
                    type="email"
                    ref={emailref}
                    required
                    placeholder="Email address"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">Password</label>
                  <input
                    id="password"
                    type="password"
                    ref={passref}
                    required
                    placeholder="Password"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-black px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-50"
              >
                Sign in
              </button>
            </form>
            <div className="my-4 flex items-center justify-between">
              <hr className="w-full border-gray-300 dark:border-gray-600" />
              <span className="mx-4 text-gray-500 dark:text-gray-400">OR</span>
              <hr className="w-full border-gray-300 dark:border-gray-600" />
            </div>
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-gray-50 px-4 py-2 text-base font-medium text-black shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
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
              Login with Google
            </button>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-black hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
              >
                Sign up
              </Link>
            </p>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Login;
