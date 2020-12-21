function KickFunction(msg, args, notice, Permissions, Discord, AyameClient, Db, EmbedTemplate) {
  let PermCheck = Permissions.kick_members;
  
  let perms = msg.member.hasPermission("KICK_MEMBERS")
    if(!perms) return msg.channel.send(`${notice}You **need** the **${PermCheck}** permission to use this command!`)

   if(!msg.guild.me.hasPermission('KICK_MEMBERS')) return msg.channel.send(`${notice}I **need** the **${PermCheck}** permission to perform this command!`)

        const member = msg.mentions.members.first() || msg.guild.members.cache.get(args[0]);

        if(!args[0]) return msg.channel.send(`${notice}Please **mention** a **user or just id!**`);

        if(!member) return msg.channel.send(`${notice}Sorry **i can't find this user!**`)
        if(!member.kickable) return msg.channel.send(`${notice}This user **can\'t be kicked!** It is either because they are a mod/admin, or their highest **role is higher than mine!**`);

        if(member.id === msg.author.id) return msg.channel.send(`${notice}You **can\'t** kick **yourself!**`);

        let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Unspecified Reason!';
        
        member.kick(reason)
        
        msg.channel.send(`${notice}**${member.user.username}** Has been kicked! by **${msg.author.username}**`)
}
module.exports = KickFunction;