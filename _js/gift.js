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
//console.log(JSONband[i].name + " gift is " + JSONband[i].gift);
  intGift = parseInt(JSONband[i].gift); //get chosen gift

  for (a in JSONband[i].musician) {
    //for every musician in the passed in band

//    console.log(JSONmusician[JSONband[i].musician[a]].name + " fav gift is " + JSONmusician[JSONband[i].musician[a]].gift);

    if (parseInt(JSONmusician[JSONband[i].musician[a]].gift) == intGift) {
      //gift for band is musician's favourite
//      intTemp = JSONgift[JSONband[i].musician[a]].happiness; //times two bonus???
    } else {
  //    intTemp = JSONgift[JSONband[i].musician[a]].happiness;
    } //if

    //update reputation
    intTemp = parseInt(JSONmusician[JSONband[i].musician[a]].happiness) + intTemp;
    JSONmusician[JSONband[i].musician[a]].happiness = intTemp;

  }//for

//UPDATE band reputation???

} //function


function getGift() {
  return Math.floor(Math.random() * JSONgift.length);
} //function
