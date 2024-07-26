const Discord = require('discord.js');
const fs = require('fs');
const Configs = require('../../../../config.json');

/**
 * User help command. Shows the user the commands under this category.
 * 
 * @param {Discord.Client} client 
 * @param {Discord.Message} message 
 * @param {Array} args 
 * @returns void
 */
exports.run = async (client, message, args) => {

    const Embed = new Discord.MessageEmbed();
    Embed.setColor("BLUE");
    Embed.setTitle("User Commands");

    fs.readdirSync(__dirname).forEach((File) => {
        Embed.addField('`' + Configs.DiscordBot.Prefix + 'user ' + File.split('.')[0] + '`', require('./' + File).description);
    });

    await message.reply(Embed);
};
