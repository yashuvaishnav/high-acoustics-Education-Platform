


import { createContext, useContext, useState } from "react";
const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:3001/users");
      const users = await response.json();

      const authenticatedUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (authenticatedUser) {
        setUser(authenticatedUser);
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      throw new Error("Login failed");
    }
  };

  const signup = async (email, password) => {
    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 201) {
        const newUser = await response.json();
        setUser(newUser);
      } else {
        throw new Error("Signup failed");
      }
    } catch (error) {
      throw new Error("Signup failed");
    }
  };

  const checkIfUserExists = async (email) => {
    try {
      const response = await fetch("http://localhost:3001/users");
      const users = await response.json();

      return users.some((user) => user.email === email);
    } catch (error) {
      throw new Error("Failed to check if user exists");
    }
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, signup, logout, checkIfUserExists }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}