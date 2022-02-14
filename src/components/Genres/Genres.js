import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {getAllGenres} from "../../store";
import {Genre} from "../Genre/Genre";
import './Genres.css';

const Genres = () => {
    const dispatch = useDispatch();

    const {genres} = useSelector(state => state.genres);

    useEffect(() => {
        dispatch(getAllGenres())
    },[])

    return (
        <div className='genres'>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};