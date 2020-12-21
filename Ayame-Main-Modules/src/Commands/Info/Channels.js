function ChannelsCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, ChannelsFunction) {
  ChannelsFunction(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate);
}
module.exports = ChannelsCommand;