function AyameLogin(AyameToken, AyameClient) {
AyameClient.login(AyameToken);
function AyameProperty(License, Developers, Name) {
      this.license = License;
      this.developers = Developers;
      this.name = Name;
    }
    var ActualProperty = new AyameProperty('MIT', '704697854207459419 (Zed)', 'Ayame');
}
module.exports = AyameLogin;