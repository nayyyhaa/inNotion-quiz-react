import { createContext, useState, useContext } from "react";

interface UserType {
  user: Object;
  isDark: Boolean;
}

interface UserContextState {
  userData: UserType;
  toogleTheme: () => void;
}

const contextDefaultValues: UserContextState = {
  userData: { user: {}, isDark: false },
  toogleTheme: () => {},
};

const UserContext = createContext<UserContextState>(contextDefaultValues);

const UserProvider = ({ children }: any) => {
  const [userData, setUser] = useState(contextDefaultValues.userData);

  const toogleTheme = () => setUser((prev: any) => ({ ...prev, isDark: !prev.isDark }));

  return <UserContext.Provider value={{ userData, toogleTheme }}>{children}</UserContext.Provider>;
};

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };
