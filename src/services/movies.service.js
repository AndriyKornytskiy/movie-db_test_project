import {axiosService} from "./axios.service";

import {urls} from "../configs/urls";

export const moviesService = {
    getAll: (page) => axiosService
        .get(`${urls.movies}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`, {params: {page}})
        .then(value => value.data),

    getAllByGenre:(genreId, page) => axiosService
        .get(`${urls.movies}?with_genres=${genreId}&api_key=${process.env.REACT_APP_MOVIE_API_KEY}`,{params: {page}})
        .then(value => value.data),

    getByID: (id) => axiosService
        .get(`${urls.singleMovie}/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`)
        .then(value => value.data)
}