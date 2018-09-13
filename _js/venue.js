
function getTicketsSold(i) {

  var r  = parseInt(getBandTotalAttributeFromMusicians(i, "reputation"));
  var s  = parseInt(getBandTotalAttributeFromMusicians(i, "skill"));
  var h  = parseInt(getBandTotalAttributeFromMusicians(i, "happiness"));
  var vr = parseInt(JSONvenue[JSONband[i].venue].reputation);
  var tp = parseInt(JSONband[i].ticketPrice);
  var vs = parseInt(JSONvenue[JSONband[i].venue].seats);
  var intTicketsSold = 0;

  /*
    vs = venue seats

    r  = reputation
    s  = skill
    h  = happiness
    vr = venue reputation
    tp = ticket price
  */

  intTicketsSold = ((r+s+h+vr) / (tp/vr)).toFixed(0); // LOGIC

  if (intTicketsSold >= vs) {
    intTicketsSold = vs;
    loggingOutput(i, "gig sold out", JSONband[i].name + " sold out " + JSONvenue[JSONband[i].venue].name+"<br>");
  } //if

  loggingOutput(i, "gig box office", JSONband[i].name + " sold " + intTicketsSold + " tickets out of "+ vs +" total seats at "+JSONconfig[0].currency + JSONband[i].ticketPrice+"<br>");

  return intTicketsSold;
} //function


//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function getBandTotalAttributeFromMusicians(i, strAttribute) {
  var intTemp = 0;
  for (a in JSONband[i].musician) {
    intTemp += JSONmusician[JSONband[i].musician[a]][strAttribute];
  } //for
  return intTemp;
} //function

// The GETS
function getVenue() {
  return Math.floor(Math.random() * JSONvenue.length);
} //function

function getTicketPrice() {
  var intTemp = Math.floor(Math.random() * JSONtickets.length);
  return JSONtickets[intTemp].tickets;
} //function
