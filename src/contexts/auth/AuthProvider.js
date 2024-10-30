import React, { useContext, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({
  children,
  saveTokenStrategy = (type, value) => {
    localStorage.setItem(type, value);
  },
  clearTokenStrategy = (type) => {
    localStorage.removeItem(type);
  },
  getTokenStrategy = (type) => {
    localStorage.getItem(type);
  },
}) {
  const accessTokenKey = "accessToken";
  const refreshTokenKey = "refreshToken";

  const [accessToken, setAccessToken] = useState(
    getTokenStrategy(accessTokenKey)
  );
  const [refreshToken, setRefreshToken] = useState(
    getTokenStrategy(refreshTokenKey)
  );
  const [user, setUser] = useState(null);
  const [roles, setRoles] = useState(["admin"]);

  // save token when login success
  const saveToken = (newAccessToken, newRefreshToken) => {
    setAccessToken(newAccessToken);
    setRefreshToken(newRefreshToken);

    saveTokenStrategy(accessTokenKey, newAccessToken);
    saveTokenStrategy(refreshTokenKey, newRefreshToken);
  };

  //   clear token when logout
  const clearToken = () => {
    setAccessToken(null);
    setRefreshToken(null);

    clearTokenStrategy(accessTokenKey);
    clearTokenStrategy(refreshTokenKey);
  };

  // get token
  const getTokenPair = () => {
    return {
      accessTokenKey: accessToken,
      refreshTokenKey: refreshToken,
    };
  };

  return (
    <AuthContext.Provider
      value={{
        saveToken,
        clearToken,
        getTokenPair,
        roles,
        setRoles,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
