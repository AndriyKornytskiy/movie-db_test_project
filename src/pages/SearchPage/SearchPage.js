import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {getSearchedMovies} from "../../store";
import {MoviesList, Pagination} from "../../components";
import './SearchPage.css';

const SearchPage = () => {
    const {searchedMovies, searchedValue, searchedMoviesPage, status, error, totalPages} = useSelector(state => state.search);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSearchedMovies({searchedValue, searchedMoviesPage}))
    }, [searchedValue, searchedMoviesPage]);

    return (
        <div className='search_page'>
            <div className='search_list_wrap'>
                {status === 'pending' && <h1>LOADING...</h1>}
                {error && <h2>{error}</h2>}
                {
                    searchedMovies && searchedMovies.map(movie => <MoviesList key={movie.id} movie={movie}/>)
                }
            </div>
            <Pagination totalPages={totalPages}/>
        </div>
    );
};

export {SearchPage};