const axios = require('axios')

const fetchNews = async () => {
  try {
    return await axios.get(
      `http://newsapi.org/v2/top-headlines?country=tr&apiKey=${process.env.NEWS_API_KEY}`,
      { params: { category: 'sport' } }
    )
  } catch (error) {
    console.error(error)
  }
}

const randomNews = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
module.exports = {
  fetchNews,
  randomNews
}
