function ServerInfoFunction(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, Regions) {
  const users = {
            online: msg.guild.presences.cache.filter(presence => presence.status === "online").size,
            idle: msg.guild.presences.cache.filter(presence => presence.status === "idle").size,
            dnd: msg.guild.presences.cache.filter(presence => presence.status === "dnd").size,
          },
          RolesString = msg.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
    
          const serverInfoembed = new EmbedTemplate()
            .setTitle(msg.guild.name)
            .setThumbnail(msg.guild.iconURL({ dynamic: true }))
            .addField(`**Online Users**`, `${notice}${users.online}`, true)
            .addField(`**Idle Users**`, `${notice}${users.idle}`, true)
            .addField(`**Do not Disturb Users**`, `${notice}${users.dnd}`, true)
            .addField(`**Total Users**`,  `${notice}${msg.guild.memberCount}`, true)
            .addField(`**Roles**`, `${notice}${msg.guild.roles.cache.size}`, true)
            .addField(`**Text Channels**`, `${notice}${msg.guild.channels.cache.size}`, true)
            .addField(`**Voice Channels**`, `${notice}${msg.guild.channels.cache.filter(channel => channel.type === 'voice').size}`, true)
            .addField(`**Server Region**`, `${notice}${Regions[msg.guild.region]}`, true)
            .addField(`**Server Boost Tier**`, `${notice}${msg.guild.premiumTier ? `Tier ${msg.guild.premiumTier}` : 'None'}`, true)
            .addField(`**Boost Count**`, `${msg.guild.premiumSubscriptionCount || '0'}`)
            .addField(`**Emojis**`, `${notice}${msg.guild.emojis.cache.size}`, true)
            .addField(`**Roles**`, `${notice}${RolesString.length}`, true)
            .setFooter(`Server Info`, AyameClient.user.displayAvatarURL({ dynamic: true }))
          msg.channel.send(serverInfoembed);
}
/*`<Guild>.channels.cache.find(ch => ch.name === 'whatever name' && ch.type === 'voice')`
<@!704697854207459419>
    }*/
module.exports = ServerInfoFunction;