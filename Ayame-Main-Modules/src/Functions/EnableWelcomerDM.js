function EnableWelcomerDMFunction(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, Permissions) {
   let PermCheck = Permissions.manage_channels;

  if(!msg.member.hasPermission('MANAGE_CHANNELS')) return msg.channel.send(`${notice}You **need** the **${PermCheck}** permission to use this command!`)
    
    let dmdb = Db.get(`welcomerdm_${msg.guild.id}`)
  if(dmdb === true) return msg.channel.send(`${notice}The DM Welcomer is already **Enabled!**`)
  
  Db.set(`welcomerdm_${msg.guild.id}`, true)
  msg.channel.send(`${notice}**Successfully Enabled the Welcomer DM!**`)
}
module.exports = EnableWelcomerDMFunction;