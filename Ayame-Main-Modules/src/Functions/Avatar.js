function AvatarFunction(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate) {
var user;
    user = msg.mentions.users.first() || AyameClient.users.cache.get(args[0])
    if (!user) {
      if (!args[0]) {
        user = msg.author;
        getuseravatar(user);
      } else {
        try{
        var id = args[0];
        AyameClient.fetchUser(id).then(user => {
          getuseravatar(user);
        }).catch(error => console.log(error));
        } catch(err) {
          msg.channel.send(`${notice}Please **enter a valid ID or mention a user!**`)
        }
    }
    } else {
      getuseravatar(user);
    }
    function getuseravatar(user) {
      var avatarEmbed = new EmbedTemplate()
      .setTitle(`${user.username} Avatar!`)
      .setDescription(`Links`)
      .addField(`**Png**`, `${notice}[png](${user.displayAvatarURL({ format: 'png', dynamic: true, size: 4096})})`)
      .addField(`**Jpg**`, `${notice}[jpg](${user.displayAvatarURL({ format: 'jpg', dynamic: true, size: 4096})})`)
      .addField(`**Webp**`, `${notice}[webp](${user.displayAvatarURL({ format: 'webp', dynamic: true, size: 4096})})`)
      .setImage(user.displayAvatarURL({ dynamic: true, size: 4096 }))
      .setFooter(`Avatar`, AyameClient.user.displayAvatarURL({ dynamic: true }))
      msg.channel.send(avatarEmbed)
    }
}
module.exports = AvatarFunction;