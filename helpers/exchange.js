const axios = require('axios')
const fetchExchange = async () => {
  try {
    return await axios.get('https://api.exchangeratesapi.io/latest?base=TRY')
  } catch (error) {
    console.error(error)
  }
}
module.exports = {
  fetchExchange
}
