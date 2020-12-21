function EnableCommandsChannelCommand(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, EnableCmdFunction, Permissions) {
  EnableCmdFunction(msg, args, notice, Discord, AyameClient, Db, EmbedTemplate, Permissions);
}
module.exports = EnableCommandsChannelCommand;