
function setRecordPlayer(intTracks) {
  if (JSONband[0].contract == false) {
    //No albums recorded
    alert("You dont have a record contract yet!");
  } else {
    //set player's band attributes for appropiate action
    setRecord(0, intTracks);
    turnBegin();
  } //if
} //function

function setRecord(i, intTracks) {
  //set band attributes for appropiate action
  JSONband[i].action = 4; //4 = record
  JSONband[i].days = JSONtracks[intTracks].days;
  JSONband[i].dateActionFinish = getActionDateFinish(JSONband[i].days);
  JSONband[i].tracks = intTracks;
} //function
