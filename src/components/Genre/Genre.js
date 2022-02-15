import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import {getGenreId} from "../../store";
import './Genre.css';

const Genre = ({genre:{id, name}}) => {
    const dispatch = useDispatch();

    const sendGenreId = () => {
        dispatch(getGenreId(id))
    }

    return (
        <Link to={`movies?genres=${name}`} className='genre_item' onClick={sendGenreId}>
            {name}
        </Link>
    );
};

export {Genre};