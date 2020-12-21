async function ChucknorrisCommand(msg, args, notice, fetch, Discord, AyameClient, Db, EmbedTemplate) {
  let user = msg.mentions.users.first() || msg.author;
  
  const { value } = await fetch("http://api.chucknorris.io/jokes/random")
      .then((res) => res.json());

    return msg.channel.send(`${notice}${user ? value.replace(/Chuck Norris/g, user.toString()) : value}`);
}
module.exports = ChucknorrisCommand;