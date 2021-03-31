import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(async () => {
    const storagedUser = localStorage.getItem("@user");
    const storagedToken = localStorage.getItem("@token");

    setUser(JSON.parse(storagedUser));
    setToken(storagedToken);
  }, []);

  function signIn({ user, token }) {
    setUser(user);
    setToken(token);

    localStorage.setItem("@user", JSON.stringify(user));
    localStorage.setItem("@token", token);
  }

  function signOut() {
    localStorage.clear();
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, token, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
