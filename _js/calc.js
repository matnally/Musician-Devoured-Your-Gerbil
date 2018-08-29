
function guiActionCostCalc(index) {

  var strTemp = "";

  switch(index) {
    case 0:
      //practice
      strTemp = "To Practice for " + document.getElementById("divPracticeComboBox").value + " days will cost £" + (document.getElementById("divPracticeComboBox").value * JSONconfig[0].costPractice);
    break;
    case 1:
      //gig
      strTemp = "Gigging for " + document.getElementById("divGigDays").value + " days at "+JSONvenue[document.getElementById("selVenueComboBox").value].name+" will cost £" + (document.getElementById("divGigDays").value * JSONlocation[document.getElementById("selVenueComboBox").value].money);
    break;
    case 2:
      //publicity
      strTemp = "publicity";
    break;
    case 3:
      //gifts
      strTemp = "Buying the gift of " + JSONgift[document.getElementById("selGiftComboBox").value].name + " for " + JSONband[0].musician.length + " band member(s) will cost £" + (JSONgift[document.getElementById("selGiftComboBox").value].money * JSONband[0].musician.length);
    break;
    case 4:
      //record
    break;
    case 5:
      //release
    break;
  } //switch

  // strTemp +=  "It will cost " + JSONconfig[0].currency + displayNumbersWithCommas(JSONconfig[0].costPractice) + " per day";
  // strTemp +=  "Thats a total of " + JSONconfig[0].currency + displayNumbersWithCommas((JSONconfig[0].costPractice * intTemp)) + " for " +intTemp+ "  days";
  updateElement("divActionCost", strTemp);
} //function
