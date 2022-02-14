import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const genresService = {
    getAll: ()=> axiosService.get(`${urls.genres}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`).then(value => value.data)
}