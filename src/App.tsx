import {MainPage} from "./pages";
import {Route, Routes} from "react-router-dom";
import {PATH} from "./common"
import {Header} from "./components/Header.tsx";
import {FilteredMoviesPage, CategoryMoviesPage, SearchPage, FavoritesPage} from "./pages";


function App() {
  return (
      <>
      <Header/>
      <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path={PATH.CATEGORY_MOVIES} element={<CategoryMoviesPage/>} />
          <Route path={PATH.SEARCH} element={<SearchPage/>} />
          <Route path={PATH.FILTERED_MOVIES} element={<FilteredMoviesPage/>} />
          <Route path={PATH.FAVORITES} element={<FavoritesPage/>} />
      </Routes>
      </>
  )
}

export default App
