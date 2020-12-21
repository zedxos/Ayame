function RolesFunction(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate) {
  const roleEmbed = new EmbedTemplate()
     .setTitle(`Roles of ${msg.guild.name}`)
     .setThumbnail(msg.guild.iconURL({ dynamic: true }))
     .setFooter(`Roles`, AyameClient.user.displayAvatarURL({ dynamic: true }))
     
    
     msg.guild.roles.cache.forEach(role => {
      roleEmbed.addField(`**${role.name}**`, `${notice}${role.members.size} Members`)
     })
     
 return msg.channel.send(roleEmbed)
}
module.exports = RolesFunction;