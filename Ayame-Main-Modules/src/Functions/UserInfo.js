function UserInfoFunction(msg, args, notice, moment, Discord, AyameClient, Db, EmbedTemplate) {
  const member = msg.mentions.members.last() || msg.guild.members.cache.get(msg) || msg.member;
		const roles = member.roles.cache
			.sort((a, b) => b.position - a.position)
			.map(role => role.toString())
			.slice(0, -1);
			
	let marrieduserdata = Db.get(`marrieduserdata_${member.id}`)
		
  const userinfoEmbed = new EmbedTemplate()
  .setTitle(member.user.tag)
  .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
  .addField(`**Username**`, `${notice}${member.user.username}`)
  .addField(`**Discriminator**`, `${notice}${member.user.discriminator}`)
  .addField(`**ID**`, `${notice}${member.user.id}`)
  .addField(`**Avatar**`, `${notice}[Link](${member.user.displayAvatarURL({ dynamic: true })})`)
  .addField(`**Status**`, `${notice}${member.user.presence.status}`)
  .addField(`**Married**`, `${notice}${marrieduserdata}`)
  .addField(`**Game**`, `${notice}${member.user.presence.game || 'Not playing!'}`)
  .addField(`**Time Created**`, `${notice}${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`)
  .addField(`**Highest Role**`, `${notice}${member.roles.highest.id === msg.guild.id ? 'No Role!' : member.roles.highest.name}`)
  .addField(`**User Joined**`, `${notice}${moment(member.joinedAt).format('LL LTS')}`)
  .setFooter(`User Info!`, AyameClient.user.displayAvatarURL({ dynamic: true }))
  msg.channel.send(userinfoEmbed)
}
module.exports = UserInfoFunction;