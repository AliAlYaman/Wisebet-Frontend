import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { resetPassword } from "../services/api/auth/emails/resetPassword";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);
  
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!password || !passwordConfirmation) {
      setMessage({ text: "Please fill in all fields", type: "error" });
      return;
    }

    if (password !== passwordConfirmation) {
      setMessage({ text: "Passwords do not match", type: "error" });
      return;
    }

    if (!token || !email) {
      setMessage({ text: "Invalid reset link", type: "error" });
      return;
    }

    setLoading(true);
    setMessage(null);

    const result = await resetPassword({
      email,
      token,
      password,
      password_confirmation: passwordConfirmation
    });

    if (result.success) {
      setMessage({ text: result.message, type: "success" });
      // Clear form on success
      setPassword("");
      setPasswordConfirmation("");
      window.location.href = '/';
    } else {
      setMessage({ text: result.message, type: "error" });
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold text-white mb-4">Reset Password</h2>

        {message && (
          <div className={`mb-4 p-3 rounded ${
            message.type === "success" 
              ? "bg-green-900/50 text-green-300" 
              : "bg-red-900/50 text-red-300"
          }`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleResetPassword} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              New Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
              placeholder="Enter new password"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
              placeholder="Confirm new password"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 
                         rounded-md text-sm cursor-pointer disabled:opacity-50"
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;