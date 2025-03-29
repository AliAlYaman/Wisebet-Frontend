import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api/login";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await login(formData);
      navigate("/dashboard"); // Redirect to dashboard after successful login
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-indigo-500 text-center">Welcome back</h2>
        <p className="text-gray-400 text-center mt-2">Sign in to your account</p>

        {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="text-sm text-gray-400 text-center mt-6">
          Don't have an account?{" "}
          <a href="/register" className="text-indigo-400 hover:text-indigo-300">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
