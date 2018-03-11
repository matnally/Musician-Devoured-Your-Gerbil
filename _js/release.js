function setRelease(intDays) {
  var datDateActionFinish = 0;
      datDateActionFinish = getDateActionFinish(intDays);
  JSONband[0].dateActionFinish = datDateActionFinish;
  JSONband[0].action = 5; //5 = release
  JSONband[0].days = intDays;
  showMusicians(); //just to update what player has chosen
} //function

function release(i) {
  //try to release a single
  var arrTemp = [];
  for (y in JSONsingle) {
    //get singles of album
    if (JSONsingle[y].album == JSONband[i].album) {
      //single belongs to album
      arrTemp.push(y); //add single to temp array
    } //if
  } //for

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

  if (boolAnyActive == true) {
    //there are still come ative singles so release single
    var mat = 0;
    do {
      mat = getSingle(arrTemp); //get a random single
    } while(JSONsingle[arrTemp[mat]].active == false); //get a single while one is stil active, ignore false singles

    JSONsingle[arrTemp[mat]].active = false; //RELEASE single by making it inactive?!

    console.log("'" + JSONband[i].name + "' will release the single '" + JSONsingle[arrTemp[mat]].name + "' in the album '" +JSONalbum[JSONband[i].album].name+ "' ");

  } else {
    //there are NO more ative singles
    alert("NO MORE ACTIVE SINGLES");
    //remmove album???
  } //if


} //function



function getSingle(arrTemp) {
  return Math.floor(Math.random() * arrTemp.length);
} //function
