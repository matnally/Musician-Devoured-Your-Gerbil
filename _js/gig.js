
function setGig(intDays, intVenue, intTicketPrice) {
  //set player's band attributes for appropiate action
  JSONband[0].dateActionFinish = getDateActionFinish(intDays);
  JSONband[0].action = 1; //1 = gig
  JSONband[0].days = intDays;
  JSONband[0].venue = intVenue;
  JSONband[0].ticketPrice = intTicketPrice;
  turnBegin();
} //function

function gig(i) {
  /*
    METHOD
    ======
    Get tickets sold
    Get ticket sales total (tickets sold * ticket price)
    Subtract venue cost from Band's money
    Add ticket sales total to Band's money
    Update equipment bonuses
    Update musician SKILL, HAPPINESS, REPUTATION
  */

  var intTicketsSold = getTicketsSold(i); // CALC somewhere
  var intTicketsProfit = parseInt(JSONband[i].ticketPrice) * intTicketsSold; //ticket profits CALC

  updateBandMoneySubtract(i, JSONvenue[JSONband[i].venue].money, "gig"); //VENUE COST
  updateBandMoneyAdd(i, intTicketsProfit, "gig"); //update band money ticket sales

  loggingOutput("gig cost", JSONband[i].name + " paid "+JSONvenue[JSONband[i].venue].money+" to play "+JSONvenue[JSONband[i].venue].name+" selling "+intTicketsSold+" tickets<br>");
  loggingOutput("gig profit", JSONband[i].name + " made " + JSONconfig[0].currency + intTicketsProfit + " from ticket sales<br>");

  for (a in JSONband[i].musician) {
    //for every musician in the passed in band
    getEquipmentBonusMusician(i, a); //applies any bonus if any
    updateMusicianAttribute(i, a, "skill", JSONconfig[0].valueGigSkill);
    updateMusicianAttribute(i, a, "happiness", JSONconfig[0].valueGigHappiness);
    updateMusicianAttribute(i, a, "reputation", JSONconfig[0].valueGigReputation);
  }//for
  loggingOutput("**********************", "<br>");

} //function


//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function updateBandMoneySubtract(intBand, intCost, strAction) {
  //update band money
  var strTemp = "";
      strTemp = (JSONband[intBand].name + " had " + JSONconfig[0].currency + displayNumbersWithCommas(JSONband[intBand].money) + " costs are " + JSONconfig[0].currency + displayNumbersWithCommas(intCost));

  var intTemp = parseInt(JSONband[intBand].money) - parseInt(intCost); // CALC
  JSONband[intBand].money = intTemp; // THE ACTION !!!!!!!!

  loggingOutput(strAction + " cost", (strTemp + " now has " + JSONconfig[0].currency + displayNumbersWithCommas(JSONband[intBand].money) + "<br>"));
} //function

function updateBandMoneyAdd(intBand, intCost, strAction) {
  //update band money
  var strTemp = "";
      strTemp = (JSONband[intBand].name + " had " + JSONconfig[0].currency + displayNumbersWithCommas(JSONband[intBand].money) + " profits are " + JSONconfig[0].currency + displayNumbersWithCommas(intCost));

  var intTemp = parseInt(JSONband[intBand].money) + parseInt(intCost); // CALC
  JSONband[intBand].money = intTemp; // THE ACTION !!!!!!!!

  loggingOutput(strAction + " profit", (strTemp + " now has " + JSONconfig[0].currency + displayNumbersWithCommas(JSONband[intBand].money) + "<br>"));
} //function
