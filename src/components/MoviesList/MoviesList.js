import {NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";

import {StarRating} from "../StarRating/StarRating";
import {getMovieId} from "../../store";
import {Genre} from "../Genre/Genre";
import {genreFilter} from "../../helpers";
import './MoviesList.css'

const MoviesList = ({movie}) => {
    const {id, title, genre_ids, overview, release_date, vote_average, poster_path, vote_count} = movie;

    const {genres} = useSelector(state => state.genres);

    const dispatch = useDispatch();

    const genreFiltered = genreFilter(genres, genre_ids);

    const onclick = () => {
      dispatch(getMovieId(id))
    }

    return (
        <div className='movies_list_card'>
            <NavLink to={`/movies/movie/${id}`}>
                <img  onClick={onclick}
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`}
                alt={title}
            />
            </NavLink>
            <div className='star_rating'><StarRating rate={vote_average}/><span className='vote_count'>{vote_count}</span></div>
                <h2>{title}</h2>
                <div className='movies_list_genres'>
                    {genreFiltered.map(genre => <Genre key={genre.id} genre={genre}/>)}
                </div>
                <p>{release_date}</p>
                <p className='movies_list_card-overview'>{overview}</p>
        </div>
    );
};

export {MoviesList};

