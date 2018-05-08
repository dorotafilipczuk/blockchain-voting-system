var Voting = artifacts.require("Voting");

module.exports = function(deployer) {
  deployer.deploy(Voting, ["edoardo","gopal","steve","tin","klaus","jie"]);
};
