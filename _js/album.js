
function createAlbum(i) {

  //Get how many Tracks for Album
  var intTracks = JSONband[i].tracks;

  //Writes Ablum details to JSON file
  JSONalbum.push({'name':getRandomName(),'tracks':intTracks,'band':i,'active':true}); //add band JSON

  //Get the index of the newly created Album
  var intAlbum = 0;
      intAlbum = parseInt(JSONalbum.length);
      intAlbum = intAlbum - 1; //bloody array 0 starting from zero
      JSONband[i].album = intAlbum;

  //Create Tracks for Album
  for (var z = 0; z < parseInt(intTracks); z++) {
    createTrack(intAlbum);
  } //for

  updateBandMoneySubtract(i, JSONtracks[i].money, "record album"); //update band money

  loggingOutput("ALBUM RECORDED", JSONband[i].name + " recorded an album called " + JSONalbum[JSONband[i].album].name + "<br>");

} //function


function createTrack(intAlbum) {
  //Writes Track details to JSON file
  var strTrackName = getRandomName();
  JSONsingle.push({'name':strTrackName,'album':intAlbum, 'active':true});
  loggingOutput("TRACK RECORDED", "The track "+strTrackName+" of the total for the album " + JSONsingle[intAlbum].name  + " has been recorded by " + JSONband[i].name + "<br>");
} //function
