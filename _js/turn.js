///////////////////////
//GAME FUNCTIONS
///////////////////////

function gameInit() {
  //Initialisation of turn / Start of game!
  /*
    METHOD
    ======
    Create elements needed for game
    Apply any listeners to elements
    Show Gane Start section
  */
  guiCreateElements(); //Create everything needed
  guiApplyListeners();

  navHideAll();
  navShowSingle("#secStartGame");

  guiDisplayDetailsMusician(GLOBALMusiciani);
  navShowSingle("#secStartGameDetails");
} //function

function gameStart() {
  /*
    METHOD
    ======

  */
  createBandPlayer(JSONband[0]); //create band from player's chosen musicians
  createBandOther(); //creates bands from the remaining musicians
  actionChooseBandAll(); //sets an action to each band

  updateElement("divCurrentDate", GLOBALdatDateCurrent);

  navShow("#secMainMenu");

  guiDisplayDetailsBandMusicians(0);
  navShowSingle("#secBandDetails");
} //function


function guiDisplayDetailsBandMusicians(i) {

  i = parseInt(i);

  if (i < 0)
    i = JSONband.length - 1;

  if (i >= JSONband.length)
    i=0;

  GLOBALBandi = i;
  updateElement("divBandDetails", guiDisplayDetailsCreateHTMLband(guiDisplayDetailsReturnArray(JSONband[i])));

  var strTemp = "";
  strTemp +="   <div class='divTable'>";
  strTemp +="     <div class='divRow'>";
  for (m in JSONband[i].musician) {
    strTemp +="       <div class='divCell'>";
    strTemp += guiDisplayDetailsCreateHTMLmusician(guiDisplayDetailsReturnArray(JSONmusician[JSONband[i].musician[m]]));
    strTemp +="       </div> <!-- divCell -->";
  } //for
  strTemp +="     </div> <!-- divRow -->";
  strTemp +="   </div> <!-- divTable -->";
  updateElement("divBandMusicianDetails", strTemp);

  strTemp = "";
  strTemp +="   <div class='divTable'>";
  strTemp +="     <div class='divRow'>";
  for (b in JSONband[i].album) {
    strTemp +="       <div class='divCell'>";
    strTemp += guiDisplayDetailsCreateHTMLalbum(JSONband[i].album[b]);
    strTemp +="       </div> <!-- divCell -->";
  } //for
  strTemp +="     </div> <!-- divRow -->";
  strTemp +="   </div> <!-- divTable -->";
  updateElement("divBandAlbumsDetails", strTemp);


  guiDisplayActionCurrent(i);


} //function


///////////////////////
//TURN FUNCTIONS
///////////////////////

/*
Order of syntax:
  INIT
  BEGIN
  START
  END
  FINISH
*/

var GLOBALintervalRunning = false; //GLOBAL

function turnBegin() {
  navShowSingle("#secBandDetails");
  guiDisplayDetailsBandMusicians(0);
  for (var i=0;i<JSONband[0].days;i++) {
    // setTimeout(turnStart, 1000);
    turnStart();
  } //for
  turnFinish();
} //function
function turnStart() {
  //Start of turn
  updateDate();
  loggingOutput("DAY " + GLOBALdatDateCurrent, " ************************" + "<br>" + "<br>");
  actionExecuteBandAll(); //do actions for bands
  // eventContract(); //see if they are eligible for a record contract, if not already
  eventDOWaction(); //choose action corressponding to day of week
  loggingOutput("TURN END", "************************" + "<br>" + "<br>");
  //WAIT???

  updateElement("divBandDetails", guiDisplayDetailsCreateHTMLband(guiDisplayDetailsReturnArray(JSONband[0]))); //GUI

} //function
function turnEnd() {
} //function
function turnFinish() {
  navShow("#secMainMenu");

  navShowSingle("#secBandDetails");
  guiDisplayDetailsBandMusicians(0);
} //function



function eventDOWaction() {
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
