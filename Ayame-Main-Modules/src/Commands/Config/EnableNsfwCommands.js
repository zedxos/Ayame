function EnableNsfwCommandsCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, Permissions) {
 let PermCheck = Permissions.administrator;
  
  let perms = msg.member.hasPermission("ADMINISTRATOR")
    if(!perms) return msg.channel.send(`${notice}You **need** the **${PermCheck}** permission to use this command!`)
    
    let nsfwdb = Db.get(`nsfwcommands_${msg.guild.id}`)
    if(nsfwdb === true) return msg.channel.send(`${notice}NSFW Commands are **already Enabled!**`)
    
    Db.set(`nsfwcommands_${msg.guild.id}`, true)
    msg.channel.send(`${notice}Successfully **Enabled the NSFW Commands!**`)
}
module.exports = EnableNsfwCommandsCommand;