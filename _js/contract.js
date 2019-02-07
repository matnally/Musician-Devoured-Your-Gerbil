
function eventContract(i) {
  //see if they are eligible for a record contract, if not already

  if (JSONband[i].contract === false) {
    //Hasn't got a contract yet
    if (calChanceContract(i) === true) {
      //have enough reputation for a contract offer
      askSignContract(i);
    } else {

      if (getDateDifference(GLOBALdatDateCurrent, JSONconfig[0].date) >= JSONconfig[0].contractThresholdDate){
        //Sympathy as band has gone for long time without getting signed, so give 'em it
        askSignContract(i);
      } //if

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
  JSONband[i].contract = intContract; //need this for the game text

  // var r = confirm("Do you want to sign with " + JSONcontract[intContract].name + "?");
  var r = confirm(getGameText(JSONconfig[0].contract));
  if (r == true) {
    loggingOutput(i, "RECORD CONTRACT", JSONband[i].name + " has just signed a record contract with "+JSONcontract[JSONband[i].contract].name+"<br>");
    // updateBandMoneyAdd(i, JSONconfig[0].currency  + displayNumbersWithCommas(JSONcontract[JSONband[i].contract].money), "record contract signing bonus"); //COST
    // JSONband[i].reputation = JSONband[i].reputation + JSONcontract[JSONband[i].contract].reputation; //TODO: difference between band & musician rep?
    loggingOutput(i, "RECORD CONTRACT DETAILS", JSONband[i].name + " have received "+JSONconfig[0].currency+displayNumbersWithCommas(JSONcontract[JSONband[i].contract].money)+" signing bonus<br>");
    loggingOutput(i, "RECORD CONTRACT DETAILS", JSONband[i].name + " have received "+JSONcontract[JSONband[i].contract].reputation+" reputation points by signing with "+JSONcontract[JSONband[i].contract].name+"<br>");
    loggingOutput(i, "RECORD CONTRACT DETAILS", JSONband[i].name + " will receive "+JSONcontract[JSONband[i].contract].percent+"% from all Single releases<br>");
  } else {
    JSONband[i].contract = false;
  } //if


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
    case (intTemp > JSONconfig[0].contractThreshold):
      returnValue = true;
    break;
  } //switch

  return returnValue;

} //function

function getContract() {
  return Math.floor(Math.random() * JSONcontract.length);
} //function
