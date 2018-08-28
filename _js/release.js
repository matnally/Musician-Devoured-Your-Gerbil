
function setRelease(intDays) {
  var datDateActionFinish = 0;
      datDateActionFinish = getDateActionFinish(intDays);
  JSONband[0].dateActionFinish = datDateActionFinish;
  JSONband[0].action = 5; //5 = release
  JSONband[0].days = intDays;

  turnStartInterval();

} //function

function release(i) {
  //try to release a single

  var arrTemp = getSinglesOfAlbum(i) //get singles of album
  var boolAnyActive = chkActiveSingles(arrTemp); //check for any active singles exist
  if (boolAnyActive == true) {
    //there are still come ative singles so release single
    var intSingle = 0;
    do {
      intSingle = getSingle(arrTemp); //get a random single
    } while(JSONsingle[arrTemp[intSingle]].active == false); //get a single while one is stil active, ignore false singles

    JSONsingle[arrTemp[intSingle]].active = false; //RELEASE single by making it inactive?!

    loggingOutput("SINGLE RELEASE", JSONband[i].name + "' will release the single '" + JSONsingle[arrTemp[intSingle]].name + "' in the album '" +JSONalbum[JSONband[i].album].name+ "' ");

  } else {
    //there are NO more ative singles
    alert("NO MORE ACTIVE SINGLES");
    //remmove album???
  } //if

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

function chkActiveSingles(arrTemp) {
  //START check for any active singles
  var boolAnyActive = false;
  //for (var h=0; h<=arrTemp.length;h++) {
  for (h in arrTemp) {
  //  alert(JSONsingle[arrTemp[h]].active);
    if (JSONsingle[arrTemp[h]].active == true) {
  //    alert("true");
      boolAnyActive = true;
    } //if
  } //for
  //END check for any active singles
} //function

function getSingle(arrTemp) {
  return Math.floor(Math.random() * arrTemp.length);
} //function
