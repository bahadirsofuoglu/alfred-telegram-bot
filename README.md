# alfred-telegram-bot
Alfred is a telegram bot. He was written with the Telegraf library. You can send you up-to-date news or send you the weather in the city you want. For now, he can only reply in Turkish. English version will be released in the future.
- [Alfred Demo](https://t.me/alfred_test1_bot)
- [Telegraf Documentation](https://telegraf.js.org/)

```sh
$ git clone https://github.com/bahadirsofuoglu/alfred-telegram-bot.git
$ cd alfred-telegram-bot
$ npm install
```
### To Work Locally
We are using 2 bots for this project. Our first bot works locally. The second bot is our actual bot that we will deploy. You must create an .env file within the project. Then you have to follow the steps below. You will need to get api keys for news, weather and telegram bot.
- [Get Telegram Bot Token](https://t.me/botfather)
- [Get News API Key](https://newsapi.org/)
- [Get Weather API Key](https://openweathermap.org/api)
##### Setup .ENV File && Run Project:
```sh
TELEGRAM_BOT_TOKEN_LOCAL=<YOUR-TELEGRAM-BOT-TOKEN>
NEWS_API_KEY=<YOUR-NEWS-API-KEY>
WEATHER_API_KEY=<YOUR-WEATHER-API-KEY>
```
```sh
$ npm run serve
```
### Deploy
I used telegraf's micro-bot library to deploy the bot. I chose Heroku because it was free. I mentioned that we use 2 bots. We need to define the token information of the bot we want to deploy to heroku.
Note: The micro-bot uses the values BOT_TOKEN and BOT_DOMAIN. Do not forget to add them with these names.
- [Heroku Node.js Documentation](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
##### Setup Heroku Config Vars:
![](https://firebasestorage.googleapis.com/v0/b/alfred-telegram-bot.appspot.com/o/herokuconfig.png?alt=media&token=2ba31714-be86-475f-925e-048a3914cc93)
```sh
$ heroku login
$ npm run deploy
```

![](https://media.giphy.com/media/opkBx9TikuQbS/giphy.gif)
