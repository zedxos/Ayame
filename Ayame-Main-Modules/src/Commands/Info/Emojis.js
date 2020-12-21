function EmojisCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate) {
	let Emojis = '';
	let EmojisAnimated = '';
	let EmojiCount = 0;
	let Animated = 0;
	let OverallEmojis = 0;
	function Emoji(id) {
		return AyameClient.emojis.cache.get(id).toString();
	}
	msg.guild.emojis.cache.forEach(emoji => {
		OverallEmojis++;
		if (emoji.animated) {
			Animated++;
			EmojisAnimated += Emoji(emoji.id);
		} else {
			EmojiCount++;
			Emojis += Emoji(emoji.id);
		}
	});
	let emojiEmbed = new EmbedTemplate()
		.setTitle(`Emojis in ${msg.guild.name}`)
		.setThumbnail(msg.guild.iconURL({ dynamic: true }))
		.setDescription(`**Animated - ${Animated}**\n${notice}${EmojisAnimated}\n**Standard - ${EmojiCount}**\n${notice}${Emojis}\n**All Emojis**\n${notice}${OverallEmojis}`)
		.setFooter(`Emojis`, AyameClient.user.displayAvatarURL({ dynamic: true }))
	msg.channel.send(emojiEmbed);
}
module.exports = EmojisCommand;
