async function MarryCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate) {
  let marrydb = Db.get(`marrieduserdata_${msg.author.id}`)
  if(marrydb === true) return msg.channel.send(`${notice}You **already have a spouse!** Please divorce first!`)
  
  let ongoingdb = Db.get(`ongoingproposal_${msg.author.id}`)
  if(ongoingdb === true) return msg.channel.send(`${notice}**Please wait you already have on going proposal!**`)
  
let spouse = msg.mentions.members.first() || AyameClient.users.cache.get(args[0]);

if(!spouse) return msg.channel.send(`${notice}Please **mention a user** you love!`)

if(spouse.user.bot === true) return msg.channel.send(`${notice}You **can\'t marry a bot!**`)

if(spouse.id === msg.author.id) return msg.channel.send(`${notice}You **can\'t Marry yourself!**`)
let marrieddb = Db.get(`marrieduserdata_${spouse.id}`)
if(marrieddb === true) return msg.channel.send(`${notice}**${spouse.user.username}** Is **already married!**`)
msg.channel.send(`${notice}Wait for **${spouse.user.username}** to accept your proposal! Please <@${spouse.user.id}> type **yes** or **no.**`)
Db.set(`ongoingproposal_${msg.author.id}`, true)

let filter = m => m.author.id === spouse.id;
        try {
            let msge = await msg.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] });
            let word = 'yes'
            let decline = 'no'
           if(msge.first().content.toLowerCase() === word) {
            Db.set(`marrieduserdata_${msg.author.id}`, true)
            Db.set(`marrieduserdata_${spouse.id}`, true)
            Db.set(`spousesuserdata_${spouse.id}_${msg.author.id}`, 1)
           const acceptEmbed = new EmbedTemplate()
   .setTitle(`Congrats! ${spouse.user.username} and ${msg.author.username} Are now Married!`)
   .setImage('https://media1.tenor.com/images/783e9568a1c06da76a50dc2c98129f11/tenor.gif?itemid=12390162')
   Db.set(`ongoingproposal_${msg.author.id}`, false)
   msg.channel.send(acceptEmbed) 
           } else if(msge.first().content.toLowerCase() === decline) {
  msg.channel.send(`${notice}**${spouse.user.username} Declined your proposal.**`)
  Db.set(`ongoingproposal_${msg.author.id}`, false)
} else {
  msg.channel.send(`${notice}**Incorrect Answer!** Try again!`)
  Db.set(`ongoingproposal_${msg.author.id}`, false)
}
        }
        catch(ex) {
           msg.channel.send(`${notice}Sorry it seems **${spouse.user.username}** Did\'nt Answer!`)
                        Db.set(`ongoingproposal_${msg.author.id}`, false)
                        console.log(ex)
        }
}
module.exports = MarryCommand;