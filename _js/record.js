
function setRecordPlayer(intTracks) {
  //set player's band attributes for appropiate action
  if (JSONband[0].contract == false) {
    alert("Not signed yet!");
  } else {
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
