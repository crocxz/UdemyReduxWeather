import axios from 'axios';

const API_KEY = 'ad54008c1ef83b8f3ace009676754ea0';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'; // can change string later on, good practice

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url); //ajax request, returns promise

    return {
        type: FETCH_WEATHER,
        payload: request
    };

}
