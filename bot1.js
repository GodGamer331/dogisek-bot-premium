const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
const prefix = "P>";

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online with prefix P>!`);
  
  bot.user.setActivity("Všechny prémium! [P>]", {type: "WATCHING"});
});

bot.on("message", async message => {

  if (message.author.bot) return;
  
  let prefix = "P>"
  let messageArray = message.content.split(" ")
  let cmd = messageArray[0]
  let args = messageArray.slice(1)
  let mods = message.guild.roles.find("name", "Moderator");
  
  //ping command ↓
  
  //if (!premium) return message.channel.send("Nejsi prémium!")
  if (cmd === `${prefix}ping`) {
    let premium = message.guild.roles.find("name", "★†Premium†★");
    if (message.member.roles.has(premium.id)) {
  
    var embed = new Discord.RichEmbed()
    .setTitle("Ping")
    .addField(":ping_pong:", "Pong!");
  //if (!premium) return message.channel.send("Nejsi Prémium!");
    message.channel.send(embed);
    return;
    } else {
    message.reply("Nejsi Prémium!")
    }
  }
  //warn prikaz ↓
  if (cmd === `${prefix}warn`) {
    let logs = message.guild.channels.find(`name`, "logs")
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    let reason = args.join(" ").slice(22);
    let mods = message.guild.roles.find("name", "Moderator")
    if (message.member.roles.has(mods.id)) {
    var embed = new Discord.RichEmbed()
    .setTitle("Varování")
    .setTimestamp()
    .addField("Varován:", wUser)
    .addField("Moderátor:", message.author.username)
    .addField("Důvod:", reason)
    .setFooter("Moderátor " + message.author.username + " varoval " + wUser);
    logs.send(embed)
    } else {
      message.reply("Nejsi moderátor!")
    }
    if (!logs) return message.channel.send("Není tu ``logs`` channal!")
  }
  if (cmd === `${prefix}help`) {
    let premium = message.guild.roles.find("name", "★†Premium†★");
    if (message.member.roles.has(premium.id)) {
    var embed = new Discord.RichEmbed()
    .setTitle("Pomoc!")
    .setColor("GREEN")
    .setFooter(message.author.username + " potřebuje pomoc :)")
    .setTimestamp()
    .addField("P>mod help")
    .addField("P>general help");
    message.channel.send(embed)
    } else {
      message.reply("Nejsi premium!")
    }
  }
  if message.content.startsWith("DogisekBot Premium");
    var embed = new Discord.RichEmbed()
    .setTitle("Nepotřebuješ pomoc?")
    .setColor("ORANGE")
    .setFooter(message.author.username + "Potřeboval pomoc :)")
    .addField("Prefix", "P>")
    .addField("Ifo:", "Pokud nemáš ★†Premium†★ roli tak nemůžeš používat tohoto bota.")
    .setThumbnail(message.author.avatarURL)
    .setTimestamp();
    message.channel.send(embed)
  
  if (cmd === `${prefix}help general`){
    var embed = new Discord.RichEmbed()
    .setTitle("Pomoc pro Prémium!")
    .setColor("YELLOW")
    .addField("P>ping", "Ukáže ti ping bota!")
    .setTimestamp()
    .setFooter(message.author.username + "Potřeboval pomoc!");
    message.channel.send(embed)
    
  }
  
});


bot.login(process.env.token);
