
function createAlbum(i) {

  //Get how many Tracks for Album
  var intTracks = JSONtracks[JSONband[i].tracks].tracks;

  //Writes Ablum details to JSON file
  JSONalbum.push({'name':getRandomName(),'tracks':intTracks,'band':i,'active':true}); //add band JSON

  //Get the index of the newly created Album
  var intAlbum = 0;
      intAlbum = parseInt(JSONalbum.length);
      intAlbum = intAlbum - 1; //bloody array 0 starting from zero
      JSONband[i].album = intAlbum;

  //Create Tracks for Album
  for (var z = 0; z < parseInt(intTracks); z++) {
    createTrack(i, intAlbum);
  } //for

  updateBandMoneySubtract(i, JSONtracks[JSONband[i].tracks].money, "record album"); //update band money
//  updateBandMoneySubtract(i, JSONtracks[document.getElementById('selTracksComboBox').value].money, "record album"); //update band money

  loggingOutput("ALBUM RECORDED", JSONband[i].name + " recorded an album called " + JSONalbum[JSONband[i].album].name + " consisting of "+intTracks+" tracks<br>");

} //function


function createTrack(i, intAlbum) {
  //Writes Track details to JSON file
  var strTrackName = getRandomName();
  var intQualityRating = getQualityRatingTrack(i);
  JSONsingle.push({'name':strTrackName,'album':intAlbum, 'active':true, 'qualityRating':intQualityRating, 'recordedDate':GLOBALdatDateCurrent.getTime()});
  loggingOutput("TRACK RECORDED", "The track "+strTrackName+" for the album " + intAlbum  + " has been recorded by " + JSONband[i].name + "<br>");
} //function

function getQualityRatingTrack(i) {
  //Return the quality rating of the track, just add all musician's skill
  var intQualityRating = 0;
  for (a in JSONband[i].musician) {
    //for every musician in the passed in band
    intQualityRating += JSONmusician[a].skill
  }//for
  return intQualityRating;
} //function
