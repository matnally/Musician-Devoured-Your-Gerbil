function setRecord(intTracks) {
  var intDays = JSONtracks[intTracks].days; //IMPORTANT
  var datDateActionFinish = 0;
      datDateActionFinish = getDateActionFinish(intDays);

  JSONband[0].dateActionFinish = datDateActionFinish;
  JSONband[0].action = 4; //4 = record
  JSONband[0].days = intDays;
  JSONband[0].tracks = JSONtracks[intTracks].tracks;
  showMusicians(); //just to update what player has chosen
} //function

function record() {

} //function
