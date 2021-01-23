exports.hello = ctx => {
  ctx.reply(`Merhaba Efendi ${ctx.from.first_name}`)
}
exports.howAreYou = ctx => {
  ctx.reply(`İyiyim Efendi ${ctx.from.first_name} siz nasılsınız ?`)
}
exports.alfred = ctx => {
  ctx.reply(
    ` Merhaba Efendi ${ctx.from.first_name} acıktınız mı ? Günlük raporu almak isterseniz şunları kullanabilirsiniz:
     Hava Durumu: /havadurumu şehir_ismi
     Haberler: /haberler 
     Doviz Kurları: /doviz
yakında daha detaylı bir rapor sunabileceğim..`
  )
}
