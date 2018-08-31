
function turnInit() {
  //Initialisation of turn / Start of game!
  document.getElementById("divCurrentDate").innerHTML = "<p>Date: " + JSONconfig[0].date + "</p>";
  updateElement("divEquipmentComboBox", createComboBoxfromJSONiAndName(JSONequipment, "selEquipmentComboBox"));
  updateElement("divDirectorComboBox", createComboBoxfromJSONiAndName(JSONdirector, "selDirectorComboBox"));
  updateElement("divFeatureComboBox", createComboBoxfromJSONiAndName(JSONfeature, "selFeatureComboBox"));
  updateElement("divLocationComboBox", createComboBoxfromJSONiAndName(JSONlocation, "selLocationComboBox"));
  updateElement("divGiftComboBox", createComboBoxfromJSONiAndName(JSONgift, "selGiftComboBox"));
  updateElement("divTracksComboBox", createComboBoxfromJSONiAndName(JSONtracks, "selTracksComboBox"));
  updateElement("divMusicianComboBox", createComboBoxfromJSONiAndName(JSONmusician, "selMusicianComboBox"));
  updateElement("divBandComboBox", createComboBoxfromJSONiAndName(JSONband, "selBandComboBox"));
  updateElement("divVenueComboBox", createComboBoxfromJSONiAndName(JSONvenue, "selVenueComboBox"));
  updateElement("divTicketPriceComboBox", createComboBoxfromJSONticketPrice(JSONtickets, "selTicketPriceComboBox"));

  navHideAll();
  navShowSingle("#secStartGame");
} //function

var GLOBALintervalTurn; //GLOBAL TURN so can stop it from anywhere in the code

function turnStart() {
  //Start of turn
  GLOBALintervalRunning = true;
  GLOBALintervalTurn = setTimeout(turnStart, 500);
//navHideAll();
navShowSingle("#secBandDetails");

  updateDate();
  loggingOutput("DAY " + GLOBALdatDateCurrent, " ************************" + "<br>" + "<br>");
  bandOtherActionExecute(); //do actions for bands
  eventContract(); //see if they are eligible for a record contract, if not already
  checkDOWaction(); //choose action corressponding to day of week
  // showMusicians();
  showBandDetails(0);
  loggingOutput("TURN END", "************************" + "<br>" + "<br>");

if (GLOBALintervalRunning == false) {
  //navHideAll();
  //RESET????
  navShow("#secMainMenu");
  navShowSingle("#secBandDetails");

} //if

} //function

var GLOBALintervalRunning = false
function turnEnd() {
  clearTimeout(GLOBALintervalTurn); //IMPORTANT!!!
  GLOBALintervalRunning = false;
} //function

function updateDate(){
  GLOBALdatDateCurrent.setDate(GLOBALdatDateCurrent.getDate() + 1); //increase GLOBAL current date
  updateElement("divCurrentDate", "<p>Date: " + GLOBALdatDateCurrent + "</p>");
} //function

function checkDOWaction() {
  //choose action corressponding to day of week
  switch(GLOBALdatDateCurrent.getDay()) {
    case 0:
      //Sunday
      //TODO: CHART TIME!!!
      chartTime();
    break;
    case 1:
      //Monday
    break;
    case 2:
      //Tuesday
    break;
    case 3:
      //Wednesday
    break;
    case 4:
      //Thursday
    break;
    case 5:
      //Friday
      takewageAway();
    break;
    case 6:
      //Saturday
    break;
    default:
  } //switch

} //function

function takewageAway() {
  //takes away wage from the band's money
  var strTemp = "";
  var intTemp = 0;
  var intIndex = 0;

  for (i in JSONband) {
    intTemp=0; //reset
    for (a in JSONband[i].musician) {
      //for every musician band
      intTemp += parseInt(JSONmusician[JSONband[i].musician[a]].wage);
    }//for
    updateBandMoneySubtract(i, intTemp, "wages"); //update band money
    loggingOutput("WAGES","'" + JSONband[i].name + "' total wages are: " + JSONconfig[0].currency + displayNumbersWithCommas(intTemp) + "<br>");
  }//for

} //function




function sortArrayByKey(array, key) {
  //Sorts an array by a key in DECENDING order. For asending, change to "function(a, b)"
  return array.sort(function(b, a) {
      var x = a[key];
      var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}



function chartTime() {

  var arrTemp = [];
  for (y in JSONsingle) {
    //get ALL singles
    if (JSONsingle[y].active == false) {
      //single not released yet
      arrTemp.push(JSONsingle[y]); //add single to temp array
    } //if
  } //for

  for (a in arrTemp) {
    for (i in JSONband) {
      if (arrTemp[a].album == JSONband[i].album) {
        arrTemp[a].qualityRating = calcChartTimeSingle(arrTemp[a].qualityRating, i);
      } //if
    } //for
  } //for

  arrTemp = sortArrayByKey(arrTemp, 'qualityRating');
  console.log(arrTemp);

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
