const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!";
client.login("NjMwNTE2NjM0ODE3Mzk2NzQ2.XZpctw.73Gh1e4bM8m9kTEkAJ3PumsGyZg")

client.on('ready', () => {
  let rotate = 0;
    setInterval(function() {
        if(rotate === 0) {
            client.user.setActivity(`𝙉𝘼𝙎𝘼 𝙥𝙪𝙗𝙡𝙞𝙘 💊`, {type: "Streaming", url: 'https://www.twitch.tv/rthsrf'});
            rotate = 1;       
        } else if(rotate === 1){
            client.user.setActivity(`💊 BOT PUB 💊`, {type: "Streaming", url: 'https://www.twitch.tv/rthsrf'});
            rotate = 2;
        } else if(rotate === 2){
            client.user.setActivity(`https://discord.gg/UDrHudA`, {type: "Streaming", url: 'https://www.twitch.tv/rthsrf'});
            rotate = 0;
         random = Math.floor(Math.random() * 7) + 1;
        } }, 10 * 500)
})
