const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  
  bot.user.setActivity("Všechny prémium! [P>]", {type: "WATCHING"});
});

bot.on("message", function(message){
  if(message.author.equals(bot.user)) return;
  
  if(message.content == "Dogisrk Bot Premium"){
    message.channel.sendMessage("Muj prefix je P>");
  }
});


bot.login(process.env.token);
