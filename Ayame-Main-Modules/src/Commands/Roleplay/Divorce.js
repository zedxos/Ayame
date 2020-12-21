async function DivorceCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate) {
  let marrydb = Db.get(`marrieduserdata_${msg.author.id}`)
  if(marrydb === false) return msg.channel.send(`${notice}You **Don't Even have a spouse!** Please marry first!`)
  
  let user = msg.mentions.members.first() || AyameClient.users.cache.get(args[0]);
  if(!user) return msg.channel.send(`${notice}**Please mention the user** you wanna divorce!`)
  
 if(user.user.bot === true) return msg.channel.send(`${notice}You **can't divorce a bot!**`)

if(user.id === msg.author.id) return msg.channel.send(`${notice}You **can't divorce yourself!**`)

let reason = args.slice(1).join(" ");
if(!reason) {
  reason = 'Unspecified Reason'
}

 let marrydb2 = Db.get(`marrieduserdata_${user.id}`)
  if(marrydb2 === false) return msg.channel.send(`${notice}**This user is not even married!**`)
  
  let userdb = Db.get(`spousesuserdata_${user.id}_${msg.author.id}`)
  if(userdb === null) {
  return msg.channel.send(`${notice}You're not a spouse of **${user.user.username}!** or **The one who proposed to you should divorce you! not by you! Ask ${user.user.username} to divorce!**`)
  } else {
    Db.set(`marrieduserdata_${msg.author.id}`, false)
    Db.set(`marrieduserdata_${user.id}`, false)
    Db.delete(`spousesuserdata_${user.id}_${msg.author.id}`)
    user.send(`${notice}**${msg.author.username} Decided to divorce! You're now single. Reason: ${reason}**`)
  msg.channel.send(`${notice}**You and ${user.user.username} Are not Spouse now.**`)
  }
}
module.exports = DivorceCommand;