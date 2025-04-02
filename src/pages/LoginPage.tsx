import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { googleLogin } from "../services/api/auth/login";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const { login, isLoading, checkAuthState } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await login(formData);
      navigate('/'); 
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  const handleGoogleSuccess = async (credentialResponse: any) => {
    try {
      if (credentialResponse.credential) {
        await googleLogin(credentialResponse.credential);
        await checkAuthState();
        navigate('/');
      } else {
        setError("Google login failed - no credential received");
      }
    } catch (err: any) {
      setError(err.message || "Google login failed");
    }
  };
  

  const handleGoogleError = () => setError("Google login failed");

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID || ""}>
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg p-8 relative">
          <button onClick={() => navigate('/')} className="absolute top-4 left-4 text-gray-400 hover:text-white">
            <FaArrowLeft size={20} />
          </button>

          <h2 className="text-3xl font-bold text-indigo-500 text-center">Welcome back</h2>
          <p className="text-gray-400 text-center mt-2">Sign in to your account</p>

          {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}

          <div className="mt-6 flex justify-center">
            <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} useOneTap text="signin_with" shape="rectangular" size="large" width="300" />
          </div>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="mx-4 text-gray-400">or</span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm text-gray-300">Email</label>
              <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white" placeholder="your@email.com" />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm text-gray-300">Password</label>
              <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white" placeholder="••••••••" />
            </div>

            <button type="submit" className="w-full py-3 bg-indigo-600 rounded-md hover:bg-indigo-700 text-white" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
