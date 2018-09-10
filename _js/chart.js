
// CHART TIME FUNCTIONS

function chartTime() {

  var arrTemp = [];
  for (y in JSONsingle) {
    //get ALL singles
    if (JSONsingle[y].releasedDate !== false) {
      //single not released yet
      arrTemp.push(JSONsingle[y]); //add single to temp array
    } //if
  } //for

  for (a in arrTemp) {
    arrTemp[a].qualityRating = calcChartTimeSingle(arrTemp[a].qualityRating, i);
  } //for

  arrTemp = sortArrayByKey(arrTemp, 'qualityRating');
  console.log("CHART TIME: " + JSON.stringify(arrTemp));

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


function sortArrayByKey(array, key) {
  //Sorts an array by a key in DECENDING order. For asending, change to "function(a, b)"
  return array.sort(function(b, a) {
      var x = a[key];
      var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}
