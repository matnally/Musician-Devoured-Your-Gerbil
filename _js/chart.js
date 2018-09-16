
var GLOBALJSONchart = [];

function chartTime() {

  var arrTemp = [];
      arrTemp = getReleasedSinglesAll();

      if (arrTemp.length > 20) {



  //Do this in temp so doesn't affect the original
  for (a in arrTemp) {
    arrTemp[a].qualityRatingChart = calcChartTimeSingleQualityRating(arrTemp[a]); //TODO: never used qualityRatingChart until now!
  } //for

  arrTemp = sortArrayByKey(arrTemp, 'qualityRatingChart'); //reorder by qualityRating IMPORTANT

  //TODO: arrTemp is actual JSONtrack !!!!!!!
  var strTemp = "";
  var intChartPosition = 1; //charts start from one! duh
  for (i in arrTemp) {

    if (intChartPosition < arrTemp[i].chartPositionBest) {
      arrTemp[i].chartPositionBest = intChartPosition; //save best position
    } //if

    if (intChartPosition > 20) {
      // break;
    } else {
      strTemp += (intChartPosition + ": " + getChartSingleMovement(arrTemp[i], intChartPosition) + " - " + arrTemp[i].qualityRatingChart + " - " + arrTemp[i].name + " by " + JSONband[getBandFromAlbum(arrTemp[i].album)].name) +"<br>";
    } //if

    intChartPosition++;

  } //for

} // if > 20

if (arrTemp.length > 20)
  updateElement("divChart", strTemp);
else
  updateElement("divChart", "NOT GOT 20 SINGLES YET!");


} //function

function getChartSingleMovement(arrSingle, intChartPosition) {
  var strTemp = "";

  switch (true) {
    case (arrSingle.chartPosition==0):
      strTemp = "NEW";
    break;
    case (intChartPosition < arrSingle.chartPosition):
      strTemp = "UP from " + arrSingle.chartPosition;
    break;
    case (intChartPosition > arrSingle.chartPosition):
      strTemp = "DOWN from " + arrSingle.chartPosition;
    break;
    case (intChartPosition == arrSingle.chartPosition):
      strTemp = "SAME";
    break;
    default:
  } //switch


  for (z in JSONsingle) {
    if (arrSingle.name == JSONsingle[z].name)
      JSONsingle[z].chartPosition = intChartPosition;
  } //for

// if (arrSingle.chartPosition == 0)
//   strTemp = "NEW";

  // if (arrSingle.qualityRatingChart > arrSingle.qualityRatingChartPrevious)
  //   strTemp = "UP";
  //
  // if (parseInt(arrSingle.qualityRatingChart) < parseInt(arrSingle.qualityRatingChartPrevious))
  //   strTemp = "DOWN";
  //
  // if (arrSingle.qualityRatingChart == arrSingle.qualityRatingChartPrevious)
  //    strTemp = "SAME";

  return strTemp;
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

  // console.log("q:" + q);
  // console.log("r:" + r);
  // console.log("d:" + d);
  // console.log("f:" + f);
  // console.log("***********");

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
      // arrTemp.push(JSONsingle[y]); //add single to temp array
      arrTemp.push(JSONsingle[y]); //add single to temp array
    } //if
  } //for
  return arrTemp;
} //function
