import {Outlet} from "react-router-dom";
import {Header} from "../Header.tsx";
import {useEffect, useState} from "react";

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