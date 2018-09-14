
var GLOBALJSONchart = [];

function chartTime() {

  var arrTemp = [];
      arrTemp = getReleasedSinglesAll();

  //Do this in temp so doesn't affect the original
  for (a in arrTemp) {
    arrTemp[a].qualityRating = calcChartTimeSingleQualityRating(arrTemp[a]);
  } //for

  GLOBALJSONchart = arrTemp;

  arrTemp = sortArrayByKey(arrTemp, 'qualityRating'); //reorder by qualityRating IMPORTANT

  //TODO: Display better!
  console.log("CHART TIME!!!");
  var intChartPosition = 1; //charts start from one! duh
  for (i in arrTemp) {
    console.log(intChartPosition + ": " + arrTemp[i].qualityRating + " - " + arrTemp[i].name + " by " + JSONband[getBandFromAlbum(arrTemp[i].album)].name);
    if (intChartPosition >= 20)
      break;
    else
      intChartPosition++;
  } //for
  console.log("********************");

} //function

function calcChartTimeSingleQualityRating(arrItemSingle) {
  //Work out final value of single, adding dynamic rpoperties
  var intTemp = 0;

  var i = getBandFromAlbum(arrItemSingle.album);

  var q = arrItemSingle.qualityRating;
  var r = JSONband[i].reputation;
  var d = getDateDifference(GLOBALdatDateCurrent, arrItemSingle.releasedDate);
  var f = 2;

  /*
    q = quality rating
    r = Band's reputation
    d = days difference from Single's release date to current date
    f = factor for difference

    RESULT = (q + r) - (d * f)

  */

  console.log("q:" + q);
  console.log("r:" + r);
  console.log("d:" + d);
  console.log("f:" + f);
  console.log("***********");

  intTemp = Math.round((q + r) - (d * f));

  return intTemp;
} //function


//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function sortArrayByKey(array, key) {
  //Sorts an array by a key in DECENDING order. For asending, change to "function(a, b)"
  return array.sort(function(b, a) {
      var x = a[key];
      var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
} //function

function getBandFromAlbum(intAlbum) {
  var intBandi = 0;
  for (i in JSONband) { //band
    for (m in JSONband[i].album) { // band albums
      if (intAlbum == JSONband[i].album[m])
        intBandi = i;
    } //for
  } //for
  return intBandi;
} //function

function getReleasedSinglesAll() {
  // get all released singles
  var arrTemp = [];
  for (y in JSONsingle) {
    //get ALL singles
    if (JSONsingle[y].releasedDate !== false) {
      //single not released yet
      arrTemp.push(JSONsingle[y]); //add single to temp array
    } //if
  } //for
  return arrTemp;
} //function
