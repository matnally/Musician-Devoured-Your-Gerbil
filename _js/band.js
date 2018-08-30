
function musicianAdd(index) {
  //Add musician index to band musician array
  JSONband[0].musician.push(index);
  //Update and display the comboBox
  updateElement("divBandComboBox", createComboBoxfromJSONband(JSONband[0].musician));
} //function

function bandCreatePlayerStart() {
  setMusicianEquipment(); //cheating so random i dont have to input them all
  bandCreatePlayer(JSONband[0]); //create band from player's chosen musicians
  bandCreateOther(); //creates bands from the remaining musicians
  bandOtherActionChoose(); //sets an action to each band CALLED !!!ONLY ONCE!!!
  showMusicians();
} //function

function setMusicianEquipment() {
  //random equipment SET
  for (i in JSONmusician) {
    JSONmusician[i].equipment = getMusicianEquipment();
  } //for
} //function
function getMusicianEquipment() {
  return Math.floor(Math.random() * JSONequipment.length);
} //function

function bandCreatePlayer(JSONtoUse) {
  JSONtoUse.name = document.getElementById("inpBandName").value;
JSONtoUse.reputation = calcBandReputation(JSONtoUse.musician);
JSONtoUse.reputation = 5000; //TODO: CHEATING FOR TESTING PURPOSES
  JSONtoUse.equipment = document.getElementById("selEquipmentComboBox").value;
  JSONtoUse.money = JSONconfig[0].moneyMedium;
  actionChoose(0); // init for PLAYER ONLY BAND
} //function

function bandCreateOther() {
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
    for (var i=1; i<=intMusiciansToAdd; i++) {  // WHY 1 ?!?!?!?!?!
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
    JSONband.push({'name':strName, 'money':JSONconfig[0].moneyMedium, 'contract':false, 'reputation':intReputation, 'musician':arrTemp, 'equipment':intRandomEquipment, 'days':0, 'dateActionFinish':GLOBALdatDateCurrent, 'album':false, 'tracks':0}); //add band JSON
  } while (arrMusiciansRemaining.length > 0); //do  // SHOULD BE 1??????????? ABOVE IN THE DO WHILE

} //function

function bandOtherActionChoose() {
  //set each band's action attribute
  for (i in JSONband) {
    actionChoose(i);
  } //for
} //function
function actionChoose(i) {
  //sets but doesn't execute action for a band

  var intDays = 0;
  var intGifts = 0;
  var intVenue = 0;
  var intTicketPrice = 0;
  var intTracks = 0;

  var intAction = 0;
      intAction = Math.floor(Math.random() * 6); //randomise action

  //START CHECK record / release
  if ((intAction == 4) || (intAction == 5)) { // 4 = record - 5 = release
    //record / release has been chosen as an action
    if (chkAlreadyHaveContract(i) == false) {
      //band DOES NOT have a record contract already so can't choose 4 or 5
      do {
        //redo action
        intAction = Math.floor(Math.random() * 6); //randomise action
      } while ((intAction == 4)||(intAction == 5)); //do
    } else {
      //band DOES have a record contract already

      //START CHECK has recorded album?
      if (JSONband[i].album == false) {
        //band HAS NOT recorded an album yet so can't release (5)
        do {
          //redo action
          intAction = Math.floor(Math.random() * 6); //randomise action
        } while (intAction == 5); //do 5 = release
      } else {
        //band HAS recorded an album and is active so can't rerecord (4) but can release (5)
        do {
          //redo action
          intAction = Math.floor(Math.random() * 6); //randomise action
        } while (intAction == 4); //do 4 = record
      } //if  (JSONband[i].album == false)
      //END CHECK has recorded album?

    } //if chkAlreadyHaveContract
  } //if ((intAction == 4) || (intAction == 5))
  //END CHECK record / release

  switch(intAction) {
    case 0:
      //practice
      intDays = getDays(7);
    break;
    case 1:
      //gig
      intDays = getDays(7);
      intVenue = getVenue();
      intTicketPrice = getTicketPrice();
    break;
    case 2:
      //publicity
      intDays = 1;
    break;
    case 3:
      //gifts
      intDays = 1;
      intGifts = getGift();
    break;
    case 4:
      //record

      //get the number of days needed to record album
      intTracks = getTracks();
      intDays = JSONtracks[intTracks].days;

    break;
    case 5:
      //release
      intDays = 1;
    break;
  } //switch

  var datDateActionFinish = 0;
      datDateActionFinish = getDateActionFinish(intDays);

  //action chosen so update band object
  JSONband[i].action = intAction;
  JSONband[i].days = intDays;
  JSONband[i].dateActionFinish = datDateActionFinish;
  JSONband[i].gift = intGifts;
  JSONband[i].venue = intVenue;
  JSONband[i].ticketPrice = intTicketPrice;
  JSONband[i].tracks = intTracks;

} //function














function bandOtherActionExecute() {
  //execute each band's action

  for (i in JSONband) {
    //looping through all the bands

    //action finish check
    var datDateActionFinish = new Date(JSONband[i].dateActionFinish);
    if (GLOBALdatDateCurrent.getTime() === datDateActionFinish.getTime()) {
      //today is the day the action move finishes
      if (i != 0) { //NOT equals zero so its NOT the player's band (first created)
        actionChoose(i);  //sets next action for a band  IMPORTANT!!!
      } else {
        clearTimeout(GLOBALintervalTurn); //IMPORTANT!!!
      } //if (i != 0)
    } //if

    loggingOutput(JSONband[i].name + " TURN", "*****" + getActionName(JSONband[i].action) + "*****<br>");

    switch((JSONband[i].action)) {
      case 0:
        //practice
        practice(i);
      break;
      case 1:
        //gig
        gig(i);
      break;
      case 2:
        //publicity
        publicity(i);
      break;
      case 3:
      //gift
        gift(i);
      break;
      case 4:
        //record
        //CAN'T CREATE ALBUM EVERY DAY SO CHECK!
        if (!JSONband[i].album) //only run on first instance???
          createAlbum(i); //creates the album!
      break;
      case 5:
        //release
        release(i);
      break;
      default:
    } //switch

  } //for

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
