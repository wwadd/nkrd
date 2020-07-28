const Discord = require("discord.js");
const fs = require;
const config = require("./config.json");
const prefix = config.prefix;
const bot = new Discord.Cilent({ disableMentions: "everyone" });
bot.prefix = prefix;
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
  require('./handlers/${handler}')(bot);
});
bot.on("ready", () => {
  consle.log(`${bot.user.username} is now online`)
  bot.user.setActivity("Daw", {type: "WATCHING YOU",})
})