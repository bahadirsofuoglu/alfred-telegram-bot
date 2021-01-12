const axios = require('axios')
const { WEATHER_API_KEY } = process.env
const fetchWeather = async cityName => {
  try {
    return await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${WEATHER_API_KEY}&units=metric`
    )
  } catch (error) {
    console.error(error)
  }
}
module.exports = {
  fetchWeather
}
