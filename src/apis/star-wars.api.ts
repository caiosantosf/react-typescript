import axios from 'axios';
import { configs } from '../configs'

// https://star-wars-api-luismar.herokuapp.com
// https://star-wars-api-unifacef.herokuapp.com

const baseURL = configs.apis.starWars ;

export const getFilms = async () => {
    return axios.request({ baseURL, url: `films` })
  }
  
  export const getFilmById = async (id: number) => {
    return axios.request({ baseURL, url: `films/${id}` })
  }
  