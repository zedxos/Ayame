function AnimeScrapCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, AnimeScrapFunction, Prefix, Scraper) {
  AnimeScrapFunction(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, Prefix, Scraper);
}
module.exports = AnimeScrapCommand;