
function createAlbum(i) {

  var intAlbum = 0;
  var intTracks = 0;
      intTracks = JSONband[i].tracks;

  var strAlbum = "";
      strAlbum = getRandomName();

  JSONalbum.push({'name':strAlbum,'tracks':JSONtracks[intTracks].tracks,'band':i,'active':true}); //add band JSON

  var mat = 0;
      mat = parseInt(JSONalbum.length);
      mat = mat - 1; //bloody array 0 starting from zero
      JSONband[i].album = mat;

  //create singles for the album based on chosen tracks
  for (var z=0;z<parseInt(JSONtracks[intTracks].tracks);z++) {
    createSingle(mat);
  } //for

//  console.log(JSONband[i].name + "has created the '" + JSONalbum[mat].name + " - " +JSONtracks[intTracks].name+ "' album with " +JSONtracks[intTracks].tracks+ " tracks");
  var intBob = 0;
//  console.log("The  album '" + JSONalbum[mat].name + " ' has the following "+JSONtracks[intTracks].tracks+" tracks:");
  for (y in JSONsingle) {
    if (JSONsingle[y].album == mat) {
      //single belongs to album
      intBob++;
      var temp1 = "";
      var temp2 = "";
//      console.log("Track "+intBob+"- " + JSONsingle[y].name);
    }
  }
//  console.log("*******************");


  //money!!!!


} //function


function createSingle(intAlbum) {
  var strSingle = "";
      strSingle = getRandomName();

  JSONsingle.push({'name':strSingle,'album':intAlbum, 'active':true}); //add band JSON

} //function
