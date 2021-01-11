const axios = require('axios')

const fetchWeather = async cityName => {
  try {
    return await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.WEATHER_API_KEY}`
    )
  } catch (error) {
    console.error(error)
  }
}
module.exports = {
  fetchWeather
}
