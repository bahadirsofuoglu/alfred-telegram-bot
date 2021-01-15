exports.hello = ctx => {
  ctx.reply(`Merhaba Efendi ${ctx.from.first_name}`)
}
exports.alfred = ctx => {
  ctx.reply(
    ` Merhaba Efendi ${ctx.from.first_name} acıktınız mı ? Günlük raporu almak isterseniz şunları kullanabilirsiniz:
     Hava Durumu: /havadurumu şehir_ismi
     Haberler: /haberler 
yakında daha detaylı bir rapor sunabileceğim..`
  )
}
