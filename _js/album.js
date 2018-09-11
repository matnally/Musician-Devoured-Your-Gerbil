
function createAlbum(i) {

  var intTracks = JSONtracks[JSONband[i].tracks].tracks; //Get how many Tracks for Album

  //Writes Ablum details to JSON file
  JSONalbum.push({'name':getRandomName(),'tracks':intTracks,'band':i,'releasedDate':false,'recordedDate':GLOBALdatDateCurrent.getTime()}); //add band JSON
  //Get the index of the newly created Album
  var intAlbum = parseInt(JSONalbum.length-1); //bloody array 0 starting from zero
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
  JSONsingle.push({'name':strTrackName,'album':intAlbum, 'releasedDate':false, 'qualityRating':intQualityRating, 'recordedDate':GLOBALdatDateCurrent.getTime()});
  loggingOutput("TRACK RECORDED", "The track "+strTrackName+" for the album " + JSONalbum[intAlbum].name  + " has been recorded by " + JSONband[i].name + "<br>");
} //function


//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function chkAlreadyHaveAlbum(i) {
  var boolReturnValue = false;
  if (JSONband[i].album == false) {

    if (JSONband[i].album === false)
      boolReturnValue = false;
    else
      boolReturnValue = true;

  } else {
    boolReturnValue = true;
  }
  return boolReturnValue;
} //function

function getQualityRatingTrack(i) {
  //Return the quality rating of the track, just add all musician's skill
  var intQualityRating = 0;
  for (a in JSONband[i].musician) {
    //for every musician in the passed in band
    intQualityRating = intQualityRating + parseInt(JSONmusician[a].skill);
  }//for
  return intQualityRating;
} //function
