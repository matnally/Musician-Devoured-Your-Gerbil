
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
  loggingOutput(i, "SINGLE RELEASE", JSONband[i].name + " released the single '" + JSONsingle[intSingle].name + "' from the album '" +JSONalbum[JSONsingle[intSingle].album].name+ "'<br>");

} //function


//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function chkBandCanReleaseSingle(i) {
  var booReturnValue = false;

  if (JSONband[i].album.length > 0) {
      //band has at least 1 album
      for (a in JSONband[i].album) {
        //for every album
        for (s in JSONsingle) {
          //for every single
          if (JSONsingle[s].album == JSONband[i].album[a]) {
            //single belongs to band's albums
            if (!JSONsingle[s].releasedDate) {
              //single not released yet
              booReturnValue = true;
            } else {
              //single released

              var diffDays = getDateDifference(GLOBALdatDateCurrent, JSONsingle[s].releasedDate);
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


function getDateDifference(datCurrent, datDate) {
  //check if released in the past 7 days
  var date1 = new Date(datCurrent);
  var date2 = new Date(datDate);
  var timeDiff = date1.getTime() - date2.getTime();
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return diffDays;
} //function

function singleChoose(i) {
  var arrTemp = [];
      arrTemp = getSinglesOfAlbumYetToBeReleased(i);
  var intSingle = 0;
      intSingle = getSingle(arrTemp);
  return intSingle;
} //function

function getSinglesOfAlbumYetToBeReleased(i) {
  var arrTemp = [];
  for (y in JSONsingle) {
    if (JSONsingle[y].releasedDate == false) {
      for (a in JSONband[i].album) {
        if (JSONsingle[y].album == JSONband[i].album[a]) {
          arrTemp.push(y); //add single to temp array
        } //if
      } //for
    } //if
  } //for
  return arrTemp;
} //function

function getSingle(arrTemp) {
  var mat = 0;
  mat = Math.floor(Math.random() * arrTemp.length);
  mat = arrTemp[mat];
  return mat;
} //function
