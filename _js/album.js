
function createAlbum(i) {

  //Get how many Tracks for Album
  var intTracks = JSONband[i].tracks;

  //Writes Ablum details to JSON file
  JSONalbum.push({'name':getRandomName(),'tracks':JSONtracks[intTracks].tracks,'band':i,'active':true}); //add band JSON

  //Get the index of the newly created Album
  var intAlbum = 0;
      intAlbum = parseInt(JSONalbum.length);
      intAlbum = intAlbum - 1; //bloody array 0 starting from zero
      JSONband[i].album = intAlbum;

  //Create Tracks for Album
  for (var z = 0; z < parseInt(JSONtracks[intTracks].tracks); z++) {
    createTrack(intAlbum);
  } //for

  //******************************
  //TODO:
  //MONEY?!
  //******************************

} //function


function createTrack(intAlbum) {
  //Writes Track details to JSON file
  JSONsingle.push({'name':getRandomName(),'album':intAlbum, 'active':true});
} //function
