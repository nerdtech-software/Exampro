import axios from "axios"; // Import axios for API requests
import { FormEvent, JSX, useState } from "react";
import { useNavigate } from "react-router-dom"; // For redirection

export default function PasswordRecoveryForm(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | null>(null); // For handling errors
  const [loading, setLoading] = useState<boolean>(false); // To show a loading state
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Clear previous errors

    try {
      // Make an API call to trigger password recovery (adjust the URL as needed)
      const response = await axios.post("http://localhost:5000/api/auth/password-recovery", { email });
      console.log("Password recovery email sent:", response.data);
      alert(`Password recovery email sent to: ${email}`);

      // Redirect user to the login page after successful request
      navigate("/login");
    } catch (err) {
      setError("Failed to send recovery email. Please try again."); // Handle any errors
      console.error("Password recovery error:", err);
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      {/* Logo */}
      <div className="mb-6 flex items-center gap-2">
        <h1 className="text-2xl font-bold">Exam</h1>
        <div className="bg-orange-500 text-white px-3 py-1 rounded-md font-bold">Pro</div>
      </div>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Recovery</h2>
          <div className="text-sm">
            <span className="text-gray-500">Don't have an account? </span>
            <button className="ml-2 text-white bg-orange-500 hover:bg-orange-600 px-3 py-1 rounded text-sm">
              SIGN UP
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <label className="block text-gray-700 mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 rounded border border-gray-300 bg-blue-50 mb-6"
        />

        <button
          type="submit"
          disabled={loading} // Disable button while loading
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded"
        >
          {loading ? "Sending..." : "SEND PASSWORD RECOVERY"}
        </button>
      </form>

      {/* Footer */}
      <p className="mt-6 text-sm text-gray-500">
        This learning system is powered by {" "}
        <a href="#" className="text-blue-600 underline">
          Teacherseat
        </a>
      </p>
    </div>
  );
}
