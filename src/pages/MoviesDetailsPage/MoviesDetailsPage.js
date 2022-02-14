import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {MoviesDetails} from "../../components/MoviesDetails/MoviesDetails";
import {getMovieDetails} from "../../store";

const MoviesDetailsPage = () => {
    const {movieDetails, currentId, error} = useSelector(state => state.movieDetails);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieDetails(currentId))
    },[currentId, dispatch])

    return (
        <div className='movies_page'>
            {error && <h2>{error}</h2>}
            <div>
                <MoviesDetails key={currentId} movieDetails={movieDetails}/>
            </div>
        </div>
    );
};

export {MoviesDetailsPage};