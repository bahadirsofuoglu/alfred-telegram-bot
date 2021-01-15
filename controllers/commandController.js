const { fetchWeather } = require('../functions/weather.js')
exports.weather = async ctx => {
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
}
