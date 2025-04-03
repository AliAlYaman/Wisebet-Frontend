import React from 'react';
import { useAuth } from '../../context/AuthProvider';

const GoogleLogin: React.FC = () => {
  const { loginWithGoogle } = useAuth();

  return (
    <button
      onClick={loginWithGoogle}
      className="bg-red-500 text-white p-2 rounded"
    >
      Sign in with Google
    </button>
  );
};

export default GoogleLogin;
