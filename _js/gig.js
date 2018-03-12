function setGig(intDays, intVenue, intTicketPrice) {
  //set player (0) attributes appropiate for action
  var datDateActionFinish = 0;
      datDateActionFinish = getDateActionFinish(intDays);
  JSONband[0].dateActionFinish = datDateActionFinish;
  JSONband[0].action = 1; //1 = gig
  JSONband[0].days = intDays;

  JSONband[0].venue = intVenue;
  JSONband[0].ticketPrice = intTicketPrice;
  showMusicians(); //just to update what player has chosen
} //function




function getTicketsSold(i) {
  return Math.floor(Math.random() * JSONvenue[JSONband[i].venue].seats);
} //function


function gig(i) {
  //execute gig for the ith band

  var strTemp = "";
  var intTemp = 0;
  var intIndex = 0;


  //update momey - venue cost
  intTemp = parseInt(JSONband[i].money) - parseInt(JSONvenue[JSONband[i].venue].money);
    JSONband[i].money = intTemp;

  //update momey - ticket sales
  intTemp = getTicketsSold(i);
  if (intTemp >= parseInt(JSONvenue[JSONband[i].venue].seats)) {
    alert("sold out gig!");
  }

//  console.log(JSONband[i].name + " gigged at " + JSONvenue[JSONband[i].venue].name + " ("+intTemp +" seats at £"+JSONband[i].ticketPrice+" per ticket)");

  intTemp = parseInt(JSONband[i].ticketPrice) * intTemp;
  intTemp = parseInt(JSONband[i].money) + intTemp;
    JSONband[i].money = intTemp;



  for (a in JSONband[i].musician) {
    //for every musician in the passed in band

    //update skill
    intTemp = parseInt(JSONmusician[a].skill) + JSONconfig[0].valueGigSkill;
      JSONmusician[a].skill = intTemp;
    //update happiness
    intTemp = parseInt(JSONmusician[a].happiness) + JSONconfig[0].valueGigHappiness;
      JSONmusician[a].happiness = intTemp;
    //update reputation
    intTemp = parseInt(JSONmusician[a].reputation) + JSONconfig[0].valueGigReputation;
      JSONmusician[a].reputation = intTemp;

//UPDATE band reputation???

  }//for

//TODO:
//ticket sales
i = updateBandReputation(i);

} //function



function getTicketPrice() {
  return Math.floor(Math.random() * JSONtickets.length);
} //function
