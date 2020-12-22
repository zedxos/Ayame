function HelpFunction(msg, args, notice, moment, Prefix, Discord, AyameClient, Db, EmbedTemplate) {
 const helpEmbed = new EmbedTemplate()
 .setTitle(`My Available Commands!`)
 .setAuthor(`${AyameClient.user.username}`, AyameClient.user.displayAvatarURL({ dynamic: true }))

 if(!args[0]) {
   helpEmbed.setDescription(`Do ${Prefix}help (command name) for more info on specific command!`)
   helpEmbed.setImage('https://serving.photos.photobox.com/085707889448717b88c84fc6704aa63d2b2ea94a8cf08238a1bbc6d902b5c512a187c9a3.jpg')
   helpEmbed.addField(`**Anime**`, `${notice}\`AnimeMeme, AnimeAvatar, AnimeScrap, Baguette, Baka.\``)
   helpEmbed.addField(`**Fun**`, `${notice}\`Reddit, Compliment, Enchant, Yomama, Chucknorris, Zalgo, Insult.\``)
   helpEmbed.addField(`**Roleplay**`, `${notice}\`Cuddle, Hug, Tickle, Marry, Divorce.\``)
   helpEmbed.addField(`**Info**`, `${notice}\`Avatar, BotInfo, Channels, ChannelInfo, Emojis, Help, Invite, ServerInfo, Uptime, MemberCount, Weather, UserInfo.\``)
   helpEmbed.addField(`**Roles**`, `${notice}\`RoleInfo, Roles.\``)
   helpEmbed.addField(`**Moderation**`, `${notice}\`Ban, Kick.\``)
   helpEmbed.addField(`**Welcomer**`, `${notice}\`DisableWelcomerChannel, DisableWelcomerDM, DisableWelcomerImage, EnableWelcomerDM, SetWelcomerChannel, SetWelcomerImage, SetWelcomerMessage, SetWelcomerMessageDM, TestWelcomer, TestWelcomerDM.\``)
   helpEmbed.addField(`**Config**`, `${notice}\`DisableCommandsChannel, DisableNsfwCommands, EnableCommandsChannel, EnableNsfwCommands.\``)
   if(!msg.channel.nsfw) {
   helpEmbed.addField(`**Nsfw**`, `${notice}\`These Commands can only be seen in NSFW Channels!\``)
   } else {
     helpEmbed.addField(`**Nsfw**`, `${notice}\`Anal, Classic, NsfwAvatar, Tits.\``)
   }
   helpEmbed.addField(`**Links**`, `${notice}[Invite Link](https://discord.com/api/oauth2/authorize?client_id=745140408694079559&permissions=2134900151&scope=bot), [Github](https://github.com/zedxos/Ayame).`)
   return msg.channel.send(helpEmbed)
 } else {
   let cmd = args[0].toLowerCase()
   let commandname = Db.get(`${cmd}name`),
       commanddescription = Db.get(`${cmd}description`),
       commandusage = Db.get(`${cmd}usage`)
  
  if(!commandname) return msg.channel.send(`${notice}**Invalid** Command!`)

  helpEmbed.setDescription(`() Is optional <> is Needed!`)
  helpEmbed.addField(`**Name**`, `${notice}${commandname}`)
  helpEmbed.addField(`**Description**`, `${notice}${commanddescription}`)
  helpEmbed.addField(`**Usage**`, `${notice}${commandusage}`)
  return msg.channel.send(helpEmbed)
 }
}
module.exports = HelpFunction;