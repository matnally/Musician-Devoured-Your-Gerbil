
var GLOBALBandi = 0;
var GLOBALMusiciani = 0;

function guiCreateElements() {
  //Creates and displays all elements needed for the game

  //COMBO BOXES
  //Game Start
  updateElement("divBandComboBox", guiDisplayDetailsCreateHTMLcomboBoxTopLevel(JSONband, "selBandComboBox"));
  updateElement("divEquipmentComboBox", guiDisplayDetailsCreateHTMLcomboBoxTopLevel(JSONequipment, "selEquipmentComboBox"));
  //Practice
  //DAYS?
  //Gig
  //DAYS?
  updateElement("divVenueComboBox", guiDisplayDetailsCreateHTMLcomboBoxTopLevel(JSONvenue, "selVenueComboBox"));
  updateElement("divTicketPriceComboBox", guiDisplayDetailsCreateHTMLcomboBoxTopLevel(JSONtickets, "selTicketPriceComboBox"));
  //Gifts
  updateElement("divGiftComboBox", guiDisplayDetailsCreateHTMLcomboBoxTopLevel(JSONgift, "selGiftComboBox"));
  //Record
  updateElement("divTracksComboBox", guiDisplayDetailsCreateHTMLcomboBoxTopLevel(JSONtracks, "selTracksComboBox"));
  //Release
  updateElement("divDirectorComboBox", guiDisplayDetailsCreateHTMLcomboBoxTopLevel(JSONdirector, "selDirectorComboBox"));
  updateElement("divFeatureComboBox", guiDisplayDetailsCreateHTMLcomboBoxTopLevel(JSONfeature, "selFeatureComboBox"));
  updateElement("divLocationComboBox", guiDisplayDetailsCreateHTMLcomboBoxTopLevel(JSONlocation, "selLocationComboBox"));

} //function

function guiApplyListeners() {
  //passive: true so don't get error: [Violation] Added non-passive event listener

  //START MAIN MENU
  document.getElementById("divPracticeComboBox").addEventListener("change",function(event){
    guiDisplayActionCost(this.value, 0); //0 = Practice
  }, {passive: true});

  //GIG
  document.getElementById("selVenueComboBox").addEventListener("change",function(event){
    guiDisplayActionCost(this.value, 1); //1 = Gig
  }, {passive: true});
  document.getElementById("selTicketPriceComboBox").addEventListener("change",function(event){
    guiDisplayActionCost(this.value, 1); //1 = Gig
  }, {passive: true});
  document.getElementById("divGigDays").addEventListener("change",function(event){
    guiDisplayActionCost(this.value, 1); //1 = Gig
  }, {passive: true});

  document.getElementById("secPublicity").addEventListener("mousemove",function(event){
    guiDisplayActionCost(1, 2); //2 = Publicity
  }, {passive: true});
  //END MAIN MENU

  document.getElementById("selGiftComboBox").addEventListener("change",function(event){
    guiDisplayActionCost(this.value, 3); //3 = Gifts
  }, {passive: true});

  document.getElementById("selTracksComboBox").addEventListener("change",function(event){
    guiDisplayActionCost(this.value, 4); //4 = Record
  }, {passive: true});

  //Release
  document.getElementById("selDirectorComboBox").addEventListener("change",function(event){
    guiDisplayActionCost(this.value, 5); //5 = Release
  }, {passive: true});
  document.getElementById("selLocationComboBox").addEventListener("change",function(event){
    guiDisplayActionCost(this.value, 5); //5 = Release
  }, {passive: true});
  document.getElementById("selFeatureComboBox").addEventListener("change",function(event){
    guiDisplayActionCost(this.value, 5); //5 = Release
  }, {passive: true});

} //function

function guiDisplayDetailsBand(i) {

  var intTemp = 1;
  var strTemp = "";

  i = parseInt(i);

  if (i < 0)
    i = JSONband.length - 1;

  if (i >= JSONband.length)
    i=0;

  GLOBALBandi = i;

  strTemp = getMarkUpBand(i);
    updateElement("divBandDetails", strTemp);

  strTemp = getMarkUpMusician(i);
    updateElement("divBandMusicianDetails", strTemp);

  strTemp = getMarkUpAlbum(i);
    updateElement("divBandAlbumsDetails", strTemp);

  guiDisplayActionCurrent(i);
  adminShowLog(i); //display

} //function

function guiDisplayActionCost(i, index) {

  var strTemp = "";
  var intTotalCost = 0;
  var intDayCost = 0;
  var intTotalCost = "";
  var intDays = 0;

  switch(index) {
    case 0:
      //practice
      intDays = document.getElementById("divPracticeComboBox").value;
      intDayCost = (JSONconfig[0].valuePracticeCost);
      intTotalCost = (i * JSONconfig[0].valuePracticeCost);
      strTemp = "To <strong>Practice</strong> for <strong>" + i + "</strong> day(s), at <strong>"+JSONconfig[0].currency + intDayCost + "</strong> per day, will cost a total of <strong>" + JSONconfig[0].currency + intTotalCost + "</strong>";
      strTemp += "<br>";
      strTemp += "For each of the "+JSONband[0].musician.length+" musician(s) in <strong>" + JSONband[0].name + "</strong> they will recieve <strong>" + JSONconfig[0].valuePracticeSkill + "</strong> Skill, <strong>" + JSONconfig[0].valuePracticeHappiness + "</strong> Happiness and <strong>" + JSONconfig[0].valuePracticeReputation + "</strong> Reputation for each day's practice, not included any extra bonuses for using the musician's favourite equipment.";

      guiDisplayMovementLabelMusician("spnMovementMusicianskill", (i * JSONconfig[0].valuePracticeSkill));
      guiDisplayMovementLabelMusician("spnMovementMusicianhappiness", (i * JSONconfig[0].valuePracticeHappiness));
      guiDisplayMovementLabelMusician("spnMovementMusicianreputation", (i * JSONconfig[0].valuePracticeReputation));

    break;
    case 1:
      //gig
      intDays = document.getElementById("divGigDays").value;
      intDayCost = JSONvenue[document.getElementById("selVenueComboBox").value].money;
      intTotalCost = (document.getElementById("divGigDays").value * JSONvenue[document.getElementById("selVenueComboBox").value].money);
      strTemp = "To <strong>Gig</strong> for <strong>" + document.getElementById("divGigDays").value + "</strong> day(s), at <strong>"+JSONconfig[0].currency + intDayCost + "</strong> per day, will cost a total of <strong>" + JSONconfig[0].currency + intTotalCost + "</strong>";
    break;
    case 2:
      //publicity
      intDays = JSONconfig[0].valuePublicityDaysDuration;
      intDayCost = (JSONconfig[0].valuePublicityCost);
      intTotalCost = (JSONconfig[0].valuePublicityCost);
      strTemp = "To gain <strong>Publicity</strong> for <strong>" + i + "</strong> day(s), at <strong>"+JSONconfig[0].currency + intDayCost + "</strong> per day, will cost a total of <strong>" + JSONconfig[0].currency + intTotalCost + "</strong>";
    break;
    case 3:
      //gifts
      intDays = JSONconfig[0].valueGiftDaysDuration;
      intDayCost = (JSONgift[i].money);
      intTotalCost = (JSONgift[i].money * JSONband[0].musician.length);
      strTemp = "Buying <strong>Gifts</strong> for <strong>" + JSONband[0].musician.length + "</strong> musician(s), at <strong>"+JSONconfig[0].currency + intDayCost + "</strong> per musician, will cost a total of <strong>" + JSONconfig[0].currency + intTotalCost + "</strong>";
      strTemp += "<br>";
      strTemp += "For each of the "+JSONband[0].musician.length+" musician(s) in <strong>" + JSONband[0].name + "</strong> they will recieve <strong>" + JSONgift[i].happiness + "</strong> Happiness";
    break;
    case 4:
      //record
      intDays = JSONtracks[i].days;
      intDayCost = (JSONtracks[i].money);
      intTotalCost = (JSONtracks[i].money);
      strTemp = "To <strong>Record</strong> a <strong>" + JSONtracks[i].tracks + "</strong>-track album will take <strong>"+JSONtracks[i].days+"</strong> day(s) and cost a total of <strong>"+JSONconfig[0].currency + intDayCost + "</strong>";
    break;
    case 5:
      //release
      intDays = JSONconfig[0].valueReleaseDaysDuration;
      intDayCost = (JSONconfig[0].valueReleaseCost);
      intTotalCost = (JSONdirector[document.getElementById("selDirectorComboBox").value].money + JSONlocation[document.getElementById("selLocationComboBox").value].money + JSONfeature[document.getElementById("selFeatureComboBox").value].money);
      strTemp = "To <strong>Release</strong> a <strong>Single</strong> it will take <strong>"+1+"</strong> day(s) and cost a total of <strong>"+JSONconfig[0].currency + intTotalCost + "</strong>";
      strTemp += "To create a music video directed by <strong>"+JSONdirector[document.getElementById("selDirectorComboBox").value].name+"</strong> in <strong>"+JSONlocation[document.getElementById("selLocationComboBox").value].name+"</strong> featuring <strong>"+JSONfeature[document.getElementById("selFeatureComboBox").value].name+"</strong>, will take <strong>1</strong> day(s) and cost a total of <strong>"+JSONconfig[0].currency + intTotalCost + "</strong>";
    break;
  } //switch

  // intTotalCost = -intTotalCost; //turn into negative number
  guiDisplayMovementLabelBand("spnMovementBandmoney", (intDays * intDayCost));
  updateElement("divActionCost", "<br>" + strTemp); //updates element

} //function

function guiDisplayMovementLabelMusician(strID, intTotalCost) {
  //Updates how much will be taken for the property, applying the appropiate class
  var strTemp = "";
  var elems = document.getElementsByName(strID);

  for (var m = 0; m < elems.length; m++) {

    if (intTotalCost < 0) {
      elems[m].setAttribute("class", "valueNegative");
      strTemp = "&nbsp;";
    } else {
      elems[m].setAttribute("class", "valuePositive");
      strTemp = "&nbsp; +";
    } //if
    elems[m].innerHTML = strTemp + displayNumbersWithCommas(intTotalCost);

  } //for

} //function
function guiDisplayMovementLabelBand(strID, intTotalCost) {
  //Updates how much will be taken for the property, applying the appropiate class
  var elem = document.getElementById(strID);
  var strTemp = "";
  elem.setAttribute("class", "valueNegative");
  if (intTotalCost < 0) {
    elem.setAttribute("class", "valueNegative");
    strTemp = "&nbsp;";
  } else {
    elem.setAttribute("class", "valuePositive");
    strTemp = "&nbsp; +";
  } //if
  elem.innerHTML = strTemp + displayNumbersWithCommas(intTotalCost);
} //function

function guiDisplayActionCurrent(i) {
  var strTemp = "";
  strTemp = "<strong>" + JSONband[i].name + "</strong> is <strong>" + getActionName(JSONband[i].action) + "</strong> for <strong>" + JSONband[i].days + "</strong> day(s). They are due to finish on <strong>" + JSONband[i].dateActionFinish + "</strong>";

  if (i==0)
    strTemp = "Choose an action"; //dont want to show Player's current action

  updateElement("divBandActionCurrent", "<br>" + strTemp);

} //function




//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function guiDisplayDetailsCreateHTMLcomboBoxTopLevel(arrTemp, strID) {
  var strTemp = "";
  strTemp += "<select id='"+strID+"' onChange=''>";
  for (i in arrTemp) {
    strTemp += "<option value='" + i + "'>" + arrTemp[i].name + "</option>";
  }
  strTemp += "</select>";
  return strTemp;
} //function

function guiDisplayDetailsCreateHTMLcomboBox(arrTemp, strID) {
  var strTemp = "";
  strTemp += "<select id='"+strID+"' onChange=''>";
  for (l in arrTemp) {
    //for every label
    strTemp += "<option value='" + l + "'>" + arrTemp[l][1] + "</option>";
  } //for musician
  strTemp += "</select>";
  return strTemp;
} //function

function guiDisplayDetailsCreateHTMLcomboBoxAlbums(strID) {
  var strTemp = "";
  strTemp += "<select id='"+strID+"' onChange='showAlbumSingles(this.value)'>";
  for (b in JSONband[0].album) {
    //for every band album
    strTemp += "<option value='" + JSONband[0].album[b] + "'>" + JSONalbum[JSONband[0].album[b]].name + "</option>";
  } //for
  strTemp += "</select>";
  return strTemp;
} //function
function guiDisplayDetailsCreateHTMLcomboBoxSingles(i, strID) {
  var strTemp = "";
  strTemp += "<select id='"+strID+"' onChange=''>";
    for (t in JSONsingle) {
      if (JSONsingle[t].album == i) {
        //SAME album so track belongs to album
        strTemp += "<option value='" + t + "'>" + JSONsingle[t].name + "</option>";
      } //if
    } //for
  strTemp += "</select>";
  return strTemp;
} //function

function showAlbumSingles(i) {
  updateElement("divBandAlbumSingles", guiDisplayDetailsCreateHTMLcomboBoxSingles(i, "selBandAlbumSingles"));
} //function
