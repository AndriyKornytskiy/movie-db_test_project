import './MoviesDetails.css'

const MoviesDetails = ({movieDetails}) => {
    const {
        poster_path,
        backdrop_path,
        budget,
        genres,
        homepage,
        original_title,
        overview,
        release_date,
        revenue,
        runtime,
        vote_average,
        vote_count,
        tagline,
    } = movieDetails;

    return (
        <div className='info_wap'>
            <div className='info'>
                <div>
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_face${poster_path}`} alt={original_title}/>
                </div>
                <div>
                    <table className='info_table'>
                        <tbody>
                            <tr>
                                <td><h2>Rating</h2>:</td>
                                <td><span>{vote_average}</span> <i>({vote_count})</i>
                                </td>
                            </tr>
                            <tr>
                                <td><h2>Motto</h2>:</td>
                                <td>{tagline}</td>
                            </tr>
                            <tr>
                                <td><h2>Release date</h2>:</td>
                                <td>{release_date}</td>
                            </tr>
                            <tr>
                                <td><h2>Genres</h2>:</td>
                                <td>
                                    <span>Боевики</span>
                                    <span>Приключения</span>
                                    <span>Фэнтези</span>
                                    <span>Зарубежные</span>
                                </td>
                            </tr>
                            <tr>
                                <td><h2>Runtime</h2>:</td>
                                <td>{runtime} min.</td>
                            </tr>
                            <tr>
                                <td><h2>Budget</h2>:</td>
                                <td><span>{budget} $</span>
                                </td>
                            </tr>
                            <tr>
                                <td><h2>Revenue</h2>:</td>
                                <td><span>{revenue} $</span>
                                </td>
                            </tr>
                            <tr>
                                <td><h2>Homepage</h2>:</td>
                                <td>
                                    <a className='home_page' href={homepage} target={'_blank'}>website</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='info_overview'>
                <h2>What is "{original_title}" about?</h2>
                <p>{overview}</p>
            </div>
            <div className='second_img'>
                <img src={`https://www.themoviedb.org/t/p/w600_and_h900_face${backdrop_path}`} alt=""/>
            </div>
        </div>
    );
};

export {MoviesDetails};