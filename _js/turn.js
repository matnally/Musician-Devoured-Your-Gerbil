

function turnInit() {
  //Initialisation of turn / Start of game!

createGUI();
document.getElementById("divCurrentDate").innerHTML = "<h1>Date: " + JSONconfig[0].date + "</h1>";

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

} //function

var GLOBALintervalTurn;
function turnStartInterval() {
  GLOBALintervalTurn = setInterval(turnStart, 1000);
} //function

function updateDate(){
  GLOBALdatDateCurrent.setDate(GLOBALdatDateCurrent.getDate() + 1); //increase GLOBAL current date
  updateElement("divCurrentDate", "<h1>Date: " + GLOBALdatDateCurrent + "</h1>");
//  document.getElementById("divCurrentDate").innerHTML = "<h1>Date: " + GLOBALdatDateCurrent + "</h1>";
} //function

function turnStart() {
  //Start of turn

updateDate();

  bandOtherActionExecute(); //do actions for bands
  eventContract(); //see if they are eligible for a record contract, if not already
  checkDOWaction(); //choose action corressponding to day of week

//showPlayer();
showMusicians();

updateGUItrees();

} //function


function checkDOWaction() {
  //choose action corressponding to day of week
switch(GLOBALdatDateCurrent.getDay()) {
  case 0:
    //Sunday
//    console.log("**** CHART TIME ****");
  case 5:
    //friday
    takewageAway();
    console.log("**** WAGE TIME ****");
  break;
  default:
} //switch

  // var d = new Date();
  // var weekday = new Array(7);
  // weekday[0] =  "Sunday";
  // weekday[1] = "Monday";
  // weekday[2] = "Tuesday";
  // weekday[3] = "Wednesday";
  // weekday[4] = "Thursday";
  // weekday[5] = "Friday";
  // weekday[6] = "Saturday";
  // var n = weekday[d.getDay()];

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
//      console.log(JSONmusician[JSONband[i].musician[a]].name + " has wages of " + JSONmusician[JSONband[i].musician[a]].wage);
      intTemp += parseInt(JSONmusician[JSONband[i].musician[a]].wage);
    }//for
    console.log("'" + JSONband[i].name + "' total wages are: " + JSONconfig[0].currency + displayNumbersWithCommas(intTemp));
    //update money
    intTemp = parseInt(JSONband[i].money) - parseInt(intTemp);
      JSONband[i].money = intTemp;

  }//for

} //function


function turnEnd() {
  //End of turn

} //function
