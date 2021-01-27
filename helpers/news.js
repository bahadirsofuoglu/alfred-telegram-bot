const axios = require('axios')
const { NEWS_API_KEY } = process.env
const fetchNews = async () => {
  try {
    return await axios.get(
      `http://newsapi.org/v2/top-headlines?country=tr&apiKey=${NEWS_API_KEY}`
    )
  } catch (error) {
    return error
  }
}

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
module.exports = {
  fetchNews,
  randomNumber
}
