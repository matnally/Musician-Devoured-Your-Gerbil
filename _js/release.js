
function setReleasePlayer() {
  //set player's band attributes for appropiate action
  if (JSONband[0].album === false) {
    //No albums recorded
    alert("You have not recorded an album yet!");
  } else {
    setRelease(0);
    turnBegin();
  } //if
} //function

function setRelease(i) {
  //set band attributes for appropiate action
  JSONband[i].action = 5; //5 = release
  JSONband[i].days = JSONconfig[0].valueReleaseDaysDuration;
  JSONband[i].dateActionFinish = getActionDateFinish(JSONband[i].days);
} //function

function release(i) {
  //try to release a single
  var intSingle = 0;

  if (i==0) {
    //Player's Band
    intSingle = document.getElementById("selBandAlbumSingles").value;

  } else {
    //Other's band


// GET ALBUMS
// GET SINGLES
// GET NOT RELEASED SINGLES
var intAlbum = [];
var intSingleUnreleased = [];
var intSingle = false;
var arrTemp = [];

if (JSONband[i].album != false) {
  intAlbum = JSONband[i].album;
  arrTemp = getSinglesOfAlbumYetToBeReleased(i);
  intSingle = getSingle(arrTemp);
  console.log("intSingle: " + intSingle);
  console.log("getSingle(arrTemp): " + getSingle(arrTemp));
  console.log();
  alert(JSONsingle[arrTemp[intSingle]].name);
  JSONsingle[arrTemp[intSingle]].releasedDate = GLOBALdatDateCurrent.getTime(); //RELEASE single by giving it a releasedDate
  updateBandMoneySubtract(i, JSONconfig[0].valueReleaseCost, "single release"); //update band money
  loggingOutput("SINGLE RELEASE", JSONband[i].name + " released the single '" + JSONsingle[arrTemp[intSingle]].name + "' from the album '" +JSONalbum[JSONband[i].album].name+ "'<br>");
} //if


    // do {
    //   // arrTemp = getSinglesOfAlbumYetToBeReleased(i);
    //   // intSingle = getSingle(arrTemp); //get a random single
    //   intSingle = getSingle(getSinglesOfAlbumYetToBeReleased(i)); //get a random single
    //   console.log("intSingle: " + intSingle);
    // } while(JSONsingle[intSingle].releasedDate === false); //get a single with no releasedDate



  } //if


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
