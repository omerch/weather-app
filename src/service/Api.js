import axios from 'axios';

const APIKEY = "your api key"
const API = "https://api.openweathermap.org/data/2.5/weather"

const fetchWeather = async(city, country) => {
    return await axios.get(`${API}?q=${city},${country}&APPID=${APIKEY}`)
}

export default fetchWeather