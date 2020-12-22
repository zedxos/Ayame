function DisableLevelingCommand(msg, args, notice, Permissions, Discord, AyameClient, Db, EmbedTemplate) {
  let PermCheck = Permissions.administrator;
  
  let perms = msg.member.hasPermission("ADMINISTRATOR")
    if(!perms) return msg.channel.send(`${notice}You **need** the **${PermCheck}** permission to use this command!`)
  
  let lvldb = Db.get(`levelingdata_${msg.guild.id}`)
  if(lvldb === null) return msg.channel.send(`${notice}Leveling is **already disabled!**`)
  
  Db.delete(`levelingdata_${msg.guild.id}`)
  msg.channel.send(`${notice}Successfully **Disabled the leveling system!**`)
}
module.exports = DisableLevelingCommand;