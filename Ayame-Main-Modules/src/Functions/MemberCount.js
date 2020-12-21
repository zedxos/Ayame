function MemberCountFunction(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate) {
const guild = AyameClient.guilds.cache.get(args[0]) || msg.guild;
		const members = guild.members.cache;
		const membercountEmbed = new EmbedTemplate()
			.setTitle(`${guild.name} member count`)
      .setThumbnail(guild.iconURL({ dynamic: true }))
      .addField(`**Humans**`, `${notice}${members.filter(member => !member.user.bot).size}`)
      .addField(`**Bots**`, `${notice}${members.filter(member => member.user.bot).size}`)
      .addField(`**All Members**`, `${notice}${guild.memberCount}`)
      .addField(`**Online**`, `${notice}${members.filter(member => member.presence.status === 'online').size}`)
      .addField(`**Idle**`, `${notice}${members.filter(member => member.presence.status === 'idle').size}`)
      .addField(`**Do not Disturb**`, `${notice}${members.filter(member => member.presence.status === 'dnd').size}`)
      .addField(`**Offline**`, `${notice}${members.filter(member => member.presence.status === 'offline').size}`)
      .setFooter(`Member Count`, AyameClient.user.displayAvatarURL({ dynamic: true }))
		msg.channel.send(membercountEmbed);
}
module.exports = MemberCountFunction;