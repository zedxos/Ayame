function UptimeFunction(msg, args, notice, moment, Discord, AyameClient, Db, EmbedTemplate) {
require("moment-duration-format");
const duration = moment.duration(AyameClient.uptime).format(" D [days], H [hrs], m [mins], s [secs]");


    let uptimeembed = new EmbedTemplate()
    .setTitle(`Ayame's Uptime!`)
    .addField(`Uptime`, `${notice}${duration}`)
    .setFooter(`I'm still alive!`, AyameClient.user.displayAvatarURL({ dynamic: true }))
    msg.channel.send(uptimeembed)
}
module.exports = UptimeFunction;