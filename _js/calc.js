
function calcBandReputation(JSONtoUse) {
  //add all musicians reputation return total
  var intTemp = 0;
  var intIndex = 0;
  var intReputation = 0;
//  console.log("calcBandReputation!");
  for (i in JSONtoUse) {
    intIndex = getBandMusicianJSONindex(JSONtoUse[i]);
    intReputation = JSONmusician[intIndex].reputation;
//    console.log("JSONmusician[intIndex].name: " + JSONmusician[intIndex].name);
    intTemp += parseInt(intReputation);
  } //for
//  alert(intTemp);
  return intTemp;
} //function

function getBandMusicianJSONindex(strName) {
  //returns the JSON index of the corressponding name
  var intIndex = 0;
  for (i in JSONmusician) {
    // console.log("JSONmusician[i].name: " + JSONmusician[i].name);
    // console.log("strName: " + strName);
    if (JSONmusician[i].name == strName) {
        //found musician
        intIndex = i;
    }
  } //for
  return intIndex;
} //function
