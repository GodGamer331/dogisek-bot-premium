const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
const prefix = "P>";

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online with prefix P>!`);
  
  bot.user.setActivity("Všechny prémium! [P>]", {type: "WATCHING"});
});

bot.on("message", function(message){
  if(message.author.equals(bot.user)) return;
  if(!message.content.startsWith(prefix)) return;
  
  var args = message.content.substring(prefix.lenght).split(" ");
  
  switch (args[0]){
      case "ping";
      message.content.sendMessage(":ping_pong: Pong!");
      break;
      
  }
    
});


bot.login(process.env.token);
