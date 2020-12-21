const { MessageEmbed } = require("discord.js"),
       Color = 'F0F8FF'

function EmbedTemplate() {
  
  return new MessageEmbed()
    .setColor(Color)
}

module.exports = EmbedTemplate;