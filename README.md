# Blockchain Voting System
## AIC Away Day
---
### To do

- [ ] Connect to nice front end
- [x] Assign everyone an ID
- [x] Add server
- [ ] Mobile friendly (?)
- [x] Write deployment instructions
- [x] Make sure only one vote per account

### Dependencies
* Install [Ganache](https://github.com/trufflesuite/ganache)
* Install [Truffle suite](https://github.com/trufflesuite)
* Install [ngrok](https://ngrok.com/) (for exposing localhost to the outside world)

### Start a private local blockchain (localhost)
Using Ganache, either GUI or CLI, use port 7545. In order for the randomly generated addresses to match our 3-digit dictionary and the print-outs use mnemonic: `eye kitchen logic goddess file borrow diesel social nurse absurd thrive spare`.

Can use `ngrok http 7545` to make this blockchain available from outside, or use `http://127.0.0.1:7545` within the same computer.

### Compile and migrate the voting smart contract
Inside `/blockchain` do `truffle compile && truffle migrate --reset`. This will compile and deploy the voting smart contract, and save its hex address to a text file inside `/blockchain`. Use this address in the frontend js files.
