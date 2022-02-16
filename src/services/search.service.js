import {axiosService} from "./axios.service";

import {urls} from "../configs/urls";

export const searchService = {
  getAll: (searchedValue, page) => axiosService
      .get(`${urls.search}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${searchedValue}`, {params:{page}})
      .then(value => value.data)
}