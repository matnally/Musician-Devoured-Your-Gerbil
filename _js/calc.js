
function calcBandReputation(JSONtoUse) {
  //add all musicians reputation return total
  var intTemp = 0;
  var intIndex = 0;
  var intReputation = 0;
//  console.log("calcBandReputation!");
  for (i in JSONtoUse) {
//    intIndex = (JSONtoUse[i]);
//alert(JSONtoUse[i]);
    intReputation = JSONmusician[JSONtoUse[i]].reputation;
//    console.log("" + JSONmusician[JSONtoUse[i]].name + " has " + JSONmusician[JSONtoUse[i]].reputation + " reputation");
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
