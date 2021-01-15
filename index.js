const { Telegraf } = require('telegraf')
require('dotenv').config()
const {
  GOOGLE_CLOUD_PROJECT_ID,
  TELEGRAM_BOT_TOKEN,
  GOOGLE_CLOUD_REGION
} = process.env
const commands = require('./controllers/commands')

const bot = new Telegraf(TELEGRAM_BOT_TOKEN)

bot.start(ctx => {
  ctx.reply(
    'Merhaba Ben Alfred /alfred komutunu kullanarak benden yardım isteyebilirsiniz o zamana kadar mutfakta olacağım'
  )
})

bot.on('photo', ctx => ctx.reply('Fena değil'))

bot.hears('merhaba alfred', ctx =>
  ctx.reply(`Merhaba Efendi ${ctx.from.first_name}`)
)

bot.hears('selamın aleykum', ctx =>
  ctx.reply(`Aleykum Selam comar Efendi ${ctx.from.first_name}`)
)
bot.hears('!alfred', ctx => {
  ctx.reply(
    ` Merhaba Efendi ${ctx.from.first_name} acıktınız mı ? Günlük raporu almak isterseniz şunları kullanabilirsiniz:
     Hava Durumu: /havadurumu şehir_ismi
     Haberler: /haberler 
yakında daha detaylı bir rapor sunabileceğim..`
  )
})

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
/* bot.catch((err, ctx) => {
  console.log(`Ooops, encountered an error for ${ctx.updateType}`, err)
}) */
bot.launch()
bot.telegram.setWebhook(
  `https://${GOOGLE_CLOUD_REGION}-${GOOGLE_CLOUD_PROJECT_ID}.cloudfunctions.net/${process.env.FUNCTION_TARGET}` //FUNCTION_TARGET is reserved Google Cloud Env
)
exports.alfredTelegramBot = (req, res) => {
  bot.handleUpdate(req.body, res)
}
/* exports.alfredTelegramBot = functions.https.onRequest((req, res) =>
  bot.handleUpdate(req.body, res)
) */
