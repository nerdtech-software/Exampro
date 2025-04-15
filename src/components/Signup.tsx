import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Signup</h2>
            <div>
              <span className="text-gray-600">Already have an account?</span>
              <Link to="/login">
                {" "}
                <button className="ml-2 bg-orange-500 text-white px-4 py-2 rounded-md text-sm">
                  LOG IN
                </button>
              </Link>
            </div>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 p-2">
                First Name
              </label>
              <input type="text" className="w-full p-2 rounded bg-blue-50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 p-2">
                Last Name
              </label>
              <input type="text" className="w-full p-2 rounded bg-blue-50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 p-2">
                Email
              </label>
              <input type="email" className="w-full p-2 rounded bg-blue-50" />
            </div>
             <div>
              <label className="block text-sm font-medium text-gray-700 p-2">
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 rounded bg-blue-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 p-2">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full p-2 rounded bg-blue-50"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white p-3 rounded-md font-semibold"
            >
              SIGNUP
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
