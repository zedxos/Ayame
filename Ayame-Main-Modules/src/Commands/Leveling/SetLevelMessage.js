function SetLevelMessageCommand(msg, args, notice, Permissions, Discord, AyameClient, Db, EmbedTemplate) {
  let PermCheck = Permissions.administrator;
  
  let perms = msg.member.hasPermission("ADMINISTRATOR")
    if(!perms) return msg.channel.send(`${notice}You **need** the **${PermCheck}** permission to use this command!`)
  
  let lvlmsgargs = args.join(" ")
  if(!lvlmsgargs) return msg.channel.send(`${notice}Please **type a level up message! Ex. Hey {user} You leveled up to {level}!**`)
    
  let lvlmsgdb = Db.get(`levelmsg_${msg.guild.id}`)
  if(lvlmsgdb === lvlmsgargs) return msg.channel.send(`${notice}You **cannot specify the same message!**`)
  
  Db.set(`levelmsg_${msg.guild.id}`, lvlmsgargs)
  msg.channel.send(`${notice}Successfully **Setted the Level message to ${lvlmsgargs}!**`)
}
module.exports = SetLevelMessageCommand;