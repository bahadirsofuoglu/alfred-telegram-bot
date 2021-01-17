exports.upperCaseControl = ctx => {
  if (ctx.message.text) {
    const message = ctx.message.text
    if (message === message.toUpperCase()) {
      ctx.reply(`Efendi ${ctx.from.first_name} lütfen biraz sakin olalım`)
    }
  }
}
