async function RedditFunction(msg, args, notice, Superagent, Discord, AyameClient, Db, EmbedTemplate) {
  try {
  if(!args[0]) return msg.channel.send(`${notice}Please **provide** a **SubReddit Name!**`)
        let {body} = await Superagent
        .get(`https://www.reddit.com/r/${args}.json?sort=top&t=week`)
        .query({limit: 800});
    
        var allowed = msg.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
        if(!allowed.length) return msg.channel.send(`${notice}**Sorry looks like theres no result! Please try again!**`)
        var randomNumber = Math.floor(Math.random() * allowed.length)
        var embed = new EmbedTemplate()
        .setTitle(allowed[randomNumber].data.title)
        .setDescription(`${notice}**Author** - ${allowed[randomNumber].data.author}`)
        .setImage(allowed[randomNumber].data.url)
        .setFooter(`r/${args[0]}`, AyameClient.user.displayAvatarURL({ dynamic: true }))
        return msg.channel.send(embed)
  } catch (e) {
    msg.channel.send(`${notice}**Sorry it seems there is no results for ${args[0]}!**`)
  }
}
module.exports = RedditFunction;