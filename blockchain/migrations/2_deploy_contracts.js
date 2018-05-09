var fs = require('fs'); // Save deployed contract's address to text file


var Voting = artifacts.require("Voting");

module.exports = function(deployer) {
  deployer.deploy(Voting, ["edoardo","gopal","steve","tin","klaus","jie"]);
  fs.writeFile("./smartContractAddress.txt",Voting.address,
    function(err){if(err){console.log(err);} return;})
};
