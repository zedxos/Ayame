function WeatherCommand(msg, args, notice, weather, Discord, AyameClient, Db, EmbedTemplate) {
    if(!args.length) {
      return msg.channel.send(`${notice}Please **specify the weather location!**`)
    }
    
 weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
try {
let weatherEmbed = new EmbedTemplate()
.setTitle(`Weather - ${result[0].location.name}`)
.setDescription(`Temperature units can may be differ some time!`)
.addField(`**Temperature**`, `${notice}${result[0].current.temperature} Celcius`)
.addField(`**Sky Text**`, `${notice}${result[0].current.skytext}`)
.addField(`**Humidity**`, `${notice}${result[0].current.humidity}`)
.addField(`**Wind Speed**`, `${notice}${result[0].current.windspeed}`)
.addField(`**Observation Time**`, `${notice}${result[0].current.observationtime}`)
.addField(`**Wind Display**`, `${notice}${result[0].current.winddisplay}`)
.setFooter(`Weather`, AyameClient.user.displayAvatarURL({ dynamic: true }))
.setThumbnail(result[0].current.imageUrl);
   msg.channel.send(weatherEmbed)
} catch(err) {
  return msg.channel.send(`${notice}**Unable To Get the data of Given location!**`)
}
});  
}
module.exports = WeatherCommand;