import axios from "axios"; // If you plan to use axios for form submission
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  
  // State for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); // For handling errors
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    
    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", {
        firstName,
        lastName,
        email,
        password,
      });

      // On success, navigate to login page or show success message
      console.log("Signup successful:", response.data);
      navigate("/login"); // Redirect to login page after successful signup
    } catch (error) {
      console.error("Signup failed:", error);
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Signup</h2>
          <div>
            <span className="text-gray-600">Already have an account?</span>
            <Link to="/login">
              <button className="ml-2 bg-orange-500 text-white px-4 py-2 rounded-md text-sm">
                LOG IN
              </button>
            </Link>
          </div>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>} {/* Display error message */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 p-2">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-2 rounded bg-blue-50"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 p-2">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-2 rounded bg-blue-50"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 p-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded bg-blue-50"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 p-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded bg-blue-50"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 p-2">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 rounded bg-blue-50"
              required
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
  );
};

export default Signup;
