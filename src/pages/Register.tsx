import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { register } from '../services/api/auth/register';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { googleRegister } from '../services/api/auth/register';
import { useAuth } from '../context/AuthProvider';
import { FaArrowLeft } from 'react-icons/fa';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const { checkAuthState } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await register({
        user_name: formData.user_name,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.confirmPassword
      });
      window.location.href = '/';
    } catch (error) {
      setError("Registration failed. Please try again.");
    }
  };

  const handleGoogleSuccess = async (credentialResponse: any) => {
    try {
      if (credentialResponse.credential) {
        await googleRegister(credentialResponse.credential);
        await checkAuthState();
        window.location.href= '/';
      } else {
        setError("Google registration failed - no credential received");
      }
    } catch (err: any) {
      setError(err.message || "Google registration failed");
    }
  };

  const handleGoogleError = () => setError("Google registration failed");

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID || ""}>
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg p-8 relative">
          <button onClick={() => navigate('/')} className="absolute top-4 left-4 text-gray-400 hover:text-white">
            <FaArrowLeft size={20} />
          </button>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-indigo-500">Create account</h2>
            <p className="text-gray-400 mt-2">Join us today</p>
          </div>

          {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

          <div className="mt-6 flex justify-center">
            <GoogleLogin 
              onSuccess={handleGoogleSuccess} 
              onError={handleGoogleError} 
              text="signup_with" 
              shape="rectangular" 
              size="large" 
              width="300" 
            />
          </div>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="mx-4 text-gray-400">or</span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="user_name" className="block text-sm text-gray-300">Username</label>
              <input
                id="user_name"
                name="user_name"
                type="text"
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white"
                placeholder="yourusername"
                value={formData.user_name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-300">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm text-gray-300">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm text-gray-300">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 cursor-pointer text-indigo-600 border-gray-600 rounded bg-gray-700"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
                I agree to the <Link to="/terms" className="text-indigo-400 hover:text-indigo-300">Terms and Conditions</Link>
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 rounded-md hover:bg-indigo-700 text-white"
              >
                Create account
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-indigo-400 hover:text-indigo-300">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default RegisterPage;