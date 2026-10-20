import type {ReactNode} from "react";
import {useEffect, useState, } from "react";
import { ThemeContext, type ThemeType } from "./ThemeContext";

type Props = {
    children: ReactNode
}

export const ThemeProvider = ({children}:Props) => {
    const [theme, setTheme] = useState<ThemeType>("dark");
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}