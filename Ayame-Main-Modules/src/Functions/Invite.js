function InviteFunction(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate) {
 const inviteEmbed = new EmbedTemplate()
 .setTitle(`Invite Me!`)
 .setThumbnail(AyameClient.user.displayAvatarURL({ dynamic: true }))
 .setDescription(`Make your Server more Fun, Anime Themed, Convenience, and much more!`)
 .addField(`**Invite Link**`, `${notice}[Click Here!](https://discord.com/api/oauth2/authorize?client_id=745140408694079559&permissions=2134900151&scope=bot)`)
 .setFooter(`.`, AyameClient.user.displayAvatarURL({ dynamic: true }))
 msg.channel.send(inviteEmbed)
}
module.exports = InviteFunction;