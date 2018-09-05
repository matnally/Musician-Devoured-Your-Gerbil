
//BAND CREATION FUNCTIONS

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
    var intRandomEquipment = getBandEquipment(); //get random equipment
    //CREATES band - GLOBALdatDateCurrent used for dateActionFinish so triggers actionChoose
    JSONband.push({'name':strName, 'money':JSONconfig[0]["moneyNormal"], 'contract':getContract(), 'reputation':intReputation, 'musician':arrTemp, 'equipment':intRandomEquipment, 'days':0, 'dateActionFinish':GLOBALdatDateCurrent, 'album':false, 'tracks':0}); //add band JSON
  } while (arrMusiciansRemaining.length > 0); //do  // SHOULD BE 1??????????? ABOVE IN THE DO WHILE

} //function






























function updateBandReputation(intI) {
  var bob = [];
  bob = calcBandReputation(JSONband[intI].musician);
  JSONband[intI].reputation = bob;
  return intI;
} //function

function calcBandReputation(JSONtoUse) {
  //add all musicians reputation return total
  var intTemp = 0;
  var intIndex = 0;
  var intReputation = 0;

  for (i in JSONtoUse) {
    intReputation = JSONmusician[JSONtoUse[i]].reputation;
    intTemp += parseInt(intReputation);
  } //for

intTemp = 5000;//TODO: CHEATING FOR TESTING PURPOSES

  return intTemp;
} //function

function getBandMusicianJSONindex(strName) {
  //returns the JSON index of the corressponding name
  var intIndex = 0;
  for (i in JSONmusician) {
    if (JSONmusician[i].name == strName) {
        //found musician
        intIndex = i;
    } //if
  } //for
  return intIndex;
} //function

///////The GETS!//////
var GLOBALdatDateCurrent = new Date("01/01/1989"); // GLOBAL!!!!!  mm/dd/yyyy
function getDateCurrent() {
  //returns the in-game current date
  var datCurrent = GLOBALdatDateCurrent;
//  datCurrent = GLOBALdatDateCurrent.getFullYear() +"/"+ GLOBALdatDateCurrent.getMonth() +"/"+ GLOBALdatDateCurrent.getDate();
  return datCurrent;
} //function
function getDateActionFinish(i) {
  //calc what in-game date action will finish
  var tmpDate = new Date(getDateCurrent());
  tmpDate.setDate(tmpDate.getDate() + parseInt(i));
  return tmpDate;
} //function

function getDays(intMax) {
  return Math.floor(Math.random() * intMax) + 1;
} //function
function getBandEquipment() {
  return Math.floor(Math.random() * JSONequipment.length);
} //function
function getBandName(arrTemp) {
  //returns a random band name string
  var strTemp = "";
  switch (arrTemp.length) {
    case 1:
      strTemp = JSONmusician[arrTemp[0]].name; //only one member of band so just call band their name
    break;
    // case 2:
    //   //choose either make up band name using surnames or just band name
    //   strTemp = Math.random().toString(36).substring(7);
    // break;
    default:
      strTemp = getRandomName();
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

function getRandomName() {
  return createName();
} //function
function createName() {

  var prefixes = ['Flaming', 'Black', 'Talking', 'Broken', 'Ashen', 'Rainbow', 'Wandering', 'Lost', 'Breathing', 'Rough', 'Rolling', 'Thundering', 'Hipster', 'Punk', 'Goth', 'White', 'Pale', 'Lunar', 'Mystic', 'Screaming', 'Sexy','Diabolical', 'Evil', 'Thumping', 'Ascending', 'Falling', 'Spinning', 'Drooling', 'Secret', 'Mad', 'Hot', 'Veiled', 'Hidden', 'Psychic', 'Nightly', 'Eerie', 'Transparent', 'Wild', 'Smashing', 'Chunking', 'Guns and', 'Roamin\' ', 'Stylish', 'Creepy', 'Nerdy', 'Anti','Panoramic', 'McShizzle', 'Pensive', 'Crushing', 'Dead Man\'s', 'Lords of', 'Burnt', 'Wheeled', 'Living', 'Azure', 'Undead', 'Exploding', 'Spiralling', 'Boom-boom', 'Serious', 'Stoic', 'Deep', 'Somber', 'Squirming', 'Vanilla', 'Screeching', 'Thrashing', 'Selective', 'Swift', 'Soaring', 'Mighty'];
  var suffixes = ['Flames', 'Banisters', 'Skulls', 'Unicorns', 'Souls', 'Corpses', 'Flannel', 'Zombies', 'Lampshades', 'Scientists', 'Ghosts', 'Dude and His Merry Gang of Band Nerds', 'Hunters', 'Sirens', 'Lozenges', 'Stones', 'Heads', 'Hands', 'Cerulean', 'Lightning', 'Blades', 'Gang', 'Homeboys', 'Critics', 'Emos', 'Rebels','Pirates', 'Pumpkins', 'Roses', 'Demons', 'Tractors', 'Men', 'Gals', 'Riders', 'Ray-Bans', 'Trenchcoats', 'Creepers', 'Gravity', 'Diamonds', 'Mirrors', 'Jefes', 'Esperantos', 'Crimson', 'Wrappers', ' José y los gauchos' , 'Heat', 'Fever', 'Wave', 'Spell', 'Spectacle', 'Voices', 'Group', 'Fliers', 'Homies', 'Rum', 'Wheels', 'Brits', 'Machines', 'Assassination', 'Flint', 'Noises', 'Perspiration', 'Perpetrator', 'Betrayed', 'Wasslers', 'Whirlpool', 'Pistols', 'Boulders', 'Trinkets', 'Rag Dolls', 'Bazookas', 'Popsicle', 'Ice Cubes', 'Banshees', 'Frost', 'Darkness', 'Beat', 'Freeze', 'Kittens', 'Superheroes', 'Bagel', 'Flaxseeds', 'Children', 'Love', 'Equinox', 'Life'];

  var random_pre = prefixes[Math.floor(Math.random()*prefixes.length)];
  var random_suf = suffixes[Math.floor(Math.random()*suffixes.length)];
      random_pre = prefixes[Math.floor(Math.random()*prefixes.length)]; //??? so no randoms?
      random_suf = suffixes[Math.floor(Math.random()*suffixes.length)]; //??? so no randoms?

  return (random_pre + ' ' + random_suf);
} //function
