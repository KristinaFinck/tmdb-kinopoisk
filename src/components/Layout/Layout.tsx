import {Outlet} from "react-router-dom";
import {Header} from "../Header.tsx";
import {useEffect, useState} from "react";

export const Layout = () => {
    const [theme, setTheme] = useState<"light" | "dark">("dark");
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    }

    return(
        <>
            <button onClick={toggleTheme}>
                Switch theme
            </button>
        <Header />
            <main>
                <Outlet />
            </main>
            <footer>© 2025 Kinopoisk Demo · Data courtesy of TMDB.</footer>
        </>
    )

}