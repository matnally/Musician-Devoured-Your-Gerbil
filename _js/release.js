
function setRelease(intDays) {
  if (JSONband[0].album == false) {
    //No albums recorded
    alert("You have not recorded an album yet!");
  } else {
    JSONband[0].dateActionFinish = getDateActionFinish(intDays);
    JSONband[0].action = 5; //5 = release
    JSONband[0].days = intDays;
    turnStartInterval();
  } //if
} //function

function release(i) {
  //try to release a single

  var arrTemp = getSinglesOfAlbumYetToBeReleased(i); //get singles of album
  if (arrTemp.length > 0) {
    //there are still come ative singles so release single
    var intSingle = 0;
    do {
      intSingle = getSingle(arrTemp); //get a random single
    } while(JSONsingle[arrTemp[intSingle]].active == false); //get a single while one is stil active, ignore false singles

    JSONsingle[arrTemp[intSingle]].active = false; //RELEASE single by making it inactive?!
    JSONsingle[arrTemp[intSingle]].releaseDate = GLOBALdatDateCurrent.getTime();

    loggingOutput("SINGLE RELEASE", JSONband[i].name + " released the single '" + JSONsingle[arrTemp[intSingle]].name + "' from the album '" +JSONalbum[JSONband[i].album].name+ "'<br>");

    //TODO: Cost to release? Video cost

  } else {
    //there are NO more ative singles
    alert("NO MORE ACTIVE SINGLES! Record another album");
    JSONband[0].album = false;
    //remmove album???
  } //if

} //function

function getSinglesOfAlbumYetToBeReleased(i) {
  var arrTemp = [];
  for (y in JSONsingle) {
    //get singles of album
    if ((JSONsingle[y].album == JSONband[i].album) && (JSONsingle[y].active == true)) {
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
