
function chkBandCanReleaseSingle(i) {
  var booReturnValue = false;

  if (JSONband[i].album.length > 0) {
      //band has at least 1 album

      for (a in JSONband[i].album) {
        //for every album
        // console.log("album: " + JSONband[i].album[a]);

        for (s in JSONsingle) {
          //for every single

          if (JSONsingle[s].album == JSONband[i].album[a]) {
            //single belongs to band's albums
            // console.log("single found: " + s);

            if (!JSONsingle[s].releasedDate) {
              //single not released yet
              booReturnValue = true;
            } else {
              //single released

              //check if released in the past 7 days
              var date1 = new Date(GLOBALdatDateCurrent);
              var date2 = new Date(JSONsingle[s].releasedDate);
              var timeDiff = date1.getTime() - date2.getTime();
              var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
              // console.log("diffDays: " + diffDays);

              if(diffDays < 7) {
                // console.log(JSONband[i].name + " released in the past week!");
                booReturnValue = false;
                return booReturnValue;
              } //if

            } //if

          } //if

        } //for

      } //for

  } //if

  return booReturnValue;
} //function

function setReleasePlayer() {
  //set player's band attributes for appropiate action
  if (chkBandCanReleaseSingle(0)) {
      //true so can release
      setRelease(0);
      turnBegin();
  } else {
      //false so CANNOT release
      alert("DONT HAVE ALBUM or NO MORE SINGLES TO RELEASE or ALREADY RELEASED THIS WEEK");
  } //if

} //function

function setRelease(i) {
  //set band attributes for appropiate action
  JSONband[i].action = 5; //5 = release
  JSONband[i].days = JSONconfig[0].valueReleaseDaysDuration;
  JSONband[i].dateActionFinish = getActionDateFinish(JSONband[i].days);
} //function

function release(i) {
  // GET ALBUMS, GET SINGLES, GET NOT RELEASED SINGLES
  var intSingle = 0;

  if (i==0) {
    //Player's Band
    intSingle = document.getElementById("selBandAlbumSingles").value;
  } else {
    //Other's band
    intSingle = singleChoose(i);
  } //if

  // if (JSONband[i].album == false)
  //   console.log(JSONband[i].name + " albums === false");

// console.log(JSONband[i].name + " has the following albums " + JSONband[i].album.length);
// console.log("intSingle: " + intSingle);

  JSONsingle[intSingle].releasedDate = GLOBALdatDateCurrent.getTime(); //RELEASE single by giving it a releasedDate
  updateBandMoneySubtract(i, JSONconfig[0].valueReleaseCost, "single release"); //update band money
  loggingOutput(i, "SINGLE RELEASE", JSONband[i].name + " released the single '" + JSONsingle[intSingle].name + "' from the album '" +JSONalbum[JSONsingle[intSingle].album].name+ "'<br>");

} //function


//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function singleChoose(i) {
  var intAlbum = [];
      intAlbum = JSONband[i].album;
  var arrTemp = [];
      arrTemp = getSinglesOfAlbumYetToBeReleased(i);
  var intSingle = 0;
      intSingle = getSingle(arrTemp);
      // intSingle = arrTemp[intSingle];
      // intSingle = arrTemp[0];
  return intSingle;
} //function

function getSinglesOfAlbumYetToBeReleased(i) {
  var arrTemp = [];

/*
for all Singles
  for all band Albums
    if single.album = band[i].album
      if single not released yet
        PUSH
*/

for (y in JSONsingle) {
  if (JSONsingle[y].releasedDate == false) {
    for (a in JSONband[i].album) {
      if (JSONsingle[y].album == JSONband[i].album[a]) {
        arrTemp.push(y); //add single to temp array
      } //if
    } //for
  } //if
} //for


  // console.log("JSONband[i].name: " + JSONband[i].name);
  // console.log("JSONband[i].album: " + JSONband[i].album);
  //
  // for (a in JSONband[i].album) {
  //   console.log("JSONband[i].album[a]: " + JSONband[i].album[a]);
  //   for (y in JSONsingle) {
  //     if (JSONsingle[y].album == JSONband[i].album[a]) {
  //       if (JSONsingle[y].releasedDate === false) {
  //         arrTemp.push(y); //add single to temp array
  //       } //if
  //     } //if
  //   } //for
  // } //for
  return arrTemp;
} //function

function getSingle(arrTemp) {
  var mat = 0;
  mat = Math.floor(Math.random() * arrTemp.length);
  mat = arrTemp[mat];
  return mat;
} //function
