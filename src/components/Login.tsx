import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext"; // Import your useAuth hook

const Login = () => {
  const { setIsLoggedIn } = useAuth(); 
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // 🆕 Auto-fill email/password if saved
  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (savedEmail) setEmail(savedEmail);
    if (savedPassword) setPassword(savedPassword);

    if (savedEmail && savedPassword) {
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        { email, password },
        { withCredentials: true }
      );
      console.log("Login success:", response.data);
      setIsLoggedIn(true); 

      if (rememberMe) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      }

      navigate("/main", { replace: true }); // 🆕 Better navigation
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
    }
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
              Login to your account
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
                Login
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
