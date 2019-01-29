
function gameInit() {
  //Initialisation of turn / Start of game!
  //Create everything needed
  guiCreateElements();
  guiApplyListeners();
  guiApplyGameText();
  //GUI
  navHideAll();
  navShowSingle("#secStartGame");
  navShowSingle("#secStartGameDetails");
} //function

function gameStart() {
  //Create Bands
  createBandPlayer(JSONband[0]); //create band from player's chosen musicians
  createBandOther(); //creates bands from the remaining musicians
  calBandMusicianCost();
  actionChooseBandAll(); //sets an action to each band
  // GUI
  updateElement("divCurrentDate", guiDisplayDate(GLOBALdatDateCurrent));
  updateElement('templateBand', guiCreateHTMLBand(0)); // GUI - Display Band
  // GUI - Display Musicians
  var strTemp = "";
  for (m in JSONband[0].musician) {
    strTemp += guiCreateHTMLMusician(JSONband[0].musician[m]);
  } //for
  updateElement('templateMusicians', strTemp); // New GUI

  //FOR ADMIN DROPDOWNS
  // updateElement("divBandComboBox", guiDisplayDetailsCreateHTMLcomboBoxTopLevel(JSONband, "selBandComboBox"));
  // document.getElementById("selBandComboBox").addEventListener("change",function(event){
  //   guiDisplayDetailsBand(this.value);
  // }, {passive: true});
  //
  // updateElement("divMusicianComboBox", guiDisplayDetailsCreateHTMLcomboBoxTopLevel(JSONmusician, "selMusicianComboBox"));
  // document.getElementById("selMusicianComboBox").addEventListener("change",function(event){
  //   guiDisplayDetailsBand(getBandFromMusician(this.value));
  // }, {passive: true});

  //GUI
  navShow("#secMainMenu");
  navShowSingle("#secBandDetails");
} //function

function gameEnd() {
//  alert(JSONconfig[0].gameOver); //TODO
  console.log("Band has no money left!!!!");
} //function

function turnBegin() {
  navShowSingle("#secBandDetails");
  // guiDisplayDetailsBand(0);

  for (var i=0;i<JSONband[0].days;i++) {
    turnStart();
  } //for

  turnFinish();
} //function

function turnStart() {
  //Start of turn
  updateDate();
  actionExecuteBandAll(); //do actions for bands
  eventDOWAction(); //choose action corressponding to day of week
} //function

function turnEnd() {
} //function

function turnFinish() {

  eventContract(0); //see if they are eligible for a record contract, if not already
  eventRandom(0);
  adminShowLog(0);

  // Gui CLEARS
  guiDisplayMovementLabelMusicianClear("spnMovementMusicianskill");
  guiDisplayMovementLabelMusicianClear("spnMovementMusicianhappiness");
  guiDisplayMovementLabelMusicianClear("spnMovementMusicianreputation");
  guiDisplayMovementLabelBandClear("spnMovementBandMoney");
  // GUI - Update Band and Musician details
  for (m in JSONband[0].musician) {
    guiAnimateNumber(document.getElementsByClassName('musicianSkill')[m], JSONmusician[JSONband[0].musician[m]].skill);
    guiAnimateNumber(document.getElementsByClassName('musicianHappiness')[m], JSONmusician[JSONband[0].musician[m]].happiness);
    guiAnimateNumber(document.getElementsByClassName('musicianReputation')[m], JSONmusician[JSONband[0].musician[m]].reputation);
  } //for
  guiAnimateNumber(document.getElementsByClassName('bandReputation')[0], getBandAGGattributeFromMusiciansSingle(0, 'reputation'));
  guiAnimateNumber(document.getElementsByClassName('bandMoney')[0], JSONband[0].money);
  updateElement('templateAlbum', guiCreateHTMLAlbum(0)); // New GUI

  // GUI - Display Musicians
  var strTemp = "";
  for (m in JSONband[0].musician) {
    strTemp += guiCreateHTMLMusician(JSONband[0].musician[m]);
  } //for
  updateElement('templateMusicians', strTemp); // New GUI
  // guiDisplayDetailsBand(0);

  // updateElement("divSinglesComboBox", guiDisplayDetailsCreateHTMLcomboBoxTopLevel(JSONsingle, "selSingleComboBox"));
  // updateElement("divSinglesComboBox", guiDisplayDetailsCreateHTMLcomboBoxTopLevel(getReleasedSinglesAll(), "selSingleComboBox"));
  // document.getElementById("selSingleComboBox").addEventListener("change",function(event){
  //   guiDisplayDetailsSingle(this.value);
  // }, {passive: true});

  updateElement("divCurrentDate", guiDisplayDate(GLOBALdatDateCurrent));

  navShow("#secMainMenu");
  navShowSingle("#secBandDetails");

} //function


//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function eventDOWAction() {
  //choose action corressponding to day of week
  switch(GLOBALdatDateCurrent.getDay()) {
    case 0:
      //Sunday
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

function eventRandom(i) {

    //TODO: Random event to add a bit of excitment
    /*
      Charity gigs - no money just publicity
      STOLEN EQUIPMENT? What to do: rough em upm, etc...
      musicians can die in publicity!! +reputation
      Musician ask for gifts if HAPPINESS TOO LOW - threats to quit bad if not get a gift (chance they might)
      Musician thinks a psychedelic firework show would really improve the show. costs money
    */

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
    loggingOutput(i, "WAGES","'" + JSONband[i].name + "' total wages are: " + JSONconfig[0].currency + displayNumbersWithCommas(intTemp) + "<br>");
  }//for

} //function
