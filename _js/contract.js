
function eventContract(i) {
  //see if they are eligible for a record contract, if not already

  if (JSONband[i].contract === false) {
    //Hasn't got a contract yet
    if (calChanceContract(i) === true) {
      //have enough reputation for a contract offer
      askSignContract(i);
    } //if
  } //if

} //function

function askSignContract(i) {

  //TODO: Ask the player!

  //Determines how many choices of contracts
  var returnValue = 0;
  var intTemp = parseInt(JSONband[i].reputation); //get the band's reputation
  switch (true) {
    case (intTemp > 500):
      returnValue = 5;
    break;
    case (intTemp > 400):
      returnValue = 4;
    break;
    case (intTemp > 300):
      returnValue = 3;
    break;
    case (intTemp > 100):
      returnValue = 2;
    break;
    default:
      returnValue = 1;
  } //switch

  var intContract = getContract();

  alert("You are signed to " + JSONcontract[intContract].name);
  JSONband[i].contract = intContract;

  loggingOutput(i, "RECORD CONTRACT", JSONband[i].name + " has just signed a record contract with "+JSONcontract[JSONband[i].contract].name+"<br>");

  // updateBandMoneySubtract(i, JSONcontract[JSONband[i].contract].money, "contract"); //COST
  updateBandMoneyAdd(i, JSONcontract[JSONband[i].contract].money, "record contract signing bonus"); //COST
  JSONband[i].reputation = JSONband[i].reputation + JSONcontract[JSONband[i].contract].reputation;

  loggingOutput(i, "RECORD CONTRACT DETAILS", JSONband[i].name + " have received "+JSONconfig[0].currency+JSONcontract[JSONband[i].contract].money+" signing bonus<br>");
  loggingOutput(i, "RECORD CONTRACT DETAILS", JSONband[i].name + " have received "+JSONcontract[JSONband[i].contract].reputation+" reputation points by signing with "+JSONcontract[JSONband[i].contract].name+"<br>");
  loggingOutput(i, "RECORD CONTRACT DETAILS", JSONband[i].name + " will receive "+JSONcontract[JSONband[i].contract].percent+"% from all Single releases<br>");

} //function


//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function chkAlreadyHaveContract(i) {
  //returns boolean check on band's contract attribute
  var returnValue = false;

  if (JSONband[i].contract === false) {
    returnValue = false;
  } else {
    returnValue = true;
  } //if
  return returnValue;
} //function

function calChanceContract(i) {
  //Determines if BAND has enough Reputation to get Record contract

  var intTemp = parseInt(JSONband[i].reputation); //get the band's reputation

  var returnValue = false; //boolean to return
  switch (true) {
    case (intTemp > 500):
      returnValue = true;
    break;
    case (intTemp > 400):
      returnValue = true;
    break;
    case (intTemp > 300):
      returnValue = false;
    break;
    case (intTemp > 100):
      returnValue = false;
    break;
      returnValue = false;
  } //switch

  return returnValue;

} //function

function getContract() {
  return Math.floor(Math.random() * JSONcontract.length);
} //function
