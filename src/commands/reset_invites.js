const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: "reset_invites",
    description: "",
    cooldown: 3,
    aliases: ["reset_invites"],
    run: (client, message, args) => {
            message.channel.startTyping();
            var prefix = db.get(`Prefix_${message.guild.id}.data`);
            if (prefix == null || undefined) db.set(`Prefix_${message.guild.id}`, { data: client.config.prefix })
            if (!message.member.hasPermission("ADMINISTRATOR"))
                return message.channel.send(
                    new MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL({ dyanmic: true }))
                    .setDescription(
                        `**❌ | Messing Permission: You Need \`ADMINISTRATOR or The Mod Role\` Permissions To Use This Command**`
                    )
                    .setColor(message.member.displayHexColor)
                    .setThumbnail(message.author.avatarURL({ dyanmic: true }))
                    .setFooter(`Requested By: ${message.author.tag}`, message.author.avatarURL({ dyanmic: true }))
                    .setTimestamp()
                ).then(() => {
                    message.channel.stopTyping();
                })
            if (!args[0]) {
                var user = message.mentions.users.first() || client.users.cache.get(args[1]) || client.users.cache.find(c => c.id === args[1]) || client.users.cache.find(c => c.name === args[1]) || message.author;
                var data = db.get(`Gda_${user.id}_${message.guild.id}.all`)
                var data2 = db.get(`Gda_${user.id}_${message.guild.id}.fack`)
                var data3 = db.get(`Gda_${user.id}_${message.guild.id}.leaves`)
                var data4 = db.get(`Gda_${user.id}_${message.guild.id}.regular`)
                db.subtract(`Gda_${user.id}_${message.guild.id}.all`, Number(data))
                db.subtract(`Gda_${user.id}_${message.guild.id}.fack`, Number(data2))
                db.subtract(`Gda_${user.id}_${message.guild.id}.leaves`, Number(data3))
                db.subtract(`Gda_${user.id}_${message.guild.id}.regular`, Number(data4))
                return message.channel.send(
                    new MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL({ dyanmic: true }))
                    .setDescription(
                        `**✅ | Data Save: The Bot Reseted <@!${user.id}> Invites!.**`
                    )
                    .setColor(message.member.displayHexColor)
                    .setThumbnail(message.author.avatarURL({ dyanmic: true }))
                    .setFooter(`Requested By: ${message.author.tag}`, message.author.avatarURL({ dyanmic: true }))
                ).then(() => {
                    message.channel.stopTyping();
                })
            } else if (args[0] === "all") {
                message.guild.users.cache.forEach(user => {
                    var data = db.get(`Gda_${user.id}_${message.guild.id}.all`)
                    var data2 = db.get(`Gda_${user.id}_${message.guild.id}.fack`)
                    var data3 = db.get(`Gda_${user.id}_${message.guild.id}.leaves`)
                    var data4 = db.get(`Gda_${user.id}_${message.guild.id}.regular`)
                    db.subtract(`Gda_${user.id}_${message.guild.id}.all`, Number(data))
                    db.subtract(`Gda_${user.id}_${message.guild.id}.fack`, Number(data2))
                    db.subtract(`Gda_${user.id}_${message.guild.id}.leaves`, Number(data3))
                    db.subtract(`Gda_${user.id}_${message.guild.id}.regular`, Number(data4))
                })
                return message.channel.send(
                    new MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL({ dyanmic: true }))
                    .setDescription(
                        `**✅ | Data Save: The Bot Reseted All Guild Members Invites!.**`
                    )
                    .setColor(message.member.displayHexColor)
                    .setThumbnail(message.author.avatarURL({ dyanmic: true }))
                    .setFooter(`Requested By: ${message.author.tag}`, message.author.avatarURL({ dyanmic: true }))
                ).then(() => {
                    message.channel.stopTyping();
                })
            } // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
        } // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc
}; // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTsc