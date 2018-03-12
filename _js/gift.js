function setGift(intDays, intGifts) {
  var datDateActionFinish = 0;
      datDateActionFinish = getDateActionFinish(intDays);
  JSONband[0].dateActionFinish = datDateActionFinish;
  JSONband[0].action = 3; //3 = gift
  JSONband[0].days = intDays;
  JSONband[0].gift = intGifts;
  showMusicians(); //just to update what player has chosen
} //function

function gift(i) {
  //execute gift for the ith band
  var strTemp = "";
  var intTemp = 0;
  var intGift = 0;
  var intIndex = 0;

  intGift = parseInt(JSONband[i].gift); //get chosen gift

  for (a in JSONband[i].musician) {
    //for every musician in the passed in band

    if (parseInt(JSONmusician[a].gift) == intGift) {
      //gift for band is musician's favourite
      intTemp = JSONgift[a].happiness * 2; //times two bonus!!!
    } else {
      intTemp = JSONgift[a].happiness;
    } //if

    //update reputation
    intTemp = parseInt(JSONmusician[intIndex].happiness) + intTemp;
    JSONmusician[intIndex].happiness = intTemp;

  }//for

//UPDATE band reputation???

} //function


function getGift() {
  return Math.floor(Math.random() * JSONgift.length);
} //function
