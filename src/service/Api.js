import axios from 'axios';

const APIKEY = "c27e006988907a335cf5e547e9ab63a8"
const API = "https://api.openweathermap.org/data/2.5/weather"

const fetchWeather = async(city, country) => {
    return await axios.get(`${API}?q=${city},${country}&APPID=${APIKEY}`)
}

export default fetchWeather