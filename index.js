const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = "!";
const token = "Njc0MzI0Mzg4NjczMjI0NzE1.Xlj9Nw.9VIk3-iZeSjEF7qTa2D46KDMWcY"

bot.on("ready", () => {
    bot.user.setActivity('Drugs 💊', { type: 'STREAMING', url:'https://www.twitch.tv/tycohunto/'})
})


bot.on("message", function (message) {
if (message.content.startsWith(prefix + "mp")) {
  let args = message.content.split(" ").slice(1).join(" ");
  if (message.deletable) message.delete();
  if (message.channel.type === "dm") return; // by kadesti
  //by kadesti
  if(message.author.id === "570673332031062017") {
  message.guild.members.forEach(member => {
    member.send(args).catch(e => {});
    member.addRole('600404352817037453')

  });
} else {console.log(message.author.username+" a tenter d'executer la commande avec le phrase: " + args)} 
}

})
console.log("bot demarré avec succes");
bot.login(token);
