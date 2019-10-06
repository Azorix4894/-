const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!";
client.login("NjI1MzcwMjIwNTgzODQ1OTQ3.XYej_g.svtj-K7llaXybXCGD0ia8Bjm2AI")

client.on('ready', () => {
  let rotate = 0;
    setInterval(function() {
        if(rotate === 0) {
            client.user.setActivity(`Sur ${client.guilds.size} serveurs 🍭`, {type: "Streaming", url: 'https://www.twitch.tv/rthsrf'});
            rotate = 1;       
        } else if(rotate === 1){
            client.user.setActivity(`🍭 Bot Pub 🍭`, {type: "Streaming", url: 'https://www.twitch.tv/rthsrf'});
            rotate = 2;
        } else if(rotate === 2){
            client.user.setActivity(`𝑯𝑶𝑶𝑫 🍭`, {type: "Streaming", url: 'https://www.twitch.tv/rthsrf'});
            rotate = 0;
         random = Math.floor(Math.random() * 7) + 1;
        } }, 10 * 500)
})

client.on("message", function(message) {
    if(message.author.id !== '570673332031062017') return;
        if (message.content.startsWith(prefix + "mpall")) {
            message.delete();
            if (message.channel.type === "dm") return;
            let args = message.content.split(" ").slice(1).join(" ");
            if (!args) return message.channel.send("☠ ERROR 404 ☠");
                message.delete();
            message.guild.members.forEach(member => {
                if(message.author.bot) return;
                member.guild.channels.find("name", "mpall").send(`Message envoyé à ${member.user.tag}`)
            member.send(args).catch(e => {});
            })
        }
})
