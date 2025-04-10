import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="p-6 w-[1200px] m-auto flex items-center justify-between">
        <nav className="flex items-center gap-4">
          <a className="w-[100px] h-[55px]" href="">
            <Link to="/">
              <img
                src="https://assets.teacherseat.com/bd84f2e7-0f4c-42b3-b76f-6104fcdb0ae6/assets/logo-light.svg"
                alt="logo"
              />
            </Link>
          </a>

          <a
            className="text-sm font-normal text-gray-500 hover:text-gray-700 border px-5 py-2"
            href=""
          >
            Help Center
          </a>
        </nav>
        <nav className="flex items-center gap-4">
       <Link to="/login">   <a
            className="text-sm text-black hover:text-gray-700 border px-5 py-2 "
            href=""
          >
            Log In
          </a></Link>
          <Link to="/getStart"> <a
            className="bg-orange-500 border border-orange-500 text-white rounded px-5 py-2 hover:bg-orange-600"
            href=""
          >
             Get Started
          </a>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
