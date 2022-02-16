import {Route, Routes, Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

import {MoviesDetailsPage, MoviesPage, SearchPage} from "./pages";
import {Layout} from "./components";
import './App.css';

const App = () => {

    const {darkMode} = useSelector(state => state.theme);

    return (
        <div className={darkMode ? "dark-style" : "light-style"}>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to={`movies?page=`}/>}/>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                    <Route path={'movies/movie/:id'} element={<MoviesDetailsPage/>}/>
                    <Route path={`movies/search`} element={<SearchPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;