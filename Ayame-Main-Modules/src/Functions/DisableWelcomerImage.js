function DisableWelcomerImageFunction(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, Permissions) {
  let PermCheck = Permissions.manage_channels;

  if(!msg.member.hasPermission('MANAGE_CHANNELS')) return msg.channel.send(`${notice}You **need** the **${PermCheck}** permission to use this command!`)
  
  let imagedb = Db.get(`welcomerimage_${msg.guild.id}`)

  if(imagedb === null) return msg.channel.send(`${notice}The Welcomer Image is already **Disabled!**`)
  
  Db.delete(`welcomerimage_${msg.guild.id}`)
  msg.channel.send(`${notice}**Successfully Deleted the Welcomer Image!**`)
}
module.exports = DisableWelcomerImageFunction;