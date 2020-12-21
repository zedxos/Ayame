async function Bagutte(msg, args, notice, Discord, Fetch, AyameClient, Db, EmbedTemplate) {
let msge = await msg.channel.send(`${notice}**Please wait.**`)
  
  let user = msg.mentions.users.first() ? msg.mentions.users.first().displayAvatarURL({format: 'png', size: 512}) :msg.author.displayAvatarURL({format: 'png', size: 512});
  
  const data = await Fetch(
      `https://nekobot.xyz/api/imagegen?type=baguette&url=${user}`
    ).then((res) => res.json());
    msge.delete({timeout: 3000 })
    msg.channel.send(new EmbedTemplate().setTitle(`${notice}${msg.author.username} is Eating Baguette!`).setImage(data.message).setFooter(`NekoBot Api`, AyameClient.user.displayAvatarURL({ dynamic: true })))

function match(msg, i) {
  if (!msge) return;
  if (!i) return;
  let user = i.members.cache.find(
    member =>
      member.user.username.toLowerCase().startsWith(msge) ||
      member.user.username.toLowerCase() === msge ||
      member.user.username.toLowerCase().includes(msge) ||
      member.displayName.toLowerCase().startsWith(msge) ||
      member.displayName.toLowerCase() === msge ||
      member.displayName.toLowerCase().includes(msge)
  );
  if (!user) return;
  return user.user;
}
}
module.exports = Bagutte;