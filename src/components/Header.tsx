import {PATH} from "../common"
import {NavLink} from "react-router-dom";

export const Header = () => {
    return(
        <header>
            <nav>
                <NavLink to={PATH.MAIN}
                         className={({ isActive }) => isActive ? "active" : ""}
                end>
                    Main
                </NavLink>

                <NavLink to={PATH.CATEGORY_MOVIES}
                         className={({ isActive }) => isActive ? "active" : ""}>
                    Category Movies
                </NavLink>
                <NavLink to={PATH.SEARCH}
                         className={({ isActive }) => isActive ? "active" : ""}>
                    SearchPage
                </NavLink>
                <NavLink to={PATH.FAVORITES}
                         className={({ isActive }) => isActive ? "active" : ""}>
                    FavoritesPage
                </NavLink>
                <NavLink to={PATH.FILTERED_MOVIES}
                         className={({ isActive }) => isActive ? "active" : ""}>
                    FilteredPage
                </NavLink>
            </nav>
        </header>
    )
}