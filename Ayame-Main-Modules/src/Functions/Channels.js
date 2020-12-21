function ChannelsFunction(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate) {
  const channelEmbed = new EmbedTemplate()
     .setTitle(`Channel map of ${msg.guild.name}`)
     .setThumbnail(msg.guild.iconURL({ dynamic: true }))
     .setFooter(`Channels`, AyameClient.user.displayAvatarURL({ dynamic: true }))
     
    
     msg.guild.channels.cache.forEach(channel => {
      channelEmbed.addField(`**${channel.name}**`, `${notice}ID ${channel.id}`)
     })
     
 return msg.channel.send(channelEmbed)
}
module.exports = ChannelsFunction;