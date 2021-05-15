const chalk = require("chalk");
const figlet = require("figlet");
const request = require("node-superfetch");
const db = require("quick.db");

module.exports = async client => {
  console.log(
    chalk.yellow(
      figlet.textSync("NIR0 Invitemanger", { horizontalLayout: "full" })
    )
  );
  console.log(
    chalk.red(`Bot started!
=====================================
> Users: ${client.users.cache.size}
> Channels: ${client.channels.cache.size}
> Servers: ${client.guilds.cache.size}
> Bot Ping: ${client.ws.ping}  XD
> Prefix: ${client.config.prefix}
> Developer: @ニロ#3121
> Support: https://discord.gg/YJ6mUdgTsc
=====================================`)
  );
  await client.user.setActivity("a!help");
  await client.user.setStatus("idle");
};
