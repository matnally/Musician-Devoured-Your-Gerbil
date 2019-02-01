
var GLOBALJSONchart = [];

function chartTime() {

  var arrTemp = [];
      arrTemp = getReleasedSinglesAll();

  if (arrTemp.length > 20) {

    //Do this in temp so doesn't affect the original
    for (a in arrTemp) {
      arrTemp[a].qualityRatingChart = calcChartTimeSingleQualityRating(arrTemp[a]); //TODO: never used qualityRatingChart until now!
    } //for

    arrTemp = sortArrayByKey(arrTemp, 'qualityRatingChart'); //reorder by qualityRating IMPORTANT!!!!

    //TODO: arrTemp is actual JSONtrack !!!!!!!
    var strTemp = "";
    var intChartPosition = 1; //charts start from one! duh
    for (i in arrTemp) {

      if (intChartPosition > 20) {
        // break;
      } else {
        strTemp += (intChartPosition + ": " + getChartSingleMovement(arrTemp[i], intChartPosition) + " - " + arrTemp[i].qualityRatingChart + " - " + arrTemp[i].name + " by " + JSONband[getBandFromAlbum(arrTemp[i].album)].name) +"<br>";
      } //if

      arrTemp[i].chartPosition = intChartPosition;
      arrTemp[i].chartHistory = (arrTemp[i].chartHistory + intChartPosition + ","); //for graph

      if (intChartPosition < arrTemp[i].chartPositionBest) {
        arrTemp[i].chartPositionBest = intChartPosition; //save best position
      } //if

      intChartPosition++;

    } //for

  } // if > 20

  if (arrTemp.length > 20) {
    updateElement("divChart", strTemp);
//    alert(arrTemp[0].name + " by " + JSONband[getBandFromAlbum(arrTemp[0].album)].name + " is number 1");
  } else
    updateElement("divChart", "NOT GOT 20 SINGLES YET!"); //TODO: Put fake ones?

} //function

function getChartSingleMovement(arrSingle, intChartPosition) {

  var strTemp = "";

  switch (true) {
    case (arrSingle.chartPosition == 99999):
      strTemp = "imgChartNew";
    break;
    case (intChartPosition < arrSingle.chartPosition):
      strTemp = "imgChartUp";
    break;
    case (intChartPosition > arrSingle.chartPosition):
      strTemp = "imgChartDown";
    break;
    case (intChartPosition == arrSingle.chartPosition):
      strTemp = "imgChartNew";
    break;
    default:
      strTemp = "imgChartSame";
  } //switch

  strTemp = "<img src='"+JSONconfig[0].imagesFolder+strTemp+".png' alt='"+strTemp+"'>";

  if (arrSingle.chartPosition == 0)
    strTemp += "";
  else if (arrSingle.chartPosition == intChartPosition) //get the wording right
    strTemp += "";
  else if (intChartPosition != 0)
    strTemp += " from " + arrSingle.chartPosition;

  for (z in JSONsingle) {
    if (arrSingle.name == JSONsingle[z].name) {
      JSONsingle[z].chartPosition = intChartPosition;
      // JSONsingle[z].chartHistory = arrSingle.chartHistory + "," + intChartPosition; //for graph
    } //if
  } //for

  return strTemp;
} //function

function calcChartTimeSingleQualityRating(arrItemSingle) {
  //Work out final value of single, adding dynamic rpoperties
  var intTemp = 0;

  var i = getBandFromAlbum(arrItemSingle.album);

  var q = arrItemSingle.qualityRating;
  var r = JSONband[i].reputation;
  var d = getDateDifference(GLOBALdatDateCurrent, arrItemSingle.releasedDate);
  var f = 5;

  /*
    q = quality rating
    r = Band's reputation
    d = days difference from Single's release date to current date
    f = factor for difference
    RESULT = (q + r) - (d * f)
  */

  intTemp = Math.round((q + r) - (d * f));

  return intTemp;
} //function


//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function sortArrayByKey(array, key) {
  //Sorts an array by a key in DECENDING order. For asending, change to "function(a, b)"
  return array.sort(function(b, a) {
      var x = parseInt(a[key]);
      var y = parseInt(b[key]);
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

function getBandFromMusician(intMusician) {
  var intBandi = 0;
  for (i in JSONband) { //band
    for (m in JSONband[i].musician) { // band albums
      if (intMusician == JSONband[i].musician[m])
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
