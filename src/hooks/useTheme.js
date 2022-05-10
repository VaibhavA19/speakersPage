import { useState } from "react";

function useTheme(initialTheme = "light") {
    const [theme, setTheme] = useState(initialTheme);

    function validateTheme(theme) {
        if(theme === 'light'){
            setTheme(theme);
        }else{
            setTheme('dark');
        }
    }

    return {
        theme,
        setTheme: validateTheme
    };
}

export default useTheme ;