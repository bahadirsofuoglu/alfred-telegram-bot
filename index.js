const { Telegraf } = require('telegraf')
require('dotenv').config()
const { fetchWeather } = require('./function/weather.js')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start(ctx => ctx.reply('Merhaba'))

bot.on('photo', ctx => ctx.reply('Fena değil'))
bot.hears('merhaba alfred', ctx =>
  ctx.reply(`Merhaba Efendi ${ctx.from.first_name}`)
)
bot.command('havadurumu', async ctx => {
  cityName = ctx.message.text.replace('/havadurumu ', '')
  console.log(cityName)
  const weather = await fetchWeather(cityName)
  console.log(weather.data)
  ctx.reply(
    ` Efendi ${ctx.from.first_name} ${cityName} şehrinde hava durumu şöyle:
      Sıcaklık: ${weather.data.main.temp}
      Hissedilen Sıcaklık: ${weather.data.main.feels_like}
      Nem: ${weather.data.main.humidity} 
      Açıklama: ${weather.data.weather[0].description} 
      (öhöm pardon bazen İngilizceye kaçabiliyorum)`
  )
})
bot.use(async ctx => {
  const message = ctx.message.text
  if (message === message.toUpperCase()) {
    ctx.reply(`Efendi ${ctx.from.first_name} lütfen biraz sakin olalım`)
  }
})
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
