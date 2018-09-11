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

function chartTime() {

  var arrTemp = [];
      arrTemp = getReleasedSinglesAll();

  //Do this in temp so doesn't affect the original
  for (a in arrTemp) {
    arrTemp[a].qualityRating = calcChartTimeSingle(arrTemp[a].qualityRating, i);
  } //for

  arrTemp = sortArrayByKey(arrTemp, 'qualityRating'); //reorder by qualityRating IMPORTANT

  console.log("CHART TIME!!!");
  var intChartPosition = 1; //charts start from one! duh
  for (i in arrTemp) {
    console.log(intChartPosition + ": " + arrTemp[i].name + " by " + JSONband[getBandFromAlbum(arrTemp[i].album)].name);
    intChartPosition++;
    // console.log(i + ": " + arrTemp[i].name + " by " + JSONband[getBandFromAlbum(arrTemp[i].album)].name + " from the album " + JSONalbum[arrTemp[i].album].name + "");
    // console.log("Single name: " + arrTemp[i].name);
    // console.log("Quality rating: " + arrTemp[i].qualityRating);
    // console.log("Album: " + JSONalbum[arrTemp[i].album].name);
    // console.log("Band: " + JSONband[getBandFromAlbum(arrTemp[i].album)].name);
    // console.log("***********");
  } //for

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


function calcChartTimeSingle(intQualityRating, i) {
  //Work out final value of single, adding dynamic rpoperties
  var intTemp = 0;
  var br = JSONband[i].reputation;
  var qr = intQualityRating

  /*
    br = Band Reputation

    r  = reputation
    s  = skill
    h  = happiness
    vr = venue reputation
    tp = ticket price
  */

  intTemp = intQualityRating + JSONband[i].reputation;
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
