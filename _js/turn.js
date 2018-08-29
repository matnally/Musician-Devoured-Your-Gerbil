
var GLOBALintervalTurn; //GLOBAL TURN
function turnStartInterval() {
  GLOBALintervalTurn = setInterval(turnStart, 1000);
} //function


function turnInit() {
  //Initialisation of turn / Start of game!

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

function turnStart() {
  //Start of turn
  updateDate();
  bandOtherActionExecute(); //do actions for bands
  eventContract(); //see if they are eligible for a record contract, if not already
  checkDOWaction(); //choose action corressponding to day of week
  showMusicians();
  loggingOutput("TURN ? START", "************************" + "<br>" + "<br>");

} //function

function updateDate(){
  GLOBALdatDateCurrent.setDate(GLOBALdatDateCurrent.getDate() + 1); //increase GLOBAL current date
  updateElement("divCurrentDate", "<h1>Date: " + GLOBALdatDateCurrent + "</h1>");
} //function

function checkDOWaction() {
  //choose action corressponding to day of week
  switch(GLOBALdatDateCurrent.getDay()) {
    case 0:
      //Sunday
      //TODO: CHART TIME!!!
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
      loggingOutput("WAGE TIME", "Day of the Week!");
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
    loggingOutput("WAGES","'" + JSONband[i].name + "' total wages are: " + JSONconfig[0].currency + displayNumbersWithCommas(intTemp) + "<br>");
    //update money
    intTemp = parseInt(JSONband[i].money) - parseInt(intTemp);  // THE ACTION !!!!!!!!
    JSONband[i].money = intTemp;
  }//for

} //function


function turnEnd() {
  //End of turn
  loggingOutput("TURN ? END", "************************" + "<br>" + "<br>");

} //function
