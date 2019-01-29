
function setPracticePlayer(intDays) {
  //set player's band attributes for appropiate action
  setPractice(0, intDays);
  turnBegin(); //starts action for nth days (interval)
} //function

function setPractice(i, intDays) {
  //set band attributes for appropiate action
  JSONband[i].action = 0; //0 = practice
  JSONband[i].days = intDays;
  JSONband[i].dateActionFinish = getActionDateFinish(JSONband[i].days);
} //function

function practice(i) {
  updateBandMoneySubtract(i, JSONconfig[0].valuePracticeCost, "practice"); //update band money
  for (a in JSONband[i].musician) {
    //update musician attributes
    // getEquipmentBonusMusician(i, JSONband[i].musician[a]); //applies any bonus if any
    updateMusicianAttribute(i, JSONband[i].musician[a], "skill", JSONconfig[0].valuePracticeSkill);
    updateMusicianAttribute(i, JSONband[i].musician[a], "happiness", JSONconfig[0].valuePracticeHappiness);
    updateMusicianAttribute(i, JSONband[i].musician[a], "reputation", JSONconfig[0].valuePracticeReputation);
  }//for musician
} //function


//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function updateMusicianAttribute(intBand, intMusician, strAttribute, intValue) {
  //update musician attribute
  var strTemp = "";
      strTemp = (JSONmusician[intMusician].name + " had " + JSONmusician[intMusician][strAttribute] + " change is " + intValue);

  var intTotal = parseInt(JSONmusician[intMusician][strAttribute]) + intValue; // CALC

  if (intTotal < 0)
    intTotal = 0; //so no minus numbers

  JSONmusician[intMusician][strAttribute] = intTotal; // THE ACTION !!!!!!!!

  strTemp += (" now has " + JSONmusician[intMusician][strAttribute] + "<br>");
  loggingOutput(intBand, "musician " + strAttribute, strTemp); //update the logger
} //function

function getEquipmentBonusMusician(i, a){



  if (JSONband[i].equipment == JSONmusician[a].equipment) {
    loggingOutput(i, "equipment bonus", "TODO: Wont do now as need to display additions/subtractions correctly<br>");
  //   var intEquipmentBonus = JSONconfig[0].sameEquipmentBonus;
  //   updateMusicianAttribute(i, a, "skill", intEquipmentBonus); // THE ACTION !!!!!!!!
  //   loggingOutput(i, "equipment bonus", JSONmusician[a].name + " of band " + JSONband[i].name + " using same equipment +1 SKILL bonus<br>");
  } //if
} //function
