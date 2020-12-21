function AyameCore(AyameScript, AyameToken) {
  let e1 = Math.floor(Math.random() * 11),
      e01 = false;
  let e2 = e1;
  console.log('Connecting....')
  if(!AyameToken) throw Error ('{ Please put token }' + e1 + ' ' + 'AyameToken' + e1 + 'Error')
  try {
  AyameScript(AyameToken);
  } catch (error) {
   console.log(error + ' ' + e2 + 'Error Occured!' + 'Ayame Script')
  }
}
module.exports = AyameCore;