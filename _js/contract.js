function chkAlreadyHaveContract(i) {
  //returns boolean check on band's contract attribute
  var returnValue = false;
  if (JSONband[i].contract === false) {
//    console.log(JSONband[i].name + " - contract : " + JSONband[i].contract);
    returnValue = false;
  } else {
    returnValue = true;
  } //if
  return returnValue;
} //function

function calChanceContract(i) {

  var intTemp = 0;
      intTemp = parseInt(JSONband[i].reputation); //get the band's reputation

  var returnValue = false;

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
  } //switch

  return returnValue;

} //function

function eventContract() {
  //see if they are eligible for a record contract, if not already

  for (i in JSONband) {
    //for each band

    if (chkAlreadyHaveContract(i) == false) {
      //band DOES NOT have a record contract already

      if (calChanceContract(i) == true) {
        //SUCCESS!!!
        JSONband[i].contract = getContract();
//        console.log(JSONband[i].name + " has got a record contract with " + JSONcontract[JSONband[i].contract].name);
      } //if calChanceContract

    } else {
//      console.log(JSONband[i].name + " ALREADY has a record contract with " + JSONcontract[JSONband[i].contract].name);
    } //if chkAlreadyHaveContract

  } //for


} //function

function getContract() {
  return Math.floor(Math.random() * JSONcontract.length);
} //function
