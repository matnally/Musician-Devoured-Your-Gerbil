function setGig(intDays, intVenue, intTicketPrice) {
  //set player (0) attributes appropiate for action
  var datDateActionFinish = 0;
      datDateActionFinish = getDateActionFinish(intDays);
  JSONband[0].dateActionFinish = datDateActionFinish;
  JSONband[0].action = 1; //1 = gig
  JSONband[0].days = intDays;

  JSONband[0].venue = intVenue;
  JSONband[0].ticketPrice = intTicketPrice;
//  showMusicians(); //just to update what player has chosen
turnStartInterval();
} //function

function gig(i) {
  //execute gig for the ith band
  var strTemp = "";
  var intTemp = 0;
  var intIndex = 0;
  //RANDOM?!?!?!?!
    intTemp = getTicketsSold(i); // CALC somewhere
  loggingOutput("gig cost", JSONband[i].name + " paid "+JSONvenue[JSONband[i].venue].money+" to play "+JSONvenue[JSONband[i].venue].name+" selling "+intTemp+" tickets<br>");
    intTemp = (parseInt(JSONband[i].ticketPrice) * intTemp); //ticket profits CALC
  loggingOutput("gig profit", JSONband[i].name + " made ££"+(intTemp)+" from ticket sales<br>");
  updateBandMoneyCost(i, JSONvenue[JSONband[i].venue].money, "gig"); //update money - venue cost
  updateBandMoneyProfit(i, intTemp, "gig"); //update band money ticket sales

  for (a in JSONband[i].musician) {
    //for every musician in the passed in band
    //SAME EQUIPMENT BONUS
    getEquipmentBonusMusician(i, a); //applies any bonus  if any
    //update skill
    updateMusicianAttribute(i, a, "skill", JSONconfig[0].valueGigSkill);
    updateMusicianAttribute(i, a, "happiness", JSONconfig[0].valueGigHappiness);
    updateMusicianAttribute(i, a, "reputation", JSONconfig[0].valueGigReputation);
  }//for
  loggingOutput("**********************", "<br>");

//TODO:
//ticket sales
//i = updateBandReputation(i);

} //function
