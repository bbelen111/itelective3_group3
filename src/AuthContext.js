import React, { createContext, useContext, useState, useCallback } from 'react';

// Predefined users
export const USERS = [
  { fullName: 'Yelena Belova', firstName: 'Yelena', colorKey: 'yelena', password: 'yelenabelova1' },
  { fullName: 'Bucky Barnes', firstName: 'Bucky', colorKey: 'bucky', password: 'buckybarnes1' },
  { fullName: 'Alexei Shostakov', firstName: 'Alexei', colorKey: 'alexei', password: 'alexeishostakov1' },
  { fullName: 'Ava Starr', firstName: 'Ava', colorKey: 'ava', password: 'avastarr1' },
  { fullName: 'John Walker', firstName: 'John', colorKey: 'john', password: 'johnwalker1' }
];

// Color and style definitions for users
export const userColors = {
  yelena: { styleType: 'solid', color: '#000000' },
  bucky: { styleType: 'solid', color: '#C0C0C0' },
  alexei: { styleType: 'solid', color: '#FF0000' },
  ava: { styleType: 'solid', color: '#FFFFFF', textShadow: '0 0 2px #000' },
  john: { styleType: 'gradient', gradient: 'linear-gradient(90deg, #B22234 0%, #FFFFFF 50%, #3C3B6E 100%)', fallback: '#B22234', textShadow: '0 0 3px rgba(0,0,0,0.55)' }
};

const AuthContext = createContext(null);

// Provider component to wrap the app and provide auth state
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = useCallback((userObj) => {
    setUser(userObj);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth context
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
