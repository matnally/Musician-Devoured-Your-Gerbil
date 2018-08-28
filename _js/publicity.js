function setPublicity(intDays) {
  var datDateActionFinish = 0;
      datDateActionFinish = getDateActionFinish(intDays);
  JSONband[0].dateActionFinish = datDateActionFinish;
  JSONband[0].action = 2; //2 = publicity
  JSONband[0].days = intDays;
//  showMusicians(); //just to update what player has chosen
turnStartInterval();
} //function

function publicity(i) {
  //execute publicity for the ith band
  var strTemp = "";
  var intTemp = 0;
  var intIndex = 0;

// TODO: something?!
//but before apply musician attribute?!?

  intTemp = getPublicityBandBonusReputation(i); // for the band??? in real time (musicians stats are changing)
  for (a in JSONband[i].musician) {

    // get change of getting publicity

    //for every musician in the passed in band
    updateMusicianAttribute(i, a, "reputation", intTemp);
      loggingOutput("musician publicity", JSONmusician[JSONband[i].musician[a]].name + "got "+intTemp+" reputation<br>");
  } //for

//i = updateBandReputation(i);

} //function

function getBandAGGattributeFromMusiciansSingle(i, strAGG, strAttribute) {
  var intTemp = 0;
  for (a in JSONband[i].musician) {
    //for every musician in band
    intTemp += JSONmusician[JSONband[i].musician[a]][strAttribute];
    //JSONband[i].musician[a]
  } //for band
  return intTemp;
} //function

function getBandAGGattributeFromMusicians(strAGG, strAttribute) {
  var intTemp = 0;
  for (i in JSONband) {
    //for every band
    for (a in JSONband[i].musician) {
      //for every musician in band
      intTemp += JSONmusician[JSONband[i].musician[a]][strAttribute];
      //JSONband[i].musician[a]
    } //for band
  } //for band
  return intTemp;
} //function


function getPublicityBandBonusReputation(i) {
  //WORK OUT Publicity for BAND?????
  var intTemp=0;
  var intBonus=0;

  var intBandCurrentReputation = parseInt(getBandAGGattributeFromMusiciansSingle(i, "sum", "reputation"));
  var intSUMreputation = parseInt(getBandAGGattributeFromMusicians("sum", "reputation"));
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
      loggingOutput("band publicity", JSONband[i].name + " is less than the AVG band "+intBonus+" to rep<br>");
    break;
    default:
      alert("Current band rep: " + intBandCurrentReputation);
      alert("SUM band rep: " + intSUMreputation);
      alert("AVG band rep: " + intAVGreputation);
  } //switch

  intTemp += intBonus;
  return intTemp;
} //function
