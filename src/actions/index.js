import axios from 'axios';

const API_KEY = '677da53de8471fbad0e1b0191b8b7562';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchweather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  return{
    type: FETCH_WEATHER,
    payload: request
  };
}
