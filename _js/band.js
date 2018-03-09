

function musicianSelect(index) {
  //Musician selected

  musicianDisplay(index);

} //function}


function musicianDisplay(index) {
  //Display musician's details

  canAfford(); //works out if you can afford musician

} //function


function musicianAdd(index) {
  //Add musician index to band musician array
  JSONband[0].musician.push(index);
  for (i in JSONband[0].musician) {
    var strTemp = createComboBoxfromJSONband(JSONband[0].musician);
  }
  updateElement("divBandComboBox", strTemp);
} //function

function bandSetName() {
} //function

function bandSetEquipment() {
} //function

function bandCreate(JSONtoUse) {
  bandCreatePlayer(JSONtoUse); //create band from player's chosen musicians
  bandCreateOther(); //creates bands from the remaining musicians
  bandOtherChooseAction();
  console.log(JSONband);
} //function
function bandCreatePlayer(JSONtoUse) {
  JSONtoUse.name = "Band name";
  JSONtoUse.reputation = calcBandReputation(JSONtoUse.musician);
  JSONtoUse.equipment = 1;
} //function


function bandOtherChooseAction() {

  var intAction = 0;
  var intDays = 0;
  var intGifts = 0;

  for (i in JSONband) {
    //looping through all the bands

    intAction = Math.floor(Math.random() * 5); //randomise action

    switch(JSONband[i].action) {
      case 0:
        //practice
       intDays = getDays();
      break;
      case 1:
        //gig
        intDays = getDays();
      break;
      case 2:
        //publicity
      break;
      case 3:
        //gifts
        intGifts = Math.floor(Math.random() * JSONgift.length);
      break;
      case 4:
        //record
      break;
      case 5:
        //release
      break;
    } //switch

    //action chosen so update band object
    JSONband[i].action = intAction;
    JSONband[i].days = intDays;
    JSONband[i].gifts = intGifts;

  } //for

} //function


function getDays() {
  return Math.floor(Math.random() * 7) + 1;
}




function bandCreateOther() {
  //player has created their band so create bands from remaining musicians

  var arrTemp = [];
  var intMusiciansToAdd = 0;

  var arrMusiciansRemaining = [];
      arrMusiciansRemaining = getMusiciansRemaining();

  do {
    arrTemp = []; //clear array for new band
    intMusiciansToAdd =  Math.floor(Math.random() * 4) + 1; //create random number between 1-4
    if (intMusiciansToAdd <= arrMusiciansRemaining.length) { //check if have enough musicians to add
      //Good! Musicians to add SHOULD be less than the length of arrMusiciansRemaining
    } else {
      //Not a lot of musicians left (less than 4) so just create a band from the rest
      intMusiciansToAdd = arrMusiciansRemaining.length
    } //if
    for (var i=1; i<=intMusiciansToAdd; i++) {
      var intRandomMusician = arrMusiciansRemaining[Math.floor(Math.random() * arrMusiciansRemaining.length)]; //get a random musician from the remaining
      arrTemp.push(intRandomMusician); //add chosen musician to temp array
      arrMusiciansRemaining.splice(intRandomMusician, 1); //remove chosen musician from arrMusiciansRemaining array
    }

    //build up attributes to push
    var strName = getBandName(arrTemp); //random band name
    var intReputation = calcBandReputation(arrTemp.musician); //calculate band total reputation
    var intRandomEquipment = getBandEquipment(); //get random equipment
    JSONband.push({'name':strName, 'reputation':intReputation, 'musician':arrTemp, 'equipment':intRandomEquipment}); //add band JSON

  } while (arrMusiciansRemaining.length > 1); //do

updateElement("divOtherBandsComboBox", createComboBoxfromJSONTEMP(JSONband));

} //function

//The GETS!
function getBandEquipment() {
  return Math.floor(Math.random() * JSONequipment.length);
} //function

function getBandName(arrTemp) {
  var strTemp = "";

  switch (arrTemp.length) {
    case 1:
      strTemp = arrTemp[0];
    break;
    case 2:
      //choose either make up band name using surnames or just band name
      strTemp = Math.random().toString(36).substring(7);
    break;
    default:
      strTemp = Math.random().toString(36).substring(7);
  } //switch
  return strTemp;
} //function

function getMusiciansRemaining() {
  //creates and returns an array of musician IDs that are not in the player's band
  var arrTemp = [];
  var boolFound = false;

  for (a in JSONmusician) {
    //looping through all musicians
    for (b in JSONband[0].musician) {
      //looping through musicians in player's band
      if (JSONmusician[a].name == JSONmusician[JSONband[0].musician[b]].name) {
        boolFound = true;
      } //if
    } //for
    if (boolFound == false) {
      //musician not found in player's band
      arrTemp.push(JSONmusician[a].name);
    } else {
      //musician found in player's band so do nothing but reset flag
      boolFound = false; //reset
    } //if
  } //for
  return arrTemp;
} //function
