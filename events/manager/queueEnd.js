const { MessageEmbed } = require('discord.js');

module.exports = async (client, player) => {
    let channel = client.channels.cache.get(player.textChannel);
    if (channel.lastNowPlayingMessage) channel.lastNowPlayingMessage.delete();
    channel.lastNowPlayingMessage = false;
    const embed = new MessageEmbed()
        .setDescription('The queue has ended.')
        .setFooter(client.config.defaultFooter)
        .setColor(client.config.defaultColor);
    channel.send(embed);
    player.destroy();
};