function HugFunction(msg, args, notice, Superagent, Discord, AyameClient, Db, EmbedTemplate) {
let user = msg.mentions.users.first() || msg.author;
  
    Superagent
.get("https://nekos.life/api/v2/img/hug")
    .end((err, response) => {
    const hugEmbed = new EmbedTemplate()
    .setTitle(`${msg.author.username} Hugs with ${user.username}!`)
    .setImage(response.body.url)
    .setFooter(`Nekos.Life Api`, AyameClient.user.displayAvatarURL({ dynamic: true }))
    msg.channel.send(hugEmbed)
    })
}
module.exports = HugFunction;