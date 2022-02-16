import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {MoviesList, Pagination} from "../../components";
import {getAllMovies, getAllMoviesByGenre} from "../../store";
import "./MoviesPage.css";

const MoviesPage = () => {
    const {
        movies: {movies, currentPage, status, error, totalPages},
        movieSorted: {moviesSortedByGenre, genreId, currentPageSorted}
    } = useSelector(state => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies(currentPage))
        dispatch(getAllMoviesByGenre({genreId,currentPageSorted}))
    }, [currentPage, genreId, currentPageSorted])

    return (
        <div className='movies_page'>
            {status === 'pending' && <h1>LOADING...</h1>}
            {error && <h2>{error}</h2>}
            <div className='movies_list_wrap'>
                {
                    genreId ?
                    moviesSortedByGenre.map(movie => <MoviesList key={movie.id} movie={movie}/>)
                        :
                    movies.map(movie => <MoviesList key={movie.id} movie={movie}/>)
                }
            </div>
            <Pagination totalPages={totalPages}/>
        </div>
    );
};

export {MoviesPage};