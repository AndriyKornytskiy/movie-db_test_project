import './Genre.css';

const Genre = ({genre}) => {
    return (
        <div className='genre_item'>
            {genre.name}
        </div>
    );
};

export {Genre};