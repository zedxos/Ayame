function AyameScript(AyameToken) {
  /*Required Modules - */
  require('dotenv')
  const Discord = require('discord.js'),
        AyameClient = new Discord.Client(),
        AyameReady = require('./Event-Checker/ready.js'),
        AyameMessage = require('./Event-Checker/message/msg.js'),
        AyameMemberAdd = require('./Event-Checker/guildmemberadd.js'),
        AyameCommandsList = require('./src/Commands/CommandsList.js'),
        AyameLogin = require('../Ayame-Core/ayameLogin.js'),
        Db = require('quick.db'),
        Fetch = require('node-fetch'),
        Superagent = require('superagent'),
        Scraper = require('mal-scraper'),
        Prefix = 'a!',
        { parse } = require('twemoji-parser'),
        fetch = require('node-fetch'),
        moment = require('moment'),
        weather = require('weather-js');
  
  /*Commands - */
  const AnimeMemeCommand = require('./src/Commands/Anime/AnimeMeme.js'),
        AnimeScrapCommand = require('./src/Commands/Anime/AnimeScrap.js'),
        BaguetteCommand = require('./src/Commands/Anime/Baguette.js'),
        BakaCommand = require('./src/Commands/Anime/Baka.js'),
        RolesCommand = require('./src/Commands/Roles/Roles.js'),
        RoleInfoCommand = require('./src/Commands/Roles/RoleInfo.js'),
        ServerInfoCommand = require('./src/Commands/Info/ServerInfo.js'),
        UserInfoCommand = require('./src/Commands/Info/UserInfo.js'),
        BotInfoCommand = require('./src/Commands/Info/BotInfo.js'),
        UptimeCommand = require('./src/Commands/Info/Uptime.js'),
        DisableCommandsChannelCommand = require('./src/Commands/Config/DisableCommandsChannel.js'),
        EnableCommandsChannelCommand = require('./src/Commands/Config/EnableCommandsChannel.js'),
        RedditCommand = require('./src/Commands/Fun/Reddit.js'),
        SetWelcomerChannelCommand = require('./src/Commands/Welcomer/SetWelcomerChannel.js'),
        DisableWelcomerChannelCommand = require('./src/Commands/Welcomer/DisableWelcomerChannel.js'),
        SetWelcomerMessageCommand = require('./src/Commands/Welcomer/SetWelcomerMessage.js'),
        TestWelcomerCommand = require('./src/Commands/Welcomer/TestWelcomer.js'),
        TestWelcomerDMCommand = require('./src/Commands/Welcomer/TestWelcomerDM.js'),
        SetWelcomerImageCommand = require('./src/Commands/Welcomer/SetWelcomerImage.js'),
        DisableWelcomerImageCommand = require('./src/Commands/Welcomer/DisableWelcomerImage.js'),
        EnableWelcomerDMCommand = require('./src/Commands/Welcomer/EnableWelcomerDM.js'),
        DisableWelcomerDMCommand = require('./src/Commands/Welcomer/DisableWelcomerDM.js'),
        SetWelcomerMessageDMCommand = require('./src/Commands/Welcomer/SetWelcomerMessageDM.js'),
        MarryCommand = require('./src/Commands/Roleplay/Marry.js'),
        DivorceCommand = require('./src/Commands/Roleplay/Divorce.js'),
        InviteCommand = require('./src/Commands/Info/Invite.js'),
        ChannelsCommand = require('./src/Commands/Info/Channels.js'),
        EnableNsfwCommandsCommand = require('./src/Commands/Config/EnableNsfwCommands.js'),
        DisableNsfwCommandsCommand = require('./src/Commands/Config/DisableNsfwCommands.js'),
        AnalCommand = require('./src/Commands/Nsfw/Anal.js'),
        NsfwAvatarCommand = require('./src/Commands/Nsfw/NsfwAvatar.js'),
        ClassicCommand = require('./src/Commands/Nsfw/Classic.js'),
        TitsCommand = require('./src/Commands/Nsfw/Tits.js'),
        TickleCommand = require('./src/Commands/Roleplay/Tickle.js'),
        HugCommand = require('./src/Commands/Roleplay/Hug.js'),
        CuddleCommand = require('./src/Commands/Roleplay/Cuddle.js'),
        HelpCommand = require('./src/Commands/Info/Help.js'),
        EmojisCommand = require('./src/Commands/Info/Emojis.js'),
        BanCommand = require('./src/Commands/Moderation/Ban.js'),
        KickCommand = require('./src/Commands/Moderation/Kick.js'),
        AvatarCommand = require('./src/Commands/Info/Avatar.js'),
        ChannelInfoCommand = require('./src/Commands/Info/ChannelInfo.js'),
        MemberCountCommand = require('./src/Commands/Info/MemberCount.js'),
        WeatherCommand = require('./src/Commands/Info/Weather.js'),
        ComplimentCommand = require('./src/Commands/Fun/Compliment.js'),
        EnchantCommand = require('./src/Commands/Fun/Enchant.js'),
        YomamaCommand = require('./src/Commands/Fun/Yomama.js'),
        ChucknorrisCommand = require('./src/Commands/Fun/Chucknorris.js'),
        ZalgoCommand = require('./src/Commands/Fun/Zalgo.js'),
        InsultCommand = require('./src/Commands/Fun/Insult.js');
  
  /*Functions for Cmds - */
  const EmbedTemplate = require('./src/Functions/EmbedTemplate.js'),
        AnimeMemeFunction = require('./src/Functions/AnimeRedditMeme.js'),
        AnimeScrapFunction = require('./src/Functions/AnimeScraper.js'),
        BagutteFunction = require('./src/Functions/Baguette.js'),
        BakaFunction = require('./src/Functions/Baka.js'),
        RolesFunction = require('./src/Functions/Roles.js'),
        RoleInfoFunction = require('./src/Functions/RoleInfo.js'),
        ServerInfoFunction = require('./src/Functions/ServerInfo.js'),
        UserInfoFunction = require('./src/Functions/UserInfo.js'),
        BotInfoFunction = require('./src/Functions/BotInfo.js'),
        UptimeFunction = require('./src/Functions/Uptime.js'),
        DisableCmdFunction = require('./src/Functions/DisableCommandsChannel.js'),
        EnableCmdFunction = require('./src/Functions/EnableCommandsChannel.js'),
        RedditFunction = require('./src/Functions/Reddit.js'),
        SetWelcomerChannelFunction = require('./src/Functions/SetWelcomerChannel.js'),
        SetWelcomerImageFunction = require('./src/Functions/SetWelcomerImage.js'),
        DisableWelcomerImageFunction = require('./src/Functions/DisableWelcomerImage.js'),
        DisableWelcomerChannelFunction = require('./src/Functions/DisableWelcomerChannel.js'),
        SetWelcomerMessageFunction = require('./src/Functions/SetWelcomerMessage.js'),
        EnableWelcomerDMFunction = require('./src/Functions/EnableWelcomerDM.js'),
        DisableWelcomerDMFunction = require('./src/Functions/DisableWelcomerDM.js'),
        SetWelcomerMessageDMFunction = require('./src/Functions/SetWelcomerMessageDM.js'),
        InviteFunction = require('./src/Functions/Invite.js'),
        ChannelsFunction = require('./src/Functions/Channels.js'),
        AnalFunction = require('./src/Functions/Anal.js'),
        NsfwAvatarFunction = require('./src/Functions/NsfwAvatar.js'),
        ClassicFunction = require('./src/Functions/Classic.js'),
        TitsFunction = require('./src/Functions/Tits.js'),
        TickleFunction = require('./src/Functions/Tickle.js'),
        HugFunction = require('./src/Functions/Hug.js'),
        CuddleFunction = require('./src/Functions/Cuddle.js'),
        HelpFunction = require('./src/Functions/Help.js'),
        BanFunction = require('./src/Functions/Ban.js'),
        KickFunction = require('./src/Functions/Kick.js'),
        AvatarFunction = require('./src/Functions/Avatar.js'),
        MemberCountFunction = require('./src/Functions/MemberCount.js'),
        InsultFunction = require('./src/Functions/Insult.js');

  /*Emojis - */
  const { notice } = require('./Emojis.js');
  
  /*?Others*/
  const Regions = require('./Regions.js'),
        Developer = '704697854207459419';
  
  /*Permissions - */
  const Permissions = require('./Permissions.js');
  
  AyameLogin(AyameToken, AyameClient);
  
  AyameClient.on('ready', () => {
    console.clear();
    AyameCommandsList(Db);
    AyameReady(AyameClient, Prefix);
  })
  
  AyameClient.on('message', async msg => {
    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;
    if (!msg.content.toLowerCase().startsWith(Prefix)) return;
     
    const args = msg.content.slice(Prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    let disabledchannels = Db.get(`disabledchannels_${msg.channel.id}`)
    if(disabledchannels === false) return;
    
    if(command === 'animememe') {
      AnimeMemeCommand(msg, args, notice, Discord, Superagent, AyameClient, Db, EmbedTemplate, AnimeMemeFunction);
      AyameMessage(msg);
    } else if(command === 'animescrap') {
      AnimeScrapCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, AnimeScrapFunction, Prefix, Scraper);
      AyameMessage(msg);
    } else if(command === 'baguette') {
      BaguetteCommand(msg, args, notice, Discord, Fetch, AyameClient, Db, EmbedTemplate, BagutteFunction, Prefix);
      AyameMessage(msg);
    } else if(command === 'baka') {
      BakaCommand(msg, args, notice, Discord, Superagent, AyameClient, Db, EmbedTemplate, BakaFunction, Prefix);
      AyameMessage(msg);
    } else if(command === 'roles') {
      RolesCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, RolesFunction);
      AyameMessage(msg);
    } else if(command === 'disablecommandschannel') {
      DisableCommandsChannelCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, DisableCmdFunction, Permissions);
      AyameMessage(msg);
    } else if(command === 'enablecommandschannel') {
      EnableCommandsChannelCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, EnableCmdFunction, Permissions);
      AyameMessage(msg);
    } else if(command === 'reddit') {
      RedditCommand(msg, args, notice, Superagent, Discord, AyameClient, Db, EmbedTemplate, RedditFunction);
      AyameMessage(msg);
    } else if(command === 'serverinfo') {
      ServerInfoCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, ServerInfoFunction, Regions);
      AyameMessage(msg);
    } else if(command === 'userinfo') {
      UserInfoCommand(msg, args, notice, moment, Discord, AyameClient, Db, EmbedTemplate, UserInfoFunction);
      AyameMessage(msg);
    } else if(command === 'roleinfo') {
      RoleInfoCommand(msg, args, notice, moment, Discord, AyameClient, Db, EmbedTemplate, RoleInfoFunction);
      AyameMessage(msg);
    } else if(command === 'botinfo') {
      BotInfoCommand(msg, args, notice, moment, Discord, AyameClient, Db, EmbedTemplate, BotInfoFunction, Developer);
      AyameMessage(msg);
    } else if(command === 'setwelcomerchannel') {
      SetWelcomerChannelCommand(msg, args, notice, moment, Discord, AyameClient, Db, EmbedTemplate, Permissions, SetWelcomerChannelFunction);
      AyameMessage(msg);
    } else if(command === 'disablewelcomerchannel') {
      DisableWelcomerChannelCommand(msg, args, notice, moment, Permissions, Discord, AyameClient, Db, EmbedTemplate, DisableWelcomerChannelFunction);
      AyameMessage(msg);
    } else if(command === 'uptime') {
      UptimeCommand(msg, args, notice, moment, Discord, AyameClient, Db, EmbedTemplate, UptimeFunction);
      AyameMessage(msg);
    } else if(command === 'setwelcomermessage') {
      SetWelcomerMessageCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, Permissions, SetWelcomerMessageFunction);
      AyameMessage(msg);
    } else if(command === 'testwelcomer') {
      TestWelcomerCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate);
      AyameMessage(msg);
    } else if(command === 'testwelcomerdm') {
      TestWelcomerDMCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate);
      AyameMessage(msg);
    } else if(command === 'enablewelcomerdm') {
      EnableWelcomerDMCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, Permissions, EnableWelcomerDMFunction);
      AyameMessage(msg);
    } else if(command === 'disablewelcomerdm') {
      DisableWelcomerDMCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, Permissions, DisableWelcomerDMFunction);
      AyameMessage(msg);
    } else if(command === 'setwelcomermessagedm') {
      SetWelcomerMessageDMCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, Permissions, SetWelcomerMessageDMFunction);
      AyameMessage(msg);
    } else if(command === 'setwelcomerimage') {
      SetWelcomerImageCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, Permissions, SetWelcomerImageFunction);
    } else if(command === 'disablewelcomerimage') {
      DisableWelcomerImageCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, Permissions, DisableWelcomerImageFunction);
    } else if(command === 'marry') {
      MarryCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate);
      AyameMessage(msg);
    } else if(command === 'divorce') {
      DivorceCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate);
      AyameMessage(msg);
    } else if(command === 'invite') {
      InviteCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, InviteFunction);
      AyameMessage(msg);
    } else if(command === 'channels') {
      ChannelsCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, ChannelsFunction);
      AyameMessage(msg);
    } else if(command === 'enablensfwcommands') {
      EnableNsfwCommandsCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, Permissions);
      AyameMessage(msg);
    } else if(command === 'disablensfwcommands') {
      DisableNsfwCommandsCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, Permissions);
      AyameMessage(msg);
    } else if(command === 'anal') {
      AnalCommand(msg, args, notice, Superagent, Discord, AyameClient, Db, EmbedTemplate, AnalFunction);
      AyameMessage(msg);
    } else if(command === 'nsfwavatar') {
      NsfwAvatarCommand(msg, args, notice, Superagent, Discord, AyameClient, Db, EmbedTemplate, NsfwAvatarFunction);
      AyameMessage(msg);
    } else if(command === 'classic') {
      ClassicCommand(msg, args, notice, Superagent, Discord, AyameClient, Db, EmbedTemplate, ClassicFunction);
      AyameMessage(msg);
    } else if(command === 'tits') {
      TitsCommand(msg, args, notice, Superagent, Discord, AyameClient, Db, EmbedTemplate, TitsFunction);
      AyameMessage(msg);
    } else if(command === 'tickle') {
      TickleCommand(msg, args, notice, Superagent, Discord, AyameClient, Db, EmbedTemplate, TickleFunction);
      AyameMessage(msg);
    } else if(command === 'hug') {
      HugCommand(msg, args, notice, Superagent, Discord, AyameClient, Db, EmbedTemplate, HugFunction);
      AyameMessage(msg);
    } else if(command === 'cuddle') {
      CuddleCommand(msg, args, notice, Superagent, Discord, AyameClient, Db, EmbedTemplate, CuddleFunction);
      AyameMessage(msg);
    } else if(command === 'help') {
      HelpCommand(msg, args, notice, moment, Prefix, Discord, AyameClient, Db, EmbedTemplate, HelpFunction);
      AyameMessage(msg);
    } else if(command === 'emojis') {
      EmojisCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate);
      AyameMessage(msg);
    } else if(command === 'ban') {
      BanCommand(msg, args, notice, Permissions, Discord, AyameClient, Db, EmbedTemplate, BanFunction);
      AyameMessage(msg);
    } else if(command === 'kick') {
      KickCommand(msg, args, notice, Permissions, Discord, AyameClient, Db, EmbedTemplate, KickFunction);
      AyameMessage(msg);
    } else if(command === 'avatar') {
      AvatarCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, AvatarFunction);
      AyameMessage(msg);
    } else if(command === 'channelinfo') {
      ChannelInfoCommand(msg, args, notice, moment, Discord, AyameClient, Db, EmbedTemplate);
      AyameMessage(msg);
    } else if(command === 'membercount') {
      MemberCountCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, MemberCountFunction);
      AyameMessage(msg);
    } else if(command === 'weather') {
      WeatherCommand(msg, args, notice, weather, Discord, AyameClient, Db, EmbedTemplate);
      AyameMessage(msg);
    } else if(command === 'compliment') {
      ComplimentCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate);
      AyameMessage(msg);
    } else if(command === 'enchant') {
      EnchantCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate);
      AyameMessage(msg);
    } else if(command === 'yomama') {
      YomamaCommand(msg, args, notice, fetch, Discord, AyameClient, Db, EmbedTemplate);
      AyameMessage(msg);
    } else if(command === 'chucknorris') {
      ChucknorrisCommand(msg, args, notice, fetch, Discord, AyameClient, Db, EmbedTemplate);
      AyameMessage(msg);
    } else if(command === 'zalgo') {
      ZalgoCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate);
      AyameMessage(msg);
    } else if(command === 'insult') {
      InsultCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, InsultFunction);
      AyameMessage(msg);
    }
  })
  
  AyameClient.on('guildMemberAdd', async member => {
      AyameMemberAdd(AyameClient, member, Db, Discord);
      
      let dmdb = Db.get(`welcomerdm_${member.guild.id}`)
      if(dmdb === null) return;
      
      let dmmsg = Db.get(`welcomedmmessage_${member.guild.id}`)
if(dmmsg === null) {
  Db.set(`welcomedmmessage_${member.guild.id}`, `Hello there! {member} Welcome to {server}!`)
}

let newJoinDMMsg = Db.fetch(`welcomedmmessage_${member.guild.id}`)
    let contentDM = newJoinDMMsg
        .replace(/{member}/g, `<@${member.user.id}>`)
        .replace(/{nomention}/g, `${member.user.tag}`)
        .replace(/{userid}/g, `${member.user.id}`)
        .replace(/{server}/g, `${member.guild.name}`)
        .replace(/{servermembers}/g, `${member.guild.members.cache.size}`)
member.send(contentDM)
  })
  
  /*
   * @param {Ayame} name - Property's Name
   */
   function LogName(name) {
     console.log(name)
   }
}
module.exports = AyameScript;