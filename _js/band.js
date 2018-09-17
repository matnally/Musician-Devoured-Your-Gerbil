
function createBandPlayer(JSONtoUse) {
  JSONtoUse.name = document.getElementById("inpBandName").value;
  JSONtoUse.reputation = calcBandReputation(JSONtoUse.musician);
  JSONtoUse.equipment = document.getElementById("selEquipmentComboBox").value;
  JSONtoUse.money = JSONconfig[0][document.getElementById('divMoney').value];
} //function

function createBandOther() {
  //player has created their band so create bands from remaining musicians
  var arrTemp = [];
  var intMusiciansToAdd = 0;
  var arrMusiciansRemaining = [];
      arrMusiciansRemaining = getMusiciansRemaining();

  do {
    arrTemp = []; //clear array for new band
    intMusiciansToAdd =  Math.floor(Math.random() * 4) + 1; //create random number between 1-4 for no. of musicians to add
    if (intMusiciansToAdd <= arrMusiciansRemaining.length) { //check if have enough musicians to add
      //Good! Musicians to add SHOULD be less than the length of arrMusiciansRemaining
    } else {
      //Not a lot of musicians left (less than 4) so just create a band from the rest
      intMusiciansToAdd = arrMusiciansRemaining.length
    } //if
    for (var i=1; i<=intMusiciansToAdd; i++) {  // 1 because 0 is player's i
      var intRandomMusicianIndex = Math.floor(Math.random() * arrMusiciansRemaining.length);
      var intRandomMusician = arrMusiciansRemaining[intRandomMusicianIndex]; //get a random musician from the remaining
      arrTemp.push(intRandomMusician); //add chosen musician to temp array
      arrMusiciansRemaining.splice(intRandomMusicianIndex, 1); //remove chosen musician from arrMusiciansRemaining array
    }
    //build up attributes to push
    var strName = getBandName(arrTemp); //random band name
    var intReputation = calcBandReputation(arrTemp); //calculate band total reputation
    var intRandomEquipment = getEquipment(); //get random equipment
    //CREATES band - GLOBALdatDateCurrent used for dateActionFinish so triggers actionChoose
    JSONband.push({'name':strName, 'money':JSONconfig[0]["moneyNormal"], 'contract':getContract(), 'reputation':intReputation, 'musician':arrTemp, 'equipment':intRandomEquipment, 'days':0, 'dateActionFinish':GLOBALdatDateCurrent, 'album':[], 'tracks':0}); //add band JSON
  } while (arrMusiciansRemaining.length > 0); //do  // SHOULD BE 1??????????? ABOVE IN THE DO WHILE

} //function


//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function updateBandReputation(i) {
  //WRITES and CALS single band reps
  JSONband[i].reputation = calcBandReputation(JSONband[i].musician);

// if (i==0)
//     JSONband[i].reputation = 5000 //TODO: CHEAT!!!

} //function

function calcBandReputation(JSONtoUse) {
  //add all musicians reputation return total
  var intTemp = 0;
  var intIndex = 0;
  var intReputation = 0;
  for (m in JSONtoUse) {
    //for every musician
    intReputation = JSONmusician[JSONtoUse[m]].reputation;
    intTemp = intTemp + parseInt(intReputation);
  } //for
  intTemp = Math.round(intTemp / JSONtoUse.length); //musicians of band
  return intTemp;
} //function

var GLOBALdatDateCurrent = new Date("01/01/1989"); // GLOBAL!!!!!  mm/dd/yyyy
function getDateCurrent() {
  //returns the in-game current date
  var datCurrent = GLOBALdatDateCurrent;
//  datCurrent = GLOBALdatDateCurrent.getFullYear() +"/"+ GLOBALdatDateCurrent.getMonth() +"/"+ GLOBALdatDateCurrent.getDate();
  return datCurrent;
} //function
function getActionDateFinish(i) {
  //calc what in-game date action will finish
  var tmpDate = new Date(getDateCurrent());
  tmpDate.setDate(tmpDate.getDate() + parseInt(i));
  return tmpDate;
} //function

function getDays(intMax) {
  return Math.floor(Math.random() * intMax) + 1;
} //function
function getEquipment() {
  return Math.floor(Math.random() * JSONequipment.length);
} //function

function getMusiciansRemaining() {
  //creates and returns an array of musician IDs that are not in the player's band
  var arrTemp = [];
  var boolFound = false;

  for (a in JSONmusician) {
    //looping through all musicians
    for (b in JSONband[0].musician) {
      //looping through musicians in player's band
      if (JSONmusician[a] == JSONmusician[JSONband[0].musician[b]]) {
        boolFound = true;
      } //if
    } //for
    if (boolFound == false) {
      //musician not found in player's band
      arrTemp.push(a);
    } else {
      //musician found in player's band so do nothing but reset flag
      boolFound = false; //reset
    } //if
  } //for
  return arrTemp;
} //function
