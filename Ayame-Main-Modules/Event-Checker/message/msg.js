function msg(msg) {
  console.log(msg.author.tag + ' ' + msg.author.id + ' ' + 'Ran a command.' + ' ' + msg.content)
}
module.exports = msg;