function SetWelcomerMessageFunction(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, Permissions) {
  let PermCheck = Permissions.manage_channels;

  if(!msg.member.hasPermission('MANAGE_CHANNELS')) return msg.channel.send(`${notice}You **need** the **${PermCheck}** permission to use this command!`)
    
    let welcomefetch = Db.get(`welcomerchannel_${msg.guild.id}`)
    if(welcomefetch === null) return msg.channel.send(`${notice}Please **set the welcome channel first!**`)
    
  let messageargs = args.join(" ")
  if(!messageargs) return msg.channel.send(`${notice}Please type a **warm welcome message!** Ex. Welcome {member} or {nomention} to {server}! We now have {servermembers}! Please check out the #Rules! **- Output:** Welcome <@${msg.author.id}> or ${msg.author.tag} to ${msg.guild.name}! We now have ${msg.guild.members.cache.size}! Please check out the #Rules!`)
  
  let msgfetch = Db.get(`welcomemessage_${msg.guild.id}`)
  if(msgfetch === messageargs) return msg.channel.send(`${notice}You can't **specify the same message!**`)
  
  Db.set(`welcomemessage_${msg.guild.id}`, messageargs)
  msg.channel.send(`${notice}Successfully Setted the Welcome Message to **${messageargs}**`)
}
module.exports = SetWelcomerMessageFunction;