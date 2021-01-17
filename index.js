const { Composer } = require('micro-bot')
require('dotenv').config()

const commands = require('./controllers/commands')
const hears = require('./controllers/hears')
const bot = new Composer()

bot.start(ctx => {
  ctx.reply(
    'Merhaba Ben Alfred /alfred komutunu kullanarak benden yardım isteyebilirsiniz o zamana kadar mutfakta olacağım'
  )
})
bot.on('photo', ctx => ctx.reply('Fena değil'))

bot.hears('merhaba alfred', hears.hello)
bot.hears('!alfred', hears.alfred)

bot.command('havadurumu', commands.weather)
bot.command('haberler', commands.news)

bot.use(ctx => {
  try {
    if (ctx.message.text) {
      const message = ctx.message.text
      if (message === message.toUpperCase()) {
        ctx.reply(`Efendi ${ctx.from.first_name} lütfen biraz sakin olalım`)
      }
    }
  } catch (error) {
    console.log(console.error())
  }
})
module.exports = bot

// todo: bot.catch will add to project for try-catch
/* bot.catch((err, ctx) => {
  console.log(`Ooops, encountered an error for ${ctx.updateType}`, err)
}) */
