var web3 = new Web3(new Web3.providers.HttpProvider("https://3434ea7e.ngrok.io"));
var abi = JSON.parse('[{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contractOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"type":"constructor"}]')
var VotingContract = web3.eth.contract(abi);
var contractInstance = VotingContract.at('0x371e179775186e6e98c6d3407446487e7a97b9d1');

var candidates = {
  "edoardo" : "candidate-1", 
  "gopal"   : "candidate-2", 
  "steve"   : "candidate-3",
  "tin"     : "candidate-4", 
  "klaus"   : "candidate-5", 
  "jie"     : "candidate-6"
};

var keyMap = {
  "C12" : "0xC12dB86A64A82e24e55519c5e04CDbf93a7Cc565",
  "097" : "0x097E0C57bC68b13b930d10c967B8B91e1798493A",
  "052" : "0x05283dB1f1c7EdbD4765D62c99f49e0A010Df21C",
  "d08" : "0xd08c21F1cA0A86f43b9814495f86362723f34689",
  "10c" : "0x10c0C8F1E3Ddace590b8D47639078ac2307Af6b8",
  "3C5" : "0x3C5c04968254a512d8fe9E9Bb22828F4f22DEAB0",
  "213" : "0x213864C7eE8543Aa8391f5a929D8aea5904991A8",
  "ec5" : "0xec5c091Bd0EBcB519B567F84404db8A1fb40EB31",
  "c53" : "0xc538e12C42127fEBC83A17f101C2E2ccCD28B324",
  "52f" : "0x52f9B301b214f0b69E734dFcAE101a96c6a71A7f",
  "ff2" : "0xff22b010827EED7c8cFB2DEfaC6A038bE894e348",
  "1C4" : "0x1C41Ad2C7F93b104D7957dbf67B4E9A117C7877C",
  "B52" : "0xB528Ed526E92238948B81031ce0cb59bAE7166b5",
  "3c2" : "0x3c2307E568fBbAFDe2acA2CCA669d0B4164d40AC",
  "9D4" : "0x9D4A5F6E393CF5415E3Dcaf617F2597ab800f62D",
  "AE1" : "0xAE146d0A52c569FceF8f6903256a5817a2FD4386",
  "4D1" : "0x4D15358634CB651D7E239CAE22922f44ae002E36",
  "A41" : "0xA41D744bcd14456051F457b64Da4Ba9aBB789cC9",
  "1AC" : "0x1AC032Be9cD805Cb4D3E1838CefCE9B226A16AcA",
  "420" : "0x420E90fA29a26bb5C016B455C6Af815015a919c7",
  "Dd2" : "0xDd23964160ec89F53E563dAe1387374199F4DeA8",
  "05e" : "0x05ef0b45aC5E0137eE229F683B03aab2646C0dE9",
  "D15" : "0xD15BA8d7bdB7cf6f2c64AB6570Dae2b2D2CF5825",
  "F64" : "0xF641D21cCBF3DF898af59B219324ca9640809b4f",
  "717" : "0x71791eD6d632B7762de42dce5e8648C74723323D",
  "FC1" : "0xFC14037F7E924850c799253B505A42065b0399d8",
  "Ff7" : "0xFf7749fcf083EA3702a1E4649aB79eE14D976DB8",
  "E5F" : "0xE5F1c81F64Eca12F51d93a5BE5e955D9d82b005E",
  "6bc" : "0x6bc41AA0C8f7218B18208b7D3EA61ce7d52D60c9",
  "b32" : "0xb3285f44932639128143430E0ba08087EB6ff5a7",
  "13C" : "0x13Cd48078e14cbb4C5095fd03D9C234ed827346E",
  "47a" : "0x47a062903A848Af0DAB221bc7DC3D80cAddA79b0",
  "a61" : "0xa61f3Ce184E2E9A00d13888CaF9f54Ea5446dF6D",
  "51D" : "0x51Da265B13B3252920B21c6d32Bf04991f7Ff48D",
  "cf4" : "0xcf495273e021CDE550003dE57B99AbAF6E1D821f",
  "427" : "0x427f955aa9e91EaFe0ca7fBEedA28e7Fbaa6daA8",
  "442" : "0x442e126DA22daFc81803F3788e13e8a3c75E2DC1",
  "285" : "0x28548888F291d873F5b72aC061Da50435AE235eC",
  "3F7" : "0x3F7a2b4D991fBB1631D666226f3be6B0e849092E",
  "a9f" : "0xa9fA9af90C7afA3c095A1Ba1381017fC5BE3a1d2",
  "33A" : "0x33Aa1B43e77E08230f4927471126C53c639D8d3c",
  "89f" : "0x89f74f22121F47f28909ab39728a7f0b09573Dbf",
  "BC7" : "0xBC7Cfc2708A4aF74Eaf066214bB10a9116D66e18",
  "FBA" : "0xFBAdF0Dc81EC0eE28f3cbc9B11F94743b7d776e5",
  "fbC" : "0xfbC21dE02230Fd1d4881d29532912E00951318C5",
  "b4d" : "0xb4d4CC1051d0276BeE0d9a3b8a9e8cD01B4d1f0C",
  "697" : "0x6970c5Dc37E845f98C0555aC306fe94C9e2e4551",
  "542" : "0x542AEc49669482C496179fFa9dE33dd82089d0B5",
  "b25" : "0xb25Ae785db6c641Db7E54FeeB0DCAc22f5E6d1F9",
  "DCb" : "0xDCb3B36E7E4B1B4113f184033C5af5165a01EBEF"
}

function voteForCandidate() {
  candidateName = $("#candidate").val();
  voterName = keyMap[$("#voter").val()];

  contractInstance.voteForCandidate(candidateName, {from: voterName}, function() {
    let div_id = candidates[candidateName];
    $("#" + div_id).html(contractInstance.totalVotesFor.call(candidateName).toString());
  });
}

$(document).ready(function() {
  candidateNames = Object.keys(candidates);
  for (var i = 0; i < candidateNames.length; i++) {
    let name = candidateNames[i];
    let val = contractInstance.totalVotesFor.call(name).toString()
    $("#" + candidates[name]).html(val);
  }
});
