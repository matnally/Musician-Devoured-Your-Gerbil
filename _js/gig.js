
function setGigPlayer(intDays, intVenue, intTicketPrice) {
  //set player's band attributes for appropiate action
  setGig(0, intDays, intVenue, intTicketPrice);
  turnBegin();
} //function

function setGig(i, intDays, intVenue, intTicketPrice) {
  //set band attributes for appropiate action
  JSONband[i].action = 1; //1 = gig
  JSONband[i].days = intDays;
  JSONband[i].dateActionFinish = getActionDateFinish(JSONband[i].days);
  JSONband[i].venue = intVenue;
  JSONband[i].ticketPrice = intTicketPrice;
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

  updateBandMoneySubtract(i, JSONvenue[JSONband[i].venue].money, "gig venue cost"); //VENUE COST
  updateBandMoneyAdd(i, intTicketsProfit, "gig ticket profits"); //update band money ticket sales

  loggingOutput(i, "gig cost", JSONband[i].name + " paid "+ JSONconfig[0].currency + displayNumbersWithCommas(JSONvenue[JSONband[i].venue].money) + " to play " + JSONvenue[JSONband[i].venue].name+" selling "+ displayNumbersWithCommas(intTicketsSold) + " tickets<br>");
  loggingOutput(i, "gig profit", JSONband[i].name + " made " + JSONconfig[0].currency + displayNumbersWithCommas(intTicketsProfit) + " from ticket sales<br>");

  for (a in JSONband[i].musician) {
    //for every musician in the passed in band
    //TODO: turn off for now
    // getEquipmentBonusMusician(i, JSONband[i].musician[a]); //applies any bonus if any
    updateMusicianAttribute(i, JSONband[i].musician[a], "skill", JSONconfig[0].valueGigSkill);
    updateMusicianAttribute(i, JSONband[i].musician[a], "happiness", JSONconfig[0].valueGigHappiness);
    updateMusicianAttribute(i, JSONband[i].musician[a], "reputation", JSONconfig[0].valueGigReputation);
  }//for

} //function


//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function updateBandMoneySubtract(intBand, intCost, strAction) {
  //update band money
  var strTemp = "";
      strTemp = (JSONband[intBand].name + " had " + JSONconfig[0].currency + displayNumbersWithCommas(JSONband[intBand].money) + ". Costs are " + JSONconfig[0].currency + displayNumbersWithCommas(intCost));

  var intTemp = parseInt(JSONband[intBand].money) - parseInt(intCost); // CALC

  JSONband[intBand].money = intTemp; // THE ACTION !!!!!!!!

  loggingOutput(intBand, strAction + " cost", (strTemp + " now has " + JSONconfig[0].currency + displayNumbersWithCommas(JSONband[intBand].money) + "<br>"));

  if ((intBand == 0) && (intTemp < 0)) {
    //Player's band AND no money
    gameEnd(); //end the game
  } //if

} //function

function updateBandMoneyAdd(intBand, intCost, strAction) {
  //update band money

  //TODO: Something wrong here! Investigate

  // var strTemp = "";
  //     strTemp = (JSONband[intBand].name + " had " + JSONconfig[0].currency + displayNumbersWithCommas(JSONband[intBand].money) + " profits are " + JSONconfig[0].currency + displayNumbersWithCommas(intCost));
  //
  // var intTemp = parseInt(JSONband[intBand].money) + parseInt(intCost); // CALC
  // JSONband[intBand].money = intTemp; // THE ACTION !!!!!!!!
  //
  // loggingOutput(intBand, strAction + " profit", (strTemp + " now has " + JSONconfig[0].currency + displayNumbersWithCommas(JSONband[intBand].money) + "<br>"));

} //function
