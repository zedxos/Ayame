function Baka(msg, args, notice, Discord, Superagent, AyameClient, Db, EmbedTemplate) {
  Superagent
.get("https://nekos.life/api/v2/img/baka")
    .end((err, response) => {
    const bakaEmbed = new EmbedTemplate()
    .setTitle(`${notice}Baka!`)
    .setImage(response.body.url)
    .setFooter(`Nekos.Life Api`, AyameClient.user.displayAvatarURL({ dynamic: true }))
    msg.channel.send(bakaEmbed)
    })
}
module.exports = Baka;