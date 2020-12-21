function TickleFunction(msg, args, notice, Superagent, Discord, AyameClient, Db, EmbedTemplate) {
let user = msg.mentions.users.first() || msg.author;
  
    Superagent
.get("https://nekos.life/api/v2/img/tickle")
    .end((err, response) => {
    const tickleEmbed = new EmbedTemplate()
    .setTitle(`${msg.author.username} Tickles ${user.username}!`)
    .setImage(response.body.url)
    .setFooter(`Nekos.Life Api`, AyameClient.user.displayAvatarURL({ dynamic: true }))
    msg.channel.send(tickleEmbed)
    })
}
module.exports = TickleFunction;