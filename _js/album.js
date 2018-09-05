
function createAlbum(i) {
  alert("createAlbum(i): " + i);

  //Get how many Tracks for Album
  var intTracks = JSONtracks[JSONband[i].tracks].tracks;

  //Writes Ablum details to JSON file
  JSONalbum.push({'name':getRandomName(),'tracks':intTracks,'band':i,'active':true}); //add band JSON
console.log(JSONalbum);
  //Get the index of the newly created Album
  var intAlbum = 0;
      intAlbum = parseInt(JSONalbum.length);
      intAlbum = intAlbum - 1; //bloody array 0 starting from zero

alert(i);
  i = parseInt(i);
  JSONband[i].album.push(intAlbum); //add album ref to band's details

  //Create Tracks for Album
  for (var z = 0; z < parseInt(intTracks); z++) {
    createTrack(i, intAlbum);
  } //for

  updateBandMoneySubtract(i, JSONtracks[JSONband[i].tracks].money, "record album"); //update band money
  loggingOutput("ALBUM RECORDED", JSONband[i].name + " recorded an album called " + JSONalbum[intAlbum].name + " consisting of "+intTracks+" tracks<br>");

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
