
function eventContract() {
  //see if they are eligible for a record contract, if not already

  for (i in JSONband) {
    //for each band
    if (chkAlreadyHaveContract(i) == false) {

      if (calChanceContract(i) == true) {
        //band DOES NOT have a record contract and has a change of a contract
        if (i == 0) { //Check to see if its the player's band?
          //Player's band

          if (chkAlreadyHaveContract(0) == false)
            askSignContract();

//TODO: BUG?!?!?!?!? WHy is this being called twice!

        } else {
          //other bands
          JSONband[i].contract = getContract();
        } //if
        loggingOutput(i, "RECORD CONTRACT", JSONband[i].name + " has just signed a record contract with "+JSONcontract[JSONband[i].contract].name+"<br>");
      } //if calChanceContract
    } //if chkAlreadyHaveContract
  } //for

} //function

function askSignContract() {
  var intContract = getContract();
  JSONband[0].contract = intContract;
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
