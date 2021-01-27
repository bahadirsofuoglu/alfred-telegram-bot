const news = require('../../../helpers/news')
const mockRandom = require('jest-mock-random')

const axios = require('axios')
jest.mock('axios')

describe('Testing News api', () => {
  test('is this a function', () => {
    expect(typeof news.fetchNews).toBe('function')
  })
  test('Should be return status ok!', async () => {
    axios.get.mockResolvedValue({
      data: {
        status: 'ok'
      }
    })
    const newsResponse = await news.fetchNews()
    expect(newsResponse.data.status).toEqual('ok')
  })
  test('If throw error', async () => {
    axios.get.mockReturnValue(undefined)
    const catchResponse = await news.fetchNews()
    expect(catchResponse).toEqual(undefined)
  })
  test('RandomNumber function testing', async () => {
    const spyRandomNumber = jest.spyOn(Math, 'random')
    const randomNumber = await news.randomNumber(0, 5)

    expect(randomNumber).toBeGreaterThanOrEqual(0)
    expect(randomNumber).toBeLessThanOrEqual(5)
    expect(spyRandomNumber).toHaveBeenCalled()
  })
})
