const exchange = require('../../helpers/exchange')
const axios = require('axios')
jest.mock('axios')

describe('Exhange fetch USD', () => {
  test('is this a function', () => {
    expect(typeof exchange.fetchUsd).toBe('function')
  })
  test('Return USD data', async () => {
    axios.get.mockResolvedValue({
      data: {
        base: 'USD'
      }
    })
    const exchengeUsdResponse = await exchange.fetchUsd()
    expect(exchengeUsdResponse.data.base).toEqual('USD')
  })
  test('If throw error', async () => {
    axios.get.mockReturnValue(undefined)
    const exchengeUsdResponse = await exchange.fetchUsd()
    expect(exchengeUsdResponse).toEqual(undefined)
  })
})

describe('Exhange fetch Euro', () => {
  test('Is this a function', () => {
    expect(typeof exchange.fetchEuro).toBe('function')
  })
  test('return Euro data', async () => {
    axios.get.mockResolvedValue({
      data: {
        base: 'EUR'
      }
    })
    const exchengeUsdResponse = await exchange.fetchEuro()
    expect(exchengeUsdResponse.data.base).toEqual('EUR')
  })
  test('if throw error', async () => {
    axios.get.mockReturnValue(undefined)
    const exchengeUsdResponse = await exchange.fetchEuro()
    expect(exchengeUsdResponse).toEqual(undefined)
  })
})

describe('Exhange fetch Pound', () => {
  test('Is this a function', () => {
    expect(typeof exchange.fetchPound).toBe('function')
  })
  test('return Euro data', async () => {
    axios.get.mockResolvedValue({
      data: {
        base: 'GBP'
      }
    })
    const exchengeUsdResponse = await exchange.fetchPound()
    expect(exchengeUsdResponse.data.base).toEqual('GBP')
  })
  test('if throw error', async () => {
    axios.get.mockReturnValue(undefined)
    const exchengeUsdResponse = await exchange.fetchPound()
    expect(exchengeUsdResponse).toEqual(undefined)
  })
})
