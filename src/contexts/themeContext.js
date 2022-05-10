import useTheme from "../hooks/useTheme";
import React, { createContext } from "react";

export const ThemeContext = createContext();

function ThemeProvider({initialTheme, children}) {
    const {theme, setTheme} = useTheme(initialTheme);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeProvider } ;