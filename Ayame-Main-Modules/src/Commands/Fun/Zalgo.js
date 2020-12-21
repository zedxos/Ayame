function ZalgoCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate) {
  if(!args[0]) return msg.channel.send(`${notice}Please **type something!**`);

    const text = args.join(" ");
    if(text.length > 180) return msg.channel.send(`${notice}Cannot **use more than 180 characters!**`);

    return msg.channel.send(notice + text.split("").map((c) => {
      if(/\s/.test(c)) return c;
      
      let zalgo = c;
      
      for(let i = 0; i < 10; i++) {
        zalgo = zalgo + String.fromCharCode(Math.floor(Math.random() * 112) + 768);
      }
      
      return zalgo;
    }).join(""));
}
module.exports = ZalgoCommand;