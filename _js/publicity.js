
function setPublicityPlayer() {
  //set player's band attributes for appropiate action
  setPublicity(0)
  turnBegin();
} //function

function setPublicity(i) {
  //set band attributes for appropiate action
  JSONband[i].action = 2; //2 = publicity
  JSONband[i].days = JSONconfig[0].valuePublicityDaysDuration;
  JSONband[i].dateActionFinish = getActionDateFinish(JSONband[i].days);
} //function

function publicity(i) {
  /*
    METHOD
    ======
    Get band's reputation
    ?????
  */

  var intPublicity = getPublicityBandBonusReputation(i); // for the band??? in real time (musicians stats are changing)
  for (a in JSONband[i].musician) {
    //for every musician in the passed in band
    updateBandMoneySubtract(i, JSONconfig[0].valuePublicityCost, "publicity"); //update band money
    updateMusicianAttribute(i, a, "reputation", intPublicity);
    loggingOutput("musician publicity", JSONmusician[JSONband[i].musician[a]].name + "got "+intPublicity+" reputation<br>");
  } //for

  // updateBandReputation(i); // Need to do?

} //function


//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function getPublicityBandBonusReputation(i) {
  //WORK OUT Publicity for BAND?????
  var intBonus=0;

  var intBandCurrentReputation = parseInt(getBandAGGattributeFromMusiciansSingle(i, "reputation"));
  var intSUMreputation = parseInt(getBandAGGattributeFromMusicians("reputation"));
  var intAVGreputation = (intSUMreputation / JSONband.length).toFixed(0);

  switch (true) {
    case (intBandCurrentReputation > intAVGreputation):
      //better than the average band
      intBonus = JSONconfig[0].valuePublicityReputationGood;
      loggingOutput("band publicity", JSONband[i].name + " is better than the AVG band "+intBonus+" to rep<br>");
    break;
    case (intBandCurrentReputation <= intAVGreputation):
      //equal or less than the average band
      intBonus = JSONconfig[0].valuePublicityReputationBad;
      loggingOutput("band publicity", JSONband[i].name + " is equal or less than the AVG band "+intBonus+" to rep<br>");
    break;
    default:
      alert("Current band rep: " + intBandCurrentReputation);
      alert("SUM band rep: " + intSUMreputation);
      alert("AVG band rep: " + intAVGreputation);
  } //switch

  return intBonus;
} //function

function getBandAGGattributeFromMusicians(strAttribute) {
  var intTemp = 0;
  for (i in JSONband) {
    //for every band
    for (a in JSONband[i].musician) {
      //for every musician in band
      intTemp += JSONmusician[JSONband[i].musician[a]][strAttribute];
    } //for musician
  } //for band
  return intTemp;
} //function

function getBandAGGattributeFromMusiciansSingle(i, strAttribute) {
  var intTemp = 0;
  for (a in JSONband[i].musician) {
    //for every musician in band
    intTemp += JSONmusician[JSONband[i].musician[a]][strAttribute];
  } //for band
  return intTemp;
} //function
