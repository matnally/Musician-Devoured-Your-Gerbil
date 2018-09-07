
function setGiftPlayer(intGifts) {
  //set player's band attributes for appropiate action
  setGift(0, intGifts);
  turnBegin();
} //function

function setGift(i, intGift) {
  //set band attributes for appropiate action
  JSONband[i].gift = intGift;
  JSONband[i].action = 3; //3 = gift
  JSONband[i].days = JSONconfig[0].valueGiftDaysDuration;
  JSONband[i].dateActionFinish = getActionDateFinish(JSONband[i].days);
} //function

function gift(i) {
  /*
    METHOD
    ======
    Get chosen gift
    Go through band to see if chosen gift is musician's gift choice
    Update musician HAPPINESS
    Update band money
  */

  var intBonus = 0;
  var intGift = parseInt(JSONband[i].gift); //get chosen gift
  var intTotal = 0;

  for (a in JSONband[i].musician) {
    //for every musician in the passed in band

    intTotal += parseInt(JSONgift[JSONband[i].gift].money); //build up total copst of gifts

    if (parseInt(JSONmusician[JSONband[i].musician[a]].gift) == intGift) {
      //gift is musician's favourite
      intBonus = JSONconfig[0].sameGiftBonus; //Bonus for favourite gift
      loggingOutput("GIFT BONUS", JSONmusician[JSONband[i].musician[a]].name + " received their favorite gift of " +JSONgift[JSONmusician[JSONband[i].musician[a]].gift].name+ "<br>");
    } //if

    //update happiness
    var intTemp = parseInt(JSONmusician[JSONband[i].musician[a]].happiness) + intBonus;
    JSONmusician[JSONband[i].musician[a]].happiness = intTemp; // THE ACTION !!!!!!!!

  }//for

  updateBandMoneySubtract(i, intTotal, "gift"); //updates band money

} //function


//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function getGift() {
  return Math.floor(Math.random() * JSONgift.length);
} //function
