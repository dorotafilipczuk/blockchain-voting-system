var fs = require('fs'); // Save deployed contract's address to text file

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var Voting = artifacts.require("Voting");

module.exports = function(deployer) {
  deployer.deploy(Voting, ["edoardo","gopal","steve","tin","klaus","jie"]);
  sleep(2000);
  fs.writeFile("./smartContractAddress.txt",Voting.address,
               function(err){if(err){console.log(err);} return;})
};
