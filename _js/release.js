
function setReleasePlayer() {
  //set player's band attributes for appropiate action

  if (!chkAlreadyHaveAlbum(0)) {
    //returned false so does NOT have any albums so choose action again until it's not 5 = release
    console.log("NO ALBUM");
  } else {
    //DO have at least one album so can release

    //Check for still have singles unreleased
    var arrTemp = getSinglesOfAlbumYetToBeReleased(0);
    console.log("arrTemp.length: " + arrTemp.length);
    if (!arrTemp.length) {
      console.log("SET RELEASE");
    } else {
      console.log("SET RECORD");
    } //if

  } //if



  setRelease(0);
  turnBegin();
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

  JSONsingle[intSingle].releasedDate = GLOBALdatDateCurrent.getTime(); //RELEASE single by giving it a releasedDate
  updateBandMoneySubtract(i, JSONconfig[0].valueReleaseCost, "single release"); //update band money
  loggingOutput("SINGLE RELEASE", JSONband[i].name + " released the single '" + JSONsingle[intSingle].name + "' from the album '" +JSONalbum[JSONsingle[intSingle].album].name+ "'<br>");

} //function

CHECK FOR MULTIPLE ALBUMS BUG?!?!

function singleChoose(i) {
  var intAlbum = [];
      intAlbum = JSONband[i].album;
  var arrTemp = [];
      arrTemp = getSinglesOfAlbumYetToBeReleased(i);
  var intSingle = 0;
      intSingle = getSingle(arrTemp);
      intSingle = arrTemp[intSingle];
  return intSingle;
} //function

function getSinglesOfAlbumYetToBeReleased(i) {
  var arrTemp = [];
  for (y in JSONsingle) {
    //get singles of album
    if ((JSONsingle[y].album == JSONband[i].album) && (JSONsingle[y].releasedDate === false)) {
      //single belongs to album
      arrTemp.push(y); //add single to temp array
    } //if
  } //for
  return arrTemp;
} //function

function getSinglesOfAlbum(i) {
  var arrTemp = [];
  for (y in JSONsingle) {
    //get singles of album
    if (JSONsingle[y].album == JSONband[i].album) {
      //single belongs to album
      arrTemp.push(y); //add single to temp array
    } //if
  } //for
  return arrTemp;
} //function

function getSingle(arrTemp) {
  return Math.floor(Math.random() * arrTemp.length);
} //function
