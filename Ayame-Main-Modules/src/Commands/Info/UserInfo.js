function UserInfoCommand(msg, args, notice, moment, Discord, AyameClient, Db, EmbedTemplate, UserInfoFunction, Flags) {
  UserInfoFunction(msg, args, notice, moment, Discord, AyameClient, Db, EmbedTemplate, Flags);
}
module.exports = UserInfoCommand;