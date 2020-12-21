function ServerInfoCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, ServerInfoFunction, Regions) {
  ServerInfoFunction(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, Regions);
}
module.exports = ServerInfoCommand;