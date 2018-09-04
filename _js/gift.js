
function setGift(intDays, intGifts) {
  //set player's band attributes for appropiate action
  JSONband[0].dateActionFinish = getDateActionFinish(intDays);
  JSONband[0].action = 3; //3 = gift
  JSONband[0].days = intDays;
  JSONband[0].gift = intGifts;
  turnBegin();
} //function

function gift(i) {
  /*
    METHOD
    ======
    Get chosen gift
    Go through band to see if chosen gift is musician's gift choice
    Update musician HAPPINESS
  */

  var intBonus = 0;

  var intGift = parseInt(JSONband[i].gift); //get chosen gift

  for (a in JSONband[i].musician) {
    //for every musician in the passed in band
    if (parseInt(JSONmusician[JSONband[i].musician[a]].gift) == intGift) {
      //gift is musician's favourite
      intBonus = JSONconfig[0].sameGiftBonus; //Bonus for favourite gift
      loggingOutput("GIFT BONUS", JSONmusician[JSONband[i].musician[a]].name + " received their favorite gift of " +JSONgift[JSONmusician[JSONband[i].musician[a]].gift].name+ "<br>");
    } //if

    //update happiness
    var intTemp = parseInt(JSONmusician[JSONband[i].musician[a]].happiness) + intBonus;
    JSONmusician[JSONband[i].musician[a]].happiness = intTemp; // THE ACTION !!!!!!!!

//TODO: Take away money!!!!!

  }//for

} //function


//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function getGift() {
  return Math.floor(Math.random() * JSONgift.length);
} //function
