function setPublicity(intDays) {
  var datDateActionFinish = 0;
      datDateActionFinish = getDateActionFinish(intDays);
  JSONband[0].dateActionFinish = datDateActionFinish;
  JSONband[0].action = 2; //2 = publicity
  JSONband[0].days = intDays;
  showMusicians(); //just to update what player has chosen
} //function

function publicity(i) {
  //execute publicity for the ith band
  var strTemp = "";
  var intTemp = 0;
  var intIndex = 0;

  for (a in JSONband[i].musician) {
    //for every musician in the passed in band

    strTemp = JSONband[i].musician[a]; //get musician name
    intIndex = parseInt(getBandMusicianJSONindex(strTemp)); //get JSONmusician index from name

    //update reputation
    intTemp = parseInt(JSONmusician[intIndex].reputation) + getPublicity();
      JSONmusician[intIndex].reputation = intTemp;

  }//for

//UPDATE band reputation???
i = updateBandReputation(i);

} //function



function getPublicity() {
  //WORK OUT Publicity!!!
  return 1;
} //function
