function SetWelcomerChannelFunction(msg, args, notice, moment, Discord, AyameClient, Db, EmbedTemplate, Permissions) {
  let PermCheck = Permissions.manage_channels;

  if(!msg.member.hasPermission('MANAGE_CHANNELS')) return msg.channel.send(`${notice}You **need** the **${PermCheck}** permission to use this command!`)
    
  let channel = msg.mentions.channels.first()
  if(!channel) return msg.channel.send(`${notice}Please **mention a channel!**`)
  
  let channeldb = Db.get(`welcomerchannel_${msg.guild.id}`)
  if(channel.id === channeldb) return msg.channel.send(`${notice}**You can't specify the same Channel!**`)
  
  Db.set(`welcomerchannel_${msg.guild.id}`, channel.id)
  msg.channel.send(`${notice}**Successfully Setted the Welcomer Channel to ${channel}!**`)
}
module.exports = SetWelcomerChannelFunction;