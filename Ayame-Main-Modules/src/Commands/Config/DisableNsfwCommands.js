function DisableNsfwCommandsCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, Permissions) {
 let PermCheck = Permissions.administrator;
  
  let perms = msg.member.hasPermission("ADMINISTRATOR")
    if(!perms) return msg.channel.send(`${notice}You **need** the **${PermCheck}** permission to use this command!`)
    
    let nsfwdb = Db.get(`nsfwcommands_${msg.guild.id}`)
    if(nsfwdb === null) return msg.channel.send(`${notice}NSFW Commands are **already Disabled!**`)
    
    Db.delete(`nsfwcommands_${msg.guild.id}`)
    msg.channel.send(`${notice}Successfully **Disabled the NSFW Commands!**`)
}
module.exports = DisableNsfwCommandsCommand;