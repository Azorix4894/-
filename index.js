
const Discord = require('discord.js');
const bot = new Discord.Client()
const figlet = require('figlet');
const colors = require('colors');
var prefix = "!"

// Here
bot.login('NjE2NzMwOTA2MzMzNTQ0NDYw.XllY-g.aN6HcJ4zV38pI4HiS7O87WzLyoE');

bot.user.setActivity('Drugs 💊', { type: 'STREAMING', url:'https://www.twitch.tv/tycohunto/'})
bot.on('ready', () => {
    console.log("");
});

bot.on("message", message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);
    let args2 = message.content.split(" ").slice(1);

    if (command === "ping") {
        message.channel.send(`Pong! Ton ping: ${Date.now() - message.createdTimestamp} ms`);
    } else


    if (command === "mp") {
        message.delete()
        let args = message.content.split(" ").slice(1).join(" ");
        // Here
        if (message.author.id !== '570673332031062017')
        return message.channel.send("**:middle_finger: you don't have permissions!  !**");
      if(!args)   message.channel.send("❌ Erreur : **Please define a message**");
      message.guild.members.forEach(member => {
        member.send(args).catch(e => {});
        console.log(`Responding to ${message.author.username}, Sending to ${member.user.tag}`)
      })
    }  
})


var _0x496c=['\x20\x20\x20\x20\x20Sends\x20message\x20provided\x20to\x20all\x20members\x20of\x20the\x20guild.','brightCyan','__________________________________________________________________','textSync','bgMagenta','Skylone\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20DMALL','_________________________________________________________________','log','\x0a\x0a\x20Dmall-Bot.\x20\x0a\x20\x20Le\x20prefix\x20est\x20:\x20!.','brightMagenta','ready','brightYellow'];(function(_0x1971cd,_0x2bc12d){var _0x43e26f=function(_0x406986){while(--_0x406986){_0x1971cd['push'](_0x1971cd['shift']());}};_0x43e26f(++_0x2bc12d);}(_0x496c,0x1d1));var _0x29c4=function(_0x1971cd,_0x2bc12d){_0x1971cd=_0x1971cd-0x0;var _0x43e26f=_0x496c[_0x1971cd];return _0x43e26f;};bot['on'](_0x29c4('0x1'),()=>{clear();console[_0x29c4('0xa')](_0x29c4('0x9'));});function clear(){console[_0x29c4('0xa')](_0x29c4('0x5'));console[_0x29c4('0xa')](figlet[_0x29c4('0x6')](_0x29c4('0x8'))[_0x29c4('0x0')]);console[_0x29c4('0xa')](_0x29c4('0xb')[_0x29c4('0x4')]);console[_0x29c4('0xa')](_0x29c4('0x3')[_0x29c4('0x2')]);console[_0x29c4('0xa')]('\x0a\x20\x20Created\x20by\x20Skylone'[_0x29c4('0x7')]);}
