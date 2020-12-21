function SetWelcomerMessageDMFunction(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, Permissions) {
  let PermCheck = Permissions.manage_channels;

  if(!msg.member.hasPermission('MANAGE_CHANNELS')) return msg.channel.send(`${notice}You **need** the **${PermCheck}** permission to use this command!`)
    
    let welcomerdmfetch = Db.get(`welcomerdm_${msg.guild.id}`)
    if(welcomerdmfetch === null) return msg.channel.send(`${notice}Please **set the welcome dm first!**`)
    
  let messageargs = args.join(" ")
  if(!messageargs) return msg.channel.send(`${notice}Please type a **warm welcome message!** Ex. Welcome {member}/{nomention} or {userid} to {server} We now have {servermembers}! **- Output:** Welcome <@${msg.author.id}>/${msg.author.tag} or ${msg.author.tag} to ${msg.guild.name}! We now have ${msg.guild.members.cache.size}!`)
  
  let msgfetch = Db.get(`welcomedmmessage_${msg.guild.id}`)
  if(msgfetch === messageargs) return msg.channel.send(`${notice}You can't **specify the same message!**`)
  
  Db.set(`welcomedmmessage_${msg.guild.id}`, messageargs)
  msg.channel.send(`${notice}Successfully Setted the Welcome Message DM to **${messageargs}**`)
}
module.exports = SetWelcomerMessageDMFunction;