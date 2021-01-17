const { Composer } = require('micro-bot')
require('dotenv').config()
const {
  GOOGLE_CLOUD_PROJECT_ID,
  TELEGRAM_BOT_TOKEN,
  GOOGLE_CLOUD_REGION,
  NODE_ENV
} = process.env
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

/* if (NODE_ENV === 'production') {
  bot.telegram.setWebhook(
    `https://${GOOGLE_CLOUD_REGION}-${GOOGLE_CLOUD_PROJECT_ID}.cloudfunctions.net/${process.env.FUNCTION_TARGET}`
  )
  exports.alfredTelegramBot = (req, res) => {
    bot.handleUpdate(req.body, res)
  }
} else {
  bot.launch()
} */

// todo: bot.catch will add to project for try-catch
/* bot.catch((err, ctx) => {
  console.log(`Ooops, encountered an error for ${ctx.updateType}`, err)
}) */
