
function guiAdminShowJSON(JSONtoUse) {

  console.log("***************** START *********************");
  console.log(JSON.stringify(JSONtoUse));
  console.log("****************** END **********************");

} //function

function adminAdminTurn() {
  JSONband[0].days = 365;
  turnBegin();
} //function
``
function gameCreateMusicians(strJSONtoUse) {

  var strName = "";
  var intReputation = 0;
  var intHappiness = 0;
  var intSkill = 0;
  var intFee = 0;
  var intWage = 0;
  var intGift = 0;
  var intEquipment = 0;

  var JSONtoUse = [];
  var JSONnameSet = [];

  JSONtoUse = eval(strJSONtoUse);
  JSONnameSet = JSONtoUse; //TODO

  JSONmusician = []; //reset!!! Make sure it doesn't affect anything else!

  for (m in JSONnameSet) {
    //for every name in name set

    strName = JSONnameSet[m];

    intSkill      = Math.round((Math.random() * (501 - 100) + 100) /10)*10; //Returns a random number between min (inclusive) and max (exclusive)
    intHappiness  = Math.round((Math.random() * (501 - 100) + 100) /10)*10;

    intFee        = Math.round(((intSkill + intHappiness) * 100) /10000)*10000;
    intWage       = Math.round(((intSkill + intHappiness) * 10) /1000)*1000;
    intReputation = Math.round(((intSkill + intHappiness) * 1) /2);

    intGift = getGift();
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

  getMarkUpGameStartMusician(GLOBALMusiciani);

} //function
