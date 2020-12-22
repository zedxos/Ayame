async function AnimeAvatarCommand(msg, args, notice, fetch, Discord, AyameClient, Db, EmbedTemplate) {
  const { url } = await fetch(`https://nekos.life/api/v2/img/${msg.channel.nsfw ? "nsfw_" : ""}avatar`)
      .then((res) => res.json());

    const animeavatarEmbed = new EmbedTemplate()
      .setTitle(`${msg.channel.nsfw ? "NSFW " : ""}Anime Avatar!`)
      .setImage(url)
      .setFooter(`Nekos.Life Api`, AyameClient.user.displayAvatarURL({ dynamic: true }));

    return msg.channel.send(animeavatarEmbed);
  }
module.exports = AnimeAvatarCommand;