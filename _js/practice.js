function setPractice(intDays) {
  //set player (0) attributes appropiate for action
  var datDateActionFinish = 0;
      datDateActionFinish = getDateActionFinish(intDays);
  JSONband[0].dateActionFinish = datDateActionFinish;
  JSONband[0].action = 0; //0 = practice
  JSONband[0].days = parseInt(intDays);
//  showMusicians(); //just to update what player has chosen
  turnStartInterval();
} //function

function updateBandMoneyCost(intBand, intCost, strAction) {
  //update band money
  var strTemp = "";
  var intTemp = "";
  strTemp = (JSONband[intBand].name + " had " + JSONconfig[0].currency + displayNumbersWithCommas(JSONband[intBand].money) + " costs are " + JSONconfig[0].currency + displayNumbersWithCommas(intCost));
    intTemp = parseInt(JSONband[intBand].money) - parseInt(intCost); // CALC
    JSONband[intBand].money = intTemp; // THE ACTION !!!!!!!!
  loggingOutput(strAction + " cost", (strTemp + " now has " + JSONconfig[0].currency + displayNumbersWithCommas(JSONband[intBand].money) + "<br>"));
} //function
function updateBandMoneyProfit(intBand, intProfit, strAction) {
  //update band money
  var strTemp = "";
  var intTemp = "";
  strTemp = (JSONband[intBand].name + " had " + JSONconfig[0].currency + displayNumbersWithCommas(JSONband[intBand].money) + " profits are " + JSONconfig[0].currency + displayNumbersWithCommas(intProfit));
    intTemp = parseInt(JSONband[intBand].money) + parseInt(intProfit); // CALC
    JSONband[intBand].money = intTemp; // THE ACTION !!!!!!!!
  loggingOutput(strAction + " profit", (strTemp + " now has " + JSONconfig[0].currency + displayNumbersWithCommas(JSONband[intBand].money) + "<br>"));
} //function

function updateMusicianAttribute(intBand, intMusician, strAttribute, intValue) {
  //update musician attribute
  var strTemp = "";
      strTemp = (JSONmusician[JSONband[intBand].musician[intMusician]].name + " had " + JSONmusician[JSONband[intBand].musician[intMusician]][strAttribute] + " change is " + intValue);
  var intTotal = 0;
      intTotal = parseInt(JSONmusician[JSONband[intBand].musician[intMusician]][strAttribute]) + intValue; // CALC
        JSONmusician[JSONband[intBand].musician[intMusician]][strAttribute] = intTotal; // ACTION
      strTemp += (" now has " + JSONmusician[JSONband[intBand].musician[intMusician]][strAttribute] + "<br>");
      loggingOutput("musician " + strAttribute, strTemp); //update the logger
} //function

function practice(i) {
  //execute practice for the ith band
  var intEquipment = 0;
  updateBandMoneyCost(i, JSONconfig[0].costPractice, "practice"); //update band money
  for (a in JSONband[i].musician) {
    //SAME EQUIPMENT BONUS
    getEquipmentBonusMusician(i, a); //applies any bonus  if any
    //update musician attributes
    updateMusicianAttribute(i, a, "skill", JSONconfig[0].valuePracticeSkill);
    updateMusicianAttribute(i, a, "happiness", JSONconfig[0].valuePracticeHappiness);
    updateMusicianAttribute(i, a, "reputation", JSONconfig[0].valuePracticeReputation);
  }//for musician
  loggingOutput("**********************", "<br>");
} //function
function getEquipmentBonusMusician(i, a){
  var intEquipmentBonus = 0; //reset
  if (JSONband[i].equipment == JSONmusician[JSONband[i].musician[a]].equipment) {
    intEquipmentBonus = JSONconfig[0].sameEquipmentBonus;
    loggingOutput("band musician equipment bonus", JSONmusician[JSONband[i].musician[a]].name + " of band " + JSONband[i].name + " using same equipment +1 SKILL bonus<br>");
    updateMusicianAttribute(i, a, "skill", intEquipmentBonus);
  } //if
} //function



function updateBandReputation(intI) {
  var bob = [];
//  console.log("intI B4: " + intI);
  bob = calcBandReputation(JSONband[intI].musician);
  JSONband[intI].reputation = bob;
//  console.log("intI After: " + intI);
  return intI;
} //function
