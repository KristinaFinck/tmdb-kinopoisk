import {Route, Routes} from "react-router-dom";
import {PATH} from "./common"
import {Header} from "./components/Header.tsx";
import {MainPage,FilteredMoviesPage, CategoryMoviesPage, SearchPage, FavoritesPage} from "./pages";
import {Layout} from "./components/Layout/Layout.tsx";


function App() {
  return (

      <Routes>
      <Route element={<Layout />}>
          <Route path="/" element={<MainPage/>} />
          <Route path={PATH.CATEGORY_MOVIES} element={<CategoryMoviesPage/>} />
          <Route path={PATH.SEARCH} element={<SearchPage/>} />
          <Route path={PATH.FILTERED_MOVIES} element={<FilteredMoviesPage/>} />
          <Route path={PATH.FAVORITES} element={<FavoritesPage/>} />
      </Route>
      </Routes>

  )
}

export default App
