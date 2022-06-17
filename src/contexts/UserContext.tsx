import { auth } from "config/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useState, useContext, useEffect } from "react";
import { useAuth } from "./AuthContext";

interface UserType {
  user: { [key: string]: any };
  isDark: Boolean;
}

interface UserContextState {
  userData: UserType;
  toogleTheme: () => void;
}

const contextDefaultValues: UserContextState = {
  userData: { user: () => JSON.parse(localStorage.getItem("user") || "") ?? {}, isDark: false },
  toogleTheme: () => {},
};

const UserContext = createContext<UserContextState>(contextDefaultValues);

const UserProvider = ({ children }: any) => {
  const [userData, setUser] = useState(contextDefaultValues.userData);
  const { setAuthVal } = useAuth();

  const toogleTheme = () => setUser((prev: any) => ({ ...prev, isDark: !prev.isDark }));

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser((prev: any) => ({ ...prev, user }));
        localStorage.setItem("user", JSON.stringify(user));
        setAuthVal(user);
      } else {
        setUser((prev: any) => ({ ...prev, user: {} }));
        localStorage.setItem("user", JSON.stringify({}));
        setAuthVal();
      }
    });
  }, [auth]);

  return <UserContext.Provider value={{ userData, toogleTheme }}>{children}</UserContext.Provider>;
};

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };
