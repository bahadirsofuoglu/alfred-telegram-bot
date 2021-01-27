const weather = require('../../helpers/weather')
const axios = require('axios')

jest.mock('axios')

describe('Testing Weather api', () => {
  test('is this a function', () => {
    expect(typeof weather.fetchWeather).toBe('function')
  })
  test('Should be cod return 200', async () => {
    axios.get.mockResolvedValue({
      data: {
        cod: 200
      }
    })
    const weatherResponse = await weather.fetchWeather()
    expect(weatherResponse.data.cod).toEqual(200)
  })
  test('If throw error', async () => {
    axios.get.mockReturnValue(undefined)
    const catchResponse = await weather.fetchWeather()
    expect(catchResponse).toEqual(undefined)
  })
})
