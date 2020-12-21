function TestWelcomerDMCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate) {
  let { member } = msg; 
  
  let dmdb = Db.get(`welcomerdm_${member.guild.id}`)
      if(dmdb === null) return msg.channel.send(`${notice}Please **enable welcomer DM First!**`)
      
      let dmmsg = Db.get(`welcomedmmessage_${member.guild.id}`)
if(dmmsg === null) {
  Db.set(`welcomedmmessage_${member.guild.id}`, `Hello there! {member} Welcome to {server}!`)
}

let newJoinDMMsg = Db.fetch(`welcomedmmessage_${member.guild.id}`)
    let contentDM = newJoinDMMsg
        .replace(/{member}/g, `<@${member.user.id}>`)
        .replace(/{nomention}/g, `${member.user.tag}`)
        .replace(/{userid}/g, `${member.user.id}`)
        .replace(/{server}/g, `${member.guild.name}`)
        .replace(/{servermembers}/g, `${member.guild.members.cache.size}`)
member.send(contentDM)
msg.channel.send(`${notice}If it's not working make sure your DM'S are open!`)
}
module.exports = TestWelcomerDMCommand;