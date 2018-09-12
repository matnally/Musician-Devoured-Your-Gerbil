
function setReleasePlayer() {
  //set player's band attributes for appropiate action
  if (!chkAlreadyReleasedSingleInPastWeek(0)) {
    //false so NOT released in the past week
    setRelease(0);
    turnBegin();
  } else {
    alert("ALREADY RELEASED");
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
  loggingOutput("SINGLE RELEASE", JSONband[i].name + " released the single '" + JSONsingle[intSingle].name + "' from the album '" +JSONalbum[JSONsingle[intSingle].album].name+ "'<br>");

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
