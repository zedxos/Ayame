async function YomamaCommand(msg, args, notice, fetch, Discord, AyameClient, Db, EmbedTemplate) {
  let user = msg.mentions.users.first() || msg.author;
  
  const { joke } = await fetch("http://api.yomomma.info")
      .then((res) => res.json());

    return msg.channel.send(`${notice}${user}, ${joke}`);
}
module.exports = YomamaCommand;