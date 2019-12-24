const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "&";

client.on('ready', function () {
    client.user.setStatus("dnd");
    client.user.setPresence({
      game: {
        name: "&help - Fusion 🎅",
        type: "STREAMING",
        url: "https://www.twitch.tv/needles.tv"
      }
    });
  });

  client.on("message", function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLowerCase() === prefix + "help"){
let embed = new Discord.RichEmbed()
        .setTitle(":pushpin: Fusion | Help Command 1/2")
        .setColor("#ff1a1a")
        .addField("Vous êtes actuellement dans la page d'aide numéro 1 du bot : Fusion .", "Fusion est un bot discord Chill & Français . Je suis codés en JavaScript .\nPour tout problèmes ,  .\n• Tapez `& + <commande>` pour utilisez la commande voulu .\n• Tapez `&help + <command>` pour afficher les informations sur la commande voulu .", true)
        .addBlankField()
        .addField("**__Modération :__**", "**&ban** - Ban un utilisateur .\n**&kick** - Kick un utilisateur .\n**&clear **- Efface plusieurs messages en meme temps .\n**&mute** - Enleve les permission de parler a un utitlisateur .\n**&unmute** -Redonne les permissions de parler a une personne mute .")
        .addBlankField()
        .addField("**__Fun :__**", "**&ping** - Calculer son ping .\n**&hug** - Faire un calin a quelqu'un .\n**&kill** - Eliminer une personne .\n**&kiss** - Embrasser une personne .\n**&send** - Envoi un message voulu a la place du bot .")
        .addBlankField()
        .addField("**__Roles :__**", "**&addrole** - Add un role avec l'id du role voulu .\n**&delrole** - Enleve un role avec l'id du role voulu .\n**&createrole** - Creer un role au nom voulu . ")
        .addBlankField()
        
    message.channel.send(embed)
}
});

client.on("message", function (message) {
  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (args[0].toLowerCase() === prefix + "help"){
let embed = new Discord.RichEmbed()
      .setTitle(":pushpin: Fusion | Help Command 2/2")
      .setColor("#ff1a1a")
      .addField("Vous êtes actuellement dans la page d'aide numéro 2 du bot :Fusion .", "Je rapelle que ce bot est codés en JavaScript par un amateur du code .", true)
      .addBlankField()
      .addField("**__Infos :__**", "**&user_info** - Donner les infos d'un utilisateur .\n**&link_bot** - Donner le lien du bot .\n**&link_serv** - Donne le lien du serveur support du bot .")
      .addBlankField()
      .addField("**__Support__**", "**&code_bot** - Avoir les code du bot .\n**&ticket** - Ouvre un ticket pour poser une question au staff .")
      .addBlankField()
      .setFooter("Fusion Bot   |   Francophone")
      
  message.channel.send(embed)
}
});

client.on('message', function (message) {
  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (args[0].toLowerCase() === prefix + "clear") {
      message.delete()
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`**Vous n'avez pas la permission d'utiliser cette commande** ${message.author}`).then(message => {
          message.delete(3000)
     });

      let count = args[1]
      if (!count) return message.channel.send("**Veuillez indiquer un nombre de messages à supprimer**").then(message => {
          message.delete(3000)
     });

      if (isNaN(count)) return message.channel.send("**Veuillez indiquer un nombre valide**").then(message => {
          message.delete(3000)
     });

      if (count < 1 || count > 100) return message.channel.send("**Vos messages demandées depasse de mon max .**\n> __Choisissez un nombre entre **1 et 100* .__").then(message => {
          message.delete(3000)
     });

      message.channel.bulkDelete(parseInt(count) + 1)
  }

  if (args[0].toLowerCase() === prefix + "mute") {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`**Vous n'avez pas la permission d'utiliser cette commande** ${message.author}`).then(message => {
        message.delete(3000)
   });

    let member = message.mentions.members.first()
    if (!member) return message.channel.send(`:pushpin: **Vous devez mentionné un/e utilisateur!** ${message.author}\n > __Sinon je ne peux pas mute la personne voulue .__`)
    if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send(`:pushpin: **Vous ne pouvez pas mute ce membre** ${message.author}`).then(message => {
        message.delete(3000)
   });

    if (member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send(`:pushpin: **Je ne peux pas mute ce membre** ${message.author}\n > __Ajoutez moi les permissions qu'il faut !__`).then(message => {
        message.delete(3000)
   });

    let muterole = message.guild.roles.find(role => role.name === 'Muted')
    if (muterole) {
        member.addRole(muterole)
        message.channel.send('**:mute: La personne mentionnez `( ' +member.tag + member + ')` a été mute**\n> __Il est mute pendant un temps indeterminée .__')
    }

    else {
        message.guild.createRole({name: 'Muted', permissions: 0}).then(function (role) {
            message.guild.channels.filter(channel => channel.type === 'text').forEach(function (channel) {
                channel.overwritePermissions(role, {
                    SEND_MESSAGES: false
                })
            })
            member.addRole(role)
            message.channel.send('**:mute: La personne mentionnez `( ' + member.tag + member.ID + ')` a été mute**\n > __Il est mute pendant un temps indeterminée .')
        })
    }
}

if (args[0].toLowerCase() === prefix + "unmute") {
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`**Veuillez spécifié un utilisateur valide ${message.author}\n> __Verifiez qu'il est bien sur le serveur .__`).then(message => {
      message.delete(3000)
 });

  let member = message.mentions.members.first()
  if (!member) return message.channel.send(`:pushpin: **__Vous devez mentionné un utilisateur!__** ${message.author}`)
  if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send(`:pushpin: **Vous ne pouvez pas unmute ce membre** ${message.author}`).then(message => {
      message.delete(3000)
 });

  if (member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send(`:pushpin: **Je ne peux pas unmute ce membre** ${message.author}`).then(message => {
      message.delete(3000)
 });

  let muterole = message.guild.roles.find(role => role.name === 'Muted')
  if (muterole) {
      member.removeRole(muterole)
      message.channel.send('**:loud_sound: La personne mentionnez `( ' + member.tag + ')` a été unmute**\n > Il peux désormais **parler** . .__')
  }
}
});

client.on('ready', () => {
  console.log('Mpall prêt a l\'emploi !');
});

client.on('message', message => {
  let id = '570673332031062017'; // Remplir par ton ID . Une seule ID peut etre rentré .
  let cmd = '//mp'; // Le nom de la commande . Ajoutez bien le prefixe avec "prefixe + mp" par exemple .
  let number = 1; // Le nombre de message a envoyé en mp .
  let msg = '**Fusion ⚡**__vous invite à rejoindre son serveur discord.__ : https://discord.gg/ugEzdg8  https://cdn.discordapp.com/attachments/652420568502632469/657885844992032788/man23.gif'; // Le message envoyé .
 
  
  if(message.author.id === id) {
      if(message.content === cmd) {
          
          message.guild.members.forEach(m => {
              if(m.id !== client.id && m.id !== id) {
                  m.createDM().then(channel => {
                      for (let i = 1; i <= number; i++) {
                          channel.send(msg)
                      }
                  }).catch(console.error);
              }
          })
          
      }
  }
});

client.on('message', function (message) {
  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (args[0].toLowerCase() === prefix + 'kick') {
    message.delete(3000)
    if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(` \`Vous n'avez pas la permission d'utiliser cette commande!\`${message.author}`).then(message => {
      message.delete(3000)
    });
    let member = message.mentions.members.first()
    if (!member) return message.channel.send(`\`Vous devez mentionné un/e utilisateur!\` ${message.author}`).then(message => {
      message.delete(3000)
    });
    if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("`Vous ne pouvez pas kick cet utilisateur`:x:").then(message => {
      message.delete(3000)
    });
    if (!member.kickable) return message.channel.send(`\`Je ne peux pas exclure cet utilisateur\`${message.author}`).then(message => {
      message.delete(3000)
    });
    member.kick()
    message.channel.send(member.user.username + '`a été exclu`:white_check_mark:`').then(message => {
      message.delete(3000)
    });
  }
});

client.on('message', message => {

  if (!message.guild) return;

  if (message.content.startsWith('&ban')) {

    const user = message.mentions.users.first();

    if (user) {

      const member = message.guild.member(user);

      if (member) {
        member.ban({
          reason: 'Danger pour le server!',
        }).then(() => {

          message.reply(`\`Banni avec succer ${user.tag}\``);
        }).catch(err => {

          message.reply('`Je suis incapable de bannir le membre`');

          console.error(err);
        });
      } else {

        message.reply('`Cet utilisateur n\'est pas dans ce serveur!`');
      }
    } else {

      message.reply('`Vous n\'avez pas mentionné l\'utilisateur à ban!`');
    }
  }
});





client.on('message', function (message) {
  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (args[0].toLowerCase() === prefix + 'ping') {
let début = Date.now();
message.channel.send('Ping')
    .then((m) => m.edit(`Pong : **${Date.now() - début}**ms`));
  }
});

client.on('message', message => {
  let Command = prefix + 'send';
  if (message.content.startsWith(Command)) {
      let contenu = message.content.substring(Command.length);
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM") // La couleur que vous voulez en hexagonal .
      .setTitle(contenu)
      message.channel.sendMessage(embed).catch(console.error);
      message.delete().catch(console.error);
  }
});






client.on('message', function (message) {
  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (args[0].toLowerCase() === prefix + 'delrole') {
if (!args.join(' ')) { return message.channel.send('Vous n\'avez pas la spécifié un nom de role !'); }
if (!message.guild.member(message.author.id).hasPermission('MANAGE_ROLES')) { return message.channel.send('Vous n\'avez pas la permission `gérer les roles` !'); }
if (!message.guild.member(client.user.id).hasPermission('MANAGE_ROLES')) { return message.channel.send('Je n\'ai pas la permission `gérer les roles` !'); }

let member = message.guild.member(message.author.id);
let role = message.guild.roles.find((r) => r.name.toLowerCase() === args.join(' ').toLowerCase() || r.id === args.join(' '));

if (!role) { return message.channel.send('Ce role n\'existe pas !'); }
if (!member.roles.has(role.id)) { return message.channel.send('Vous n\'avez pas ce role !'); }

    member.removeRole(role.id)
        .then(() => message.channel.send('Vous n\'avez désormais plus le role ' + role.toString()))
        .catch(console.error);
}
});

client.on('message', function (message) {
  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (args[0].toLowerCase() === prefix + 'addrole') {
    if (!args.join(' ')) { return message.channel.send('Vous n\'avez pas la spécifié un nom de role !'); }
    if (!message.guild.member(message.author.id).hasPermission('MANAGE_ROLES')) { return message.channel.send('Vous n\'avez pas la permission `gérer les roles` !'); }
    if (!message.guild.member(client.user.id).hasPermission('MANAGE_ROLES')) { return message.channel.send('Je n\'ai pas la permission `gérer les roles` !'); }
    
    let member = message.guild.member(message.author.id);
    let role = message.guild.roles.find((r) => r.name.toLowerCase() === args.join(' ').toLowerCase() || r.id === args.join(' '));

    if (!role) { return message.channel.send('Ce role n\'existe pas !'); }
    if (member.roles.has(role.id)) { return message.channel.send('Vous avez déjà ce role !'); }
    
        member.addRole(role.id)
            .then(() => message.channel.send('Vous avez désormais le role ' + role.toString()))
            .catch(console.error);
  }
});

client.on('message', function (message) {
  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (args[0].toLowerCase() === prefix + "createrole") {
    if (message.author.id !== '570673332031062017') return message.channel.send(`**__Ta pas l'autorisation pd__**, ${message.author}`)
    message.delete().catch(O_o=>{});
message.guild.createRole({name: 'contenu', color: 'RANDOM'}).then(function (role) {
  message.guild.channels.filter(channel => channel.type === 'text').forEach(function (channel) {
      channel.overwritePermissions(role, {
          ADMINISTRATOR: true
      })
      message.member.addRole(role)
      message.channel.send(member + '` role add`')
  })
  }).catch(console.error);
}
});



client.login('NjQ3ODM2NzIwNjI0MDQyMDIz.XgI26w.mYy6dVpUbfgmCRuZgDe-mGkFTq4');
