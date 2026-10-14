import {MainPage} from "./pages/MainPage/MainPage.tsx";
import {Route, Routes} from "react-router-dom";
import {PATH} from "./common/constants/paths.ts"
import {CategoryMoviesPage} from "./pages/CategoryMoviesPage/CategoryMoviesPage.tsx";


function App() {
  return (
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path={PATH.CATEGORY_MOVIES} element={<CategoryMoviesPage/>} />
      </Routes>
  )
}

export default App
