async function SetWelcomerImageFunction(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, Permissions) {
  let PermCheck = Permissions.manage_channels;

  if(!msg.member.hasPermission('MANAGE_CHANNELS')) return msg.channel.send(`${notice}You **need** the **${PermCheck}** permission to use this command!`)
  
  let newBg = msg.attachments.first()
        let fetchBg = await Db.fetch(`welcomerimage_${msg.guild.id}`);
        if (!newBg) {
          return msg.channel.send(`${notice}You Need To **Send** The **Image** To Set **New Image!**`)
        }
      if (newBg === fetchBg) {
                return msg.channel.send(`${notice}You **can\'t specify** the **same image**!`)
            }
        Db.set(`welcomerimage_${msg.guild.id}`, newBg.url)

        return msg.channel.send(`${notice}**Welcome Image** has been **setted up!**`)
}
module.exports = SetWelcomerImageFunction;