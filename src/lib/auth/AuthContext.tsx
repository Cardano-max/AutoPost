"use client";

import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { authApi } from '@/lib/api-client';

// Define user type
interface User {
  id: string;
  name: string;
  email: string;
  companyName: string;
  businessType?: string;
}

// Define auth context state
interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (userData: {
    name: string;
    email: string;
    password: string;
    companyName: string;
    businessType?: string;
  }) => Promise<void>;
  logout: () => void;
}

// Create the auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create a provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Check for existing token on mount
  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('authUser');

    if (storedToken && storedUser) {
      setToken(storedToken);
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        // Invalid user data in storage
        localStorage.removeItem('authToken');
        localStorage.removeItem('authUser');
      }
    }

    setIsLoading(false);
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await authApi.login(email, password);
      setToken(response.token);
      setUser(response.user);

      // Store auth data in localStorage
      localStorage.setItem('authToken', response.token);
      localStorage.setItem('authUser', JSON.stringify(response.user));
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Signup function
  const signup = async (userData: {
    name: string;
    email: string;
    password: string;
    companyName: string;
    businessType?: string;
  }) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await authApi.signup(userData);
      setToken(response.token);
      setUser(response.user);

      // Store auth data in localStorage
      localStorage.setItem('authToken', response.token);
      localStorage.setItem('authUser', JSON.stringify(response.user));
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
  };

  const authContextValue: AuthContextType = {
    user,
    token,
    isLoading,
    error,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

// Create a hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
