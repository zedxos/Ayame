function ChannelInfoCommand(msg, args, notice, moment, Discord, AyameClient, Db, EmbedTemplate) {
let channel = msg.mentions.channels.first() || msg.guild.channels.cache.get(args[0]) || msg.channel;
		if(!channel) {
			return msg.channel.send(`${notice}Please **specify a valid channel!**`);
		}

		let topic;
		if(!channel.topic) {
			topic = 'None!';
		}
		else {
			topic = channel.topic;
		}

		const channelinfoEmbed = new EmbedTemplate()
			.setTitle(`Channel Information!`)
      .setFooter(`Channel Info`, AyameClient.user.displayAvatarURL({ dynamic: true }))
      .addField(`**Channel Name**`, `${notice}${channel.name}`)
      .addField(`**ID**`, `${notice}${channel.id}`)
      .addField(`**Topic**`, `${notice}${topic}`)
      .addField(`**Nsfw**`, `${notice}${channel.nsfw ? 'Yes' : 'No'}`)
      .addField(`**Created**`, `${notice}${moment(channel.createdTimestamp).format('MMMM Do YYYY, h:mm:ss')} | ${Math.floor((Date.now() - channel.createdTimestamp) / 86400000)} day(s) ago`)
		return msg.channel.send(channelinfoEmbed);
}
module.exports = ChannelInfoCommand;