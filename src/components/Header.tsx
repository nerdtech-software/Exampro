import { Link } from "react-router-dom";
import { useAuth } from "../components/AuthContext"; // Import the useAuth hook

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Optionally add logout logic (e.g., API call)
  };

  return (
    <header className="p-6 max-w-screen-xl mx-auto flex items-center justify-between w-full">
      <nav className="flex items-center gap-4">
        <Link to="/" className="w-[100px] h-[55px]">
          <img
            src="https://assets.teacherseat.com/bd84f2e7-0f4c-42b3-b76f-6104fcdb0ae6/assets/logo-light.svg"
            alt="logo"
          />
        </Link>
        <a
          className="hidden md:inline-block text-sm font-normal text-gray-500 hover:text-gray-700 border px-5 py-2"
          href="#"
        >
          Help Center
        </a>
      </nav>

      <nav className="flex items-center gap-4">
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="text-sm text-black hover:text-gray-700 border px-5 py-2"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="text-sm text-black hover:text-gray-700 border px-5 py-2"
          >
            Login
          </Link>
        )}

        <Link
          to="/getStart"
          className="hidden md:inline-block bg-orange-500 border border-orange-500 text-white rounded px-5 py-2 hover:bg-orange-600"
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
};

export default Header;
