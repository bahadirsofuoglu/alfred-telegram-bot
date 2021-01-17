require('dotenv').config()
const { NODE_ENV, TELEGRAM_BOT_TOKEN_LOCAL } = process.env

const { Composer } = require('micro-bot')
const { Telegraf } = require('telegraf')

const commands = require('./controllers/commands')
const hears = require('./controllers/hears')
const use = require('./controllers/use')

const bot =
  NODE_ENV === 'local' ? new Telegraf(TELEGRAM_BOT_TOKEN_LOCAL) : new Composer()

bot.start(ctx => {
  ctx.reply(
    'Merhaba Ben Alfred !alfred komutunu kullanarak benden yardım isteyebilirsiniz o zamana kadar mutfakta olacağım'
  )
})

bot.on('photo', ctx => ctx.reply('Fena değil'))

bot.hears('Merhaba alfred', hears.hello)
bot.hears('!alfred', hears.alfred)

bot.command('havadurumu', commands.weather)
bot.command('haberler', commands.news)

bot.use(use.upperCaseControl)

if (NODE_ENV === 'local') {
  bot.catch((err, ctx) => {
    console.log(`Ooops, encountered an error for ${ctx.updateType}`, err)
  })
  bot.launch()
} else {
  module.exports = bot
}
