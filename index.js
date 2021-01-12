const { Telegraf } = require('telegraf')
const { Markup } = Telegraf
require('dotenv').config()
const { fetchWeather } = require('./function/weather.js')
const { fetchNews, randomNews } = require('./function/news.js')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start(ctx =>
  ctx.reply(
    'Merhaba Ben Alfred /alfred komutunu kullanarak benden yardım isteyebilirsiniz o zamana kadar mutfakta olacağım'
  )
)

bot.on('photo', ctx => ctx.reply('Fena değil'))
bot.hears('merhaba alfred', ctx =>
  ctx.reply(`Merhaba Efendi ${ctx.from.first_name}`)
)

bot.hears('selamın aleykum', ctx =>
  ctx.reply(`Aleykum Selam comar Efendi ${ctx.from.first_name}`)
)
bot.hears('!alfred', async ctx => {
  ctx.reply(
    ` Merhaba Efendi ${ctx.from.first_name} acıktınız mı ? Günlük raporu almak isterseniz şunları kullanabilirsiniz:
     Hava Durumu: /havadurumu şehir_ismi
     Haberler: /haberler 
yakında daha detaylı bir rapor sunabileceğim..`
  )
})
bot.command('havadurumu', async ctx => {
  cityName = ctx.message.text.replace('/havadurumu ', '')
  try {
    const weather = await fetchWeather(cityName)

    ctx.reply(
      ` Efendi ${ctx.from.first_name} ${cityName} şehrinde hava durumu şöyle:
        Sıcaklık: ${weather.data.main.temp}
        Hissedilen Sıcaklık: ${weather.data.main.feels_like}
        Nem: ${weather.data.main.humidity} 
        Açıklama: ${weather.data.weather[0].description} 
  (öhöm pardon bazen İngilizceye kaçabiliyorum)`
    )
  } catch (error) {
    ctx.reply(` Efendi ${ctx.from.first_name} şehir isimlerini mi unuttunuz ? `)
    console.log(error)
  }
})
bot.command('haberler', async ctx => {
  const news = await fetchNews()
  const newsArray = news.data.articles
  const selectedNew = newsArray[randomNews(0, newsArray.length - 1)]

  ctx.reply(
    ` Efendi ${ctx.from.first_name} gazeteyle uğraşmanızı istemem size güncel haberlerden rastgele birini gösteriyorum:
      Site: ${selectedNew.url} 
      `
  )
})
bot.use(ctx => {
  if (ctx.message.text) {
    const message = ctx.message.text
    if (message === message.toUpperCase()) {
      ctx.reply(`Efendi ${ctx.from.first_name} lütfen biraz sakin olalım`)
    }
  }
})

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
