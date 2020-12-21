async function AnimeScraper(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, Prefix, Scraper) {
  
     let Anime = args.join(" ");

        if (!Anime) return msg.channel.send(`${notice}**Please Give Anime Name!**`);
      
        let msge = await msg.channel.send(`${notice}**Please wait.**`);
      
        let Replaced = Anime.replace(/ /g, " ");
      
        await msge.delete({ timeout: 3000 });
      
        let AnimeF;
      
        let Embed;
      
        try {
      
        AnimeF = await Scraper.getInfoFromName(Replaced);
      
        if (!AnimeF.genres[0] || AnimeF.genres[0] === null) AnimeF.genres[0] = `${notice}none`;
      
        Embed = new EmbedTemplate()
        .setURL(AnimeF.url)
        .setTitle(AnimeF.title)
        .setDescription(AnimeF.synopsis)
        .addField(`**Type**`, `${notice}${AnimeF.type}`, true)
        .addField(`**Status**`, `${notice}${AnimeF.status}`, true)
        .addField(`**Premiered**`, `${notice}${AnimeF.premiered}`, true)
        .addField(`**Episodes**`, `${notice}${AnimeF.episodes}`, true)
        .addField(`**Duration**`, `${notice}${AnimeF.duration}`, true)
        .addField(`**Popularity**`, `${notice}${AnimeF.popularity}`, true)
        .addField(`**Genres**`, `${notice}${AnimeF.genres.join(", ")}`)
        .setThumbnail(AnimeF.picture)
        .setFooter(`Mal-Scraper`, AyameClient.user.displayAvatarURL({ dynamic: true }))
      
        } catch (error) {
          console.log(error)
          return msg.channel.send(`No Anime Found!`)
         
        };
      
        return msg.channel.send(Embed);

}
module.exports = AnimeScraper;