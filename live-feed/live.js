var web3 = new Web3(new Web3.providers.HttpProvider("https://3434ea7e.ngrok.io"));
var abi = JSON.parse('[{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contractOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"type":"constructor"}]')
var VotingContract = web3.eth.contract(abi);
var contractInstance = VotingContract.at('0x371e179775186e6e98c6D3407446487E7a97B9d1');

var candidates = {
  "edoardo" : "candidate-1", 
  "gopal"   : "candidate-2", 
  "steve"   : "candidate-3",
  "tin"     : "candidate-4", 
  "klaus"   : "candidate-5", 
  "jie"     : "candidate-6"
};

function refresh() {
  console.log("refresh...")
  candidateNames = Object.keys(candidates);
  for (var i = 0; i < candidateNames.length; i++) {
    let name = candidateNames[i];
    let val = contractInstance.totalVotesFor.call(name).toString()
    $("#" + candidates[name]).html(val);
  }
}

setInterval(function(){ refresh() }, 3000);
$(document).ready(refresh);
