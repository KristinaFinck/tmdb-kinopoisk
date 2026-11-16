import {Outlet} from "react-router-dom";
import {Header} from "../Header.tsx";

export const Layout = () => {
    return(
        <>
        <Header />
            <main>
                <Outlet />
            </main>
            <footer>© 2025 Kinopoisk Demo · Data courtesy of TMDB.</footer>
        </>
    )

}