function BotInfoFunction(msg, args, notice, moment, Discord, AyameClient, Db, EmbedTemplate, Developer) {
  const botinfoEmbed = new EmbedTemplate()
  .setTitle(`${AyameClient.user.tag} Info`)
  .setThumbnail(AyameClient.user.displayAvatarURL({ dynamic: true }))
  .addField(`**Username**`, `${notice}${AyameClient.user.username}`)
  .addField(`**Discriminator**`, `${notice}${AyameClient.user.discriminator}`)
  .addField(`**Developer**`, `${notice}${AyameClient.users.cache.get(Developer).tag}`)
  .addField(`**Bot Created**`, `${notice}${moment.utc(AyameClient.user.createdAt).format("DD/MM/YYYY - HH:mm:ss")}`)
  .addField(`**Bot Servers**`, `${notice}${AyameClient.guilds.cache.size}`)
  .addField(`**Bot Users**`, `${notice}${AyameClient.users.cache.size}`)
  .addField(`**Bot Invite Link**`, `${notice}[Link](https://discord.com/api/oauth2/authorize?client_id=745140408694079559&permissions=2081291511&scope=bot)`)
  .setFooter(`${AyameClient.user.username} Info`, AyameClient.user.displayAvatarURL({ dynamic: true }))
  msg.channel.send(botinfoEmbed)
}
module.exports = BotInfoFunction;