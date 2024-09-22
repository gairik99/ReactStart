import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [isLoggedIn, SetLoggedIn] = useState(false);
    return (
        <AuthContext.Provider value={{ isLoggedIn, SetLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth = () => useContext(AuthContext)
export { useAuth, AuthProvider }
