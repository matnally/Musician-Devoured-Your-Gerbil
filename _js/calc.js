
function calcBandReputation(JSONtoUse) {
  var intTemp = 0;
  for (i in JSONtoUse) {
    intTemp += parseInt(JSONmusician[JSONtoUse[i]].reputation);
  } //for
  return intTemp;
}
