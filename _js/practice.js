
function setPractice(intDays) {
  //set player's band attributes for appropiate action
  JSONband[0].dateActionFinish = getDateActionFinish(intDays);
  JSONband[0].action = 0; //0 = practice
  JSONband[0].days = parseInt(intDays);
  turnStart(); //starts action for nth days (interval)
} //function

function practice(i) {
  /*
    METHOD
    ======
    Subtract practice cost from Band's money
    Update equipment bonuses
    Update musician SKILL, HAPPINESS, REPUTATION
  */

  updateBandMoneySubtract(i, JSONconfig[0].costPractice, "practice"); //update band money
  for (a in JSONband[i].musician) {
    //update musician attributes
    getEquipmentBonusMusician(i, a); //applies any bonus if any
    updateMusicianAttribute(i, a, "skill", JSONconfig[0].valuePracticeSkill);
    updateMusicianAttribute(i, a, "happiness", JSONconfig[0].valuePracticeHappiness);
    updateMusicianAttribute(i, a, "reputation", JSONconfig[0].valuePracticeReputation);
  }//for musician
  loggingOutput("**********************", "<br>");
} //function


//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function updateMusicianAttribute(intBand, intMusician, strAttribute, intValue) {
  //update musician attribute
  var strTemp = "";
      strTemp = (JSONmusician[JSONband[intBand].musician[intMusician]].name + " had " + JSONmusician[JSONband[intBand].musician[intMusician]][strAttribute] + " change is " + intValue);

  var intTotal = parseInt(JSONmusician[JSONband[intBand].musician[intMusician]][strAttribute]) + intValue; // CALC
  JSONmusician[JSONband[intBand].musician[intMusician]][strAttribute] = intTotal; // THE ACTION !!!!!!!!

  strTemp += (" now has " + JSONmusician[JSONband[intBand].musician[intMusician]][strAttribute] + "<br>");
  loggingOutput("musician " + strAttribute, strTemp); //update the logger
} //function

function getEquipmentBonusMusician(i, a){
  /*
    METHOD
    ======
    If Band's equipment choice matches musician's equipment choice
      Update musician SKILL
  */

  if (JSONband[i].equipment == JSONmusician[JSONband[i].musician[a]].equipment) {
    var intEquipmentBonus = JSONconfig[0].sameEquipmentBonus;
    updateMusicianAttribute(i, a, "skill", intEquipmentBonus); // THE ACTION !!!!!!!!

    loggingOutput("band musician equipment bonus", JSONmusician[JSONband[i].musician[a]].name + " of band " + JSONband[i].name + " using same equipment +1 SKILL bonus<br>");
  } //if
} //function
