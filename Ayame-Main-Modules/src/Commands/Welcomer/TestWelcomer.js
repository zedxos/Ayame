function TestWelcomerCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate) {
  
  let { member } = msg;
  
  let welcomechannel = Db.get(`welcomerchannel_${member.guild.id}`)
  if(welcomechannel === null) return msg.channel.send(`${notice}Please **set up Welcomer Channel First!**`)
  
  let welcomemsg = Db.fetch(`welcomemessage_${member.guild.id}`)
    if (welcomemsg === null) {
        Db.set(`welcomemessage_${member.guild.id}`, `Welcome {nomention} to {server}! We now have {servermembers} members!`)
    }

    let newJoinMsg = Db.fetch(`welcomemessage_${member.guild.id}`)
    let content = newJoinMsg
        .replace(/{member}/g, `<@${member.user.id}>`)
        .replace(/{nomention}/g, `${member.user.tag}`)
        .replace(/{userid}/g, `${member.user.id}`)
        .replace(/{server}/g, `${member.guild.name}`)
        .replace(/{servermembers}/g, `${member.guild.members.cache.size}`)
  
    AyameClient.channels.cache.get(welcomechannel).send(content)
    
  let welcomerImage = Db.get(`welcomerimage_${member.guild.id}`)
  if(welcomerImage === null) return;
  
  const attachment = new Discord.MessageAttachment(
      welcomerImage,
      "welcome-image.png"
    );
    
    AyameClient.channels.cache.get(welcomechannel).send(attachment)
}
module.exports = TestWelcomerCommand;