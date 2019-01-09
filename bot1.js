const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  
  bot.user.setActivity("Všechny prémium! [P>]", {type: "WATCHING"});
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  let prefix = "P>"
  let cmd = messageArray[0]
  
  if(cmd === `${prefix}help`){
    var embed = new Discord.RichEmbed
    .setTitle("Pomoc!")
    .setDescription("P>help => Ukáže ti pomoc!")
    .setColor("GREEN")
    .addField("P>say", "Bot řekne něco")
    .setTimestamp()
    .setFooter("Bot vytvořen JustNela#6666");
    message.channel.sendEmbed(embed)
    return;
  }
});

bot.login(process.env.token);
