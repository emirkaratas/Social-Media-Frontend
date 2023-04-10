import { createContext, useEffect, useState, useContext } from "react";

const DarkModeContext = createContext()

const DarkModeContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem("darkMode")) || false
    );

    const toggle = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    return (
        <DarkModeContext.Provider value={{ darkMode, toggle }}>
            {children}
        </DarkModeContext.Provider>
    );
}

const useDarkModeContext = () => useContext(DarkModeContext)
export {DarkModeContextProvider,useDarkModeContext}