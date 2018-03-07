

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

  console.log("JSONband length b4: " + JSONband[0].musician.length);
  JSONband[0].musician.push(index);
  console.log("JSONband length after: " + JSONband[0].musician.length);
  for (i in JSONband[0].musician) {
    console.log("arry: " + JSONband[0].musician);
    console.log("JSONmusician[JSONband[0].musician].name: " + JSONmusician[JSONband[0].musician[i]].name);
    console.log("i in JSONband[0].musician: " + JSONband[0].musician);
    var strTemp = createComboBoxfromJSONband(JSONband[0].musician);
  }
  console.log(strTemp);
  updateElement("divBandComboBox", strTemp);

} //function

function bandSetName() {
} //function

function bandSetEquipment() {
} //function

function bandCreate() {

  JSONband[0].name = "Band name";
  JSONband[0].reputation = calcBandReputation();
  // JSONband[0].musician = "";
  JSONband[0].equipment = 1;

  console.log(JSONband[0]);
  console.log(JSONband[0].musician);
} //function
