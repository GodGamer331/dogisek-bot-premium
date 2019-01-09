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
});


bot.login(process.env.token);
