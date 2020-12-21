function ready(AyameClient, Prefix) {
  let activities = [`${Prefix}help`, `${AyameClient.users.cache.size} Lovely Users! * ${Prefix}help`, `Spotify * ${Prefix}help`, `Source Code 20/12/30 👀`, `${AyameClient.guilds.cache.size} Soft Servers! * ${Prefix}help`];
  setInterval(() => {
        const AyameStatus = Math.floor(Math.random() * (activities.length - 1) + 1);
        AyameClient.user.setActivity(activities[AyameStatus], { type: `LISTENING` });
    }, 20000);

  console.log(AyameClient.user.tag + ' ' + 'Ready!');
  console.log('Connected.');
  
  const host = require("project-uptimer");
 
  host.url("https://ayame-bot-discord.glitch.me", 60000)
}
module.exports = ready;