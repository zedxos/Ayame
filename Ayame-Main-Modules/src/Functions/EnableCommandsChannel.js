function EnableCmdFunction(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, Permissions) {
  let PermCheck = Permissions.administrator;
  
  let perms = msg.member.hasPermission("ADMINISTRATOR")
    if(!perms) return msg.channel.send(`${notice}You **need** the **${PermCheck}** permission to use this command!`)

   let channel = msg.mentions.channels.first()
    if(!channel) return msg.channel.send(`${notice}You need to **specify** the **channel!**`)
    
  let channeldb = Db.get(`disabledchannels_${channel.id}`)
  if(channeldb === true) return msg.channel.send(`${notice}**This channel is already enabled my commands!**`)
  
  Db.set(`disabledchannels_${channel.id}`, true)
  msg.channel.send(`${notice}**Successfully Enabled the <#${channel.id}>!**`)
}
module.exports = EnableCmdFunction;