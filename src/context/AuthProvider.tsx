import React, { createContext, useContext, useEffect, useState } from 'react';
import { checkAuth } from '../services/api/auth/checkAuth';
import { login } from '../services/api/auth/login';
import { logout } from '../services/api/auth/logout';

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  checkAuthState: () => Promise<void>;
  loginWithGoogle: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const verifyAuth = async () => {
    try {
      const authenticated = await checkAuth();
      setIsAuthenticated(authenticated);
    } catch {
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

  const loginWithGoogle = () => {
    const width = 500, height = 600;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    const popup = window.open(
      `${process.env.REACT_APP_API_URL}/auth/google/redirect`,
      'Google Sign-In',
      `width=${width},height=${height},top=${top},left=${left}`
    );

    const interval = setInterval(() => {
      if (popup?.closed) {
        clearInterval(interval);
        verifyAuth();
      }
    }, 1000);
  };

  useEffect(() => {
    const receiveMessage = async (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;
      if (event.data.token) {
        localStorage.setItem('api_token', event.data.token);
        await verifyAuth();
      }
    };

    window.addEventListener('message', receiveMessage);
    return () => window.removeEventListener('message', receiveMessage);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login: handleLogin, logout: handleLogout, checkAuthState: verifyAuth, loginWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
