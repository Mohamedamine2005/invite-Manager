const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "support",
    cooldown: 7,
    aliases: [""],
    run: async(client, message) => {
            return message.channel.send(
                new MessageEmbed()
                .setColor(message.member.displayHexColor)
                .setTitle("**Argument ✨. Links**")
                .setURL(
                    `https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=1647832432&scope=bot%20applications.commands`
                )
                .setFooter(client.user.username, client.user.avatarURL({ dynaimc: true }))
                .setTimestamp().setDescription(`**
📄 Argument ✨. Support Server [Click Here](https://discord.gg/jh4gWZwP5T)

📄 Argument ✨. Bot Invite  [Click Here](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=1647832432&scope=bot%20applications.commands)

📄 Argument ✨. Top.gg [Click Here](https://top.gg/bot/780558820640423966)**`)
            );
            // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
        } // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
}; // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc