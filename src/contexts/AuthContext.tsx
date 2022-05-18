import { createContext, useContext, useState } from "react";

interface AuthType {
  token: string;
  isAuth: Boolean;
}

interface AuthContextState {
  authorization: AuthType;
  setAuthVal: (arg0?: any) => void;
}

const authDefaultValues: AuthContextState = {
  authorization: { token: "", isAuth: false },
  setAuthVal: (user?: any) => {},
};

const AuthContext = createContext<AuthContextState>(authDefaultValues);

const AuthProvider = ({ children }: any) => {
  const [authorization, setAuth] = useState(() => {
    const token = localStorage.getItem("token");
    if (token) return { token, isAuth: true };
    return { token: "", isAuth: false };
  });

  const setAuthVal = (user?: any) => {
    if (user) setAuth({ token: user, isAuth: true });
    else setAuth({ token: "", isAuth: false });
    localStorage.setItem("token", JSON.stringify(authorization.token));
  };

  return <AuthContext.Provider value={{ authorization, setAuthVal }}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
