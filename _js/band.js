

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

  JSONtoUse.name = "Band name";
  JSONtoUse.reputation = calcBandReputation(JSONtoUse.musician);
  JSONtoUse.equipment = 1;

  bandCreateOther(); //creates bands from the remaining musicians

} //function

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


document.write(createComboBoxfromJSONTEMP(JSONband));


} //function

//The GETS!
function getBandEquipment() {
  return Math.floor(Math.random() * JSONequipment.length);
} //function
function getBandName(arrTemp) {
  var strTemp = "";
//  alert(arrTemp);
  if (arrTemp.length < 2) {
    strTemp = JSONmusician[arrTemp].name;
  } else {
    strTemp = Math.random().toString(36).substring(7);
  }
//  alert(strTemp);
  return strTemp;
} //function
function getMusiciansRemaining() {
  var arrTemp = [];
  for (var i=0; i<=JSONmusician.length; i++) {
    if (JSONband[0].musician.includes(i) == false) {
      //not in player's band so add to add array
      arrTemp.push(i);
    } //if
  } //for
  return arrTemp;
} //function
