function NsfwAvatarFunction(msg, args, notice, Superagent, Discord, AyameClient, Db, EmbedTemplate) {
  if(!msg.channel.nsfw) return msg.channel.send(`${notice}Please use this command in **NSFW Channel!**`)

 let nsfwdb = Db.get(`nsfwcommands_${msg.guild.id}`)
 if(nsfwdb === null) return msg.channel.send(`${notice}NSFW Commands **are disabled!**`)
 
 Superagent
.get("https://nekos.life/api/v2/img/nsfw_avatar")
    .end((err, response) => {
    const nsfwavatarEmbed = new EmbedTemplate()
    .setImage(response.body.url)
    .setFooter(`Nekos.Life Api`, AyameClient.user.displayAvatarURL({ dynamic: true }))
    msg.channel.send(nsfwavatarEmbed)
    })
}
module.exports = NsfwAvatarFunction;