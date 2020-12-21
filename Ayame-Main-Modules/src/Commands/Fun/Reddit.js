function RedditCommand(msg, args, notice, Superagent, Discord, AyameClient, Db, EmbedTemplate, RedditFunction) {
  RedditFunction(msg, args, notice, Superagent, Discord, AyameClient, Db, EmbedTemplate);
}
module.exports = RedditCommand;