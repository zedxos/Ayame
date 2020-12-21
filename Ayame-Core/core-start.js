function AyameCore(AyameScript, AyameToken) {
  console.log('Connecting....')
  if(!AyameToken) throw Error ('{ Please put token }' + ' ' + 'AyameToken' + 'Error')
  try {
  AyameScript(AyameToken);
  } catch (error) {
   console.log(error + ' ' + 'Error Occured!' + 'Ayame Script')
  }
}
module.exports = AyameCore;
