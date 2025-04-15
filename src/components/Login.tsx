import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem("savedEmail");
    const savedPassword = localStorage.getItem("savedPassword");
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (rememberMe) {
      localStorage.setItem("savedEmail", email);
      localStorage.setItem("savedPassword", password);
    } else {
      localStorage.removeItem("savedEmail");
      localStorage.removeItem("savedPassword");
    }

    // Simulate login success (replace with real API call)
    console.log("Logging in:", { email, password });

    // Redirect to homepage
    navigate("/");
  };

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-black">
          <img
            className="w-26 h-19 mr-2"
            src="https://assets.teacherseat.com/bd84f2e7-0f4c-42b3-b76f-6104fcdb0ae6/assets/logo-light.svg"
            alt="logo"
          />
        </a>
        <div className="w-full bg-white rounded-lg shadow border sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
              Login in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-black rounded-lg block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-black rounded-lg block w-full p-2.5"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-black">
                      Remember me
                    </label>
                  </div>
                </div>
                <Link to="/PasswordRecovery" className="text-sm font-medium text-primary-600 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full text-black bg-orange-500 hover:bg-orange-600 rounded-lg text-sm px-5 py-2.5"
              >
                Login in
              </button>
              <p className="text-sm font-light text-black">
                Don’t have an account yet?{" "}
                <Link to="/register" className="font-medium text-primary-600 hover:underline">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
