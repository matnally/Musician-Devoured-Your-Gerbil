
function guiActionCostCalc(intTemp) {
  var strTemp = "";
  strTemp +=  "It will cost " + JSONconfig[0].currency + displayNumbersWithCommas(JSONconfig[0].costPractice) + " per day";
  strTemp +=  "Thats a total of " + JSONconfig[0].currency + displayNumbersWithCommas((JSONconfig[0].costPractice * intTemp)) + " for " +intTemp+ "  days";
  updateElement("divActionCost", strTemp);
} //function
