
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
    alert("Single released: " + intSingle);
  } //if
console.log("intSingle: " + intSingle);
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
  for (y in JSONsingle) {
    //get singles of album

    arrTemp.push(y); //add single to temp array


  } //for
  return arrTemp;
} //function

function getSingle(arrTemp) {
  var mat = 0;
  mat = Math.floor(Math.random() * arrTemp.length);
  mat = arrTemp(mat);
  return mat;
} //function
