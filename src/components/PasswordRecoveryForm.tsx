import { FormEvent, JSX, useState } from "react";

export default function PasswordRecoveryForm(): JSX.Element {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Password recovery email sent to: ${email}`);
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
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded"
        >
          SEND PASSWORD RECOVERY
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
