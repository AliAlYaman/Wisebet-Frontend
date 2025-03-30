import React, { createContext, useContext, useEffect, useState } from 'react';
import { checkAuth } from '../services/api/auth/checkAuth';
import { login } from '../services/api/auth/login';
import { logout } from '../services/api/auth/logout';

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  checkAuthState: () => Promise<void>; // Add this new function
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Extract the auth check logic into a reusable function
  const verifyAuth = async () => {
    try {
      const authenticated = await checkAuth();
      setIsAuthenticated(authenticated);
    } catch (error) {
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    verifyAuth();
  }, []);

  const handleLogin = async (credentials: { email: string; password: string }) => {
    setIsLoading(true);
    try {
      await login(credentials);
      // Immediately verify auth state after login
      await verifyAuth();
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await logout();
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        login: handleLogin,
        logout: handleLogout,
        checkAuthState: verifyAuth, // Expose the verifyAuth function
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};