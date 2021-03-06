
function gameCreateMusicians(strJSONtoUse) {

  var strName = "";
  var intReputation = 0;
  var intHappiness = 0;
  var intSkill = 0;
  var intFee = 0;
  var intWage = 0;
  var intGift = 0;
  var intEquipment = 0;

  var intTotal = 0

  var JSONtoUse = [];
  var JSONnameSet = [];

  JSONtoUse = eval(strJSONtoUse); //get array from name
  JSONnameSet = JSONtoUse; //TODO

  JSONmusician = []; //reset!!! Make sure it doesn't affect anything else!

  for (m in JSONnameSet) {
    //for every name in name set

    strName = JSONnameSet[m];

    intSkill      = Math.round((Math.random() * (JSONconfig[0].MusicianSkill - 100) + 100) / 10) * 10; //Returns a random number between min (inclusive) and max (exclusive)
    intHappiness  = Math.round((Math.random() * (JSONconfig[0].MusicianHappiness - 100) + 100) / 10) * 10;
    intReputation = Math.round((Math.random() * (JSONconfig[0].MusicianReputation - 100) + 100) / 10) * 10;

    intTotal = intSkill + intHappiness + intReputation;

    intFee  = Math.round(((intTotal * 100) / 1000) * 1000);
    intWage = Math.round(((intTotal * 10) / 100) * 100);

    intGift      = getGift();
    intEquipment = getEquipment();

    JSONmusician.push({
      'name': strName
      ,'reputation': intReputation
      ,'happiness': intHappiness
      ,'skill': intSkill
      ,'fee': intFee
      ,'wage': intWage
      ,'gift': intGift
      ,'equipment': intEquipment
    }); //push

  } //for

} //function

function gameQuickStart() {

  gameSetSettings();
  bandAddMusician(3);
  bandAddMusician(8);
  gameStart();

} //function

function gameQuickStartFullYear() {

  gameSetSettings();
  bandAddMusician(10);
  bandAddMusician(11);
  bandAddMusician(12);
  gameStart();
  setPractice(0, 365); //practice for a year
  turnBegin();

} //function

function changeTheme(strTheme) {
  JSONconfig[0].imagesFolder = JSONconfig[0][strTheme];
} //function

function guiAdminShowJSON(JSONtoUse) {
  console.log("***************** START *********************");
  console.log(JSON.stringify(eval(JSONtoUse)));
  console.log("****************** END **********************");
} //function
