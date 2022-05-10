
import { ThemeContext, ThemeProvider } from "../contexts/themeContext";
import { useContext } from "react";

function Layout({initialTheme, children}) {
    return (
        <ThemeProvider initialTheme={initialTheme} >
            <LayoutNoTheme>
                {children}
            </LayoutNoTheme>
        </ThemeProvider>
    );

}


function LayoutNoTheme({ children }) {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={theme === "light" ?
            "container-fluid light" : "container-fluid dark"} >
            {children}
        </div>
    );
}

export default Layout;