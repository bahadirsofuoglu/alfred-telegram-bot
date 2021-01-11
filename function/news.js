const axios = require('axios')

const fetchNews = async () => {
  try {
    return await axios.get(
      `http://newsapi.org/v2/top-headlines?country=tr&apiKey=${process.env.NEWS_API_KEY}`
    )
  } catch (error) {
    console.error(error)
  }
}
module.exports = {
  fetchNews
}
