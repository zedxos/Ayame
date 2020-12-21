function CuddleFunction(msg, args, notice, Superagent, Discord, AyameClient, Db, EmbedTemplate) {
let user = msg.mentions.users.first() || msg.author;
  
    Superagent
.get("https://nekos.life/api/v2/img/cuddle")
    .end((err, response) => {
    const cuddleEmbed = new EmbedTemplate()
    .setTitle(`${msg.author.username} Cuddles with ${user.username}!`)
    .setImage(response.body.url)
    .setFooter(`Nekos.Life Api`, AyameClient.user.displayAvatarURL({ dynamic: true }))
    msg.channel.send(cuddleEmbed)
    })
}
module.exports = CuddleFunction;