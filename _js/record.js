
function setRecord(intTracks) {
  JSONband[0].dateActionFinish = getDateActionFinish(JSONtracks[intTracks].days);
  JSONband[0].action = 4; //4 = record
  JSONband[0].days = JSONtracks[intTracks].days;
  JSONband[0].tracks = JSONtracks[intTracks].tracks;
  turnStartInterval();
} //function

function record() {
  createAlbum(0);
} //function

function setAlbumTracks(intTracks) {
  JSONband[0].tracks = JSONtracks[intTracks].tracks; //gets the number of days needed to record the tracks
}
