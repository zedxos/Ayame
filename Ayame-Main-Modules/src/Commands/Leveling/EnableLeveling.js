function EnableLevelingCommand(msg, args, notice, Permissions, Discord, AyameClient, Db, EmbedTemplate) {
  let PermCheck = Permissions.administrator;
  
  let perms = msg.member.hasPermission("ADMINISTRATOR")
    if(!perms) return msg.channel.send(`${notice}You **need** the **${PermCheck}** permission to use this command!`)
  
  let lvldb = Db.get(`levelingdata_${msg.guild.id}`)
  if(lvldb === true) return msg.channel.send(`${notice}Leveling is **already enabled!**`)
  
  Db.set(`levelingdata_${msg.guild.id}`, true)
  msg.channel.send(`${notice}Successfully **Enabled the leveling system!**`)
}
module.exports = EnableLevelingCommand;