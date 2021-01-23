const axios = require('axios')
const fetchUsd = async () => {
  try {
    return await axios.get('https://api.exchangeratesapi.io/latest?base=USD')
  } catch (error) {
    console.error(error)
  }
}
const fetchEuro = async () => {
  try {
    return await axios.get('https://api.exchangeratesapi.io/latest?base=EUR')
  } catch (error) {
    console.error(error)
  }
}
const fetchPound = async () => {
  try {
    return await axios.get('https://api.exchangeratesapi.io/latest?base=GBP')
  } catch (error) {
    console.error(error)
  }
}
module.exports = {
  fetchUsd,
  fetchEuro,
  fetchPound
}
