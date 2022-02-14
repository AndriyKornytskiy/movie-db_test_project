import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {MoviesList, Pagination} from "../../components";
import {getAllMovies} from "../../store";
import "./MoviesPage.css";

const MoviesPage = () => {
    const {movies, status, error, totalPages, currentPage} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies(currentPage))
    },[currentPage, dispatch])

    return (
        <div className='movies_page'>
            {status === 'pending' && <h1>LOADING...</h1>}
            {error && <h2>{error}</h2>}
            <div className='movies_list_wrap'>
                {movies.map(movie => <MoviesList key={movie.id} movie={movie}/>)}
            </div>
            <Pagination totalPages={totalPages}/>
        </div>
    );
};

export {MoviesPage};