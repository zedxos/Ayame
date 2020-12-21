function RoleInfoFunction(msg, args, notice, moment, Discord, AyameClient, Db, EmbedTemplate) {
  const role = msg.mentions.roles.first() || msg.guild.roles.cache.get(args[0]);
		if(!role) {
			return msg.channel.send(
				`${notice}Please **specify a role!**`,
			);
		}

		let permissions;
		if(role.permissions.toArray().length !== 0) {
			permissions = role.permissions.toArray().map(x => x.split('_').map(y => y[0] + y.slice(1).toLowerCase()).join(' ')).join(', ');
		}
		else {
			permissions = 'No Permissions!';
		}
		const roleinfoEmbed = new EmbedTemplate()
		.setTitle(`${role.name} Info`)
		.addField(`**Role name**`, `${notice}${role.name}`)
		.addField(`**Role ID**`, `${notice}${role.id}`)
		.addField(`**Role Color**`, `${notice}${role.hexColor.toUpperCase()}`)
		.addField(`**Role Members**`, `${notice}${role.members.size}`)
		.addField(`**High Role**`, `${notice}${role.hoist ? 'Yes' : 'No'}`)
		.addField(`**Role Mentionable**`, `${notice}${role.mentionable ? 'Yes' : 'No'}`)
		.addField(`**Role Created**`, `${notice}${moment(role.createdTimestamp).format('MMMM Do YYYY, h:mm:ss')} | ${Math.floor((Date.now() - role.createdTimestamp) / 86400000)} days ago}`)
		.addField(`**Role Permissions**`, `${notice}${permissions}`)
		.setFooter(`${role.name} Info`, AyameClient.user.displayAvatarURL({ dynamic: true }))
		msg.channel.send(roleinfoEmbed)
}
module.exports = RoleInfoFunction;