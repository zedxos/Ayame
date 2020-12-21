function DisableWelcomerChannelFunction(msg, args, notice, moment, Permissions, Discord, AyameClient, Db, EmbedTemplate) {
  let PermCheck = Permissions.manage_channels;

  if(!msg.member.hasPermission('MANAGE_CHANNELS')) return msg.channel.send(`${notice}You **need** the **${PermCheck}** permission to use this command!`)

  let channeldb = Db.get(`welcomerchannel_${msg.guild.id}`)

  if(channeldb === null) return msg.channel.send(`${notice}The Welcomer Channel is already **Disabled!**`)
  
  Db.delete(`welcomerchannel_${msg.guild.id}`)
  msg.channel.send(`${notice}**Successfully Deleted the Welcomer Channel!**`)
}
module.exports = DisableWelcomerChannelFunction;