
function guiCreateElements() {
  //Creates and displays all elements needed for the game

  //COMBO BOXES
  //Game Start
  updateElement("divBandComboBox", guiDisplayDetailsCreateHTMLcomboBoxTopLevel(JSONband, "selBandComboBox"));
  updateElement("divMusicianComboBox", guiDisplayDetailsCreateHTMLcomboBoxTopLevel(JSONmusician, "selMusicianComboBox"));
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

  document.getElementById("selMusicianComboBox").addEventListener("change",function(event){
    guiDisplayDetailsMusician(this.value);
  });

//START MAIN MENU
  document.getElementById("divPracticeComboBox").addEventListener("change",function(event){
    guiDisplayActionCost(this.value, 0); //0 = Practice
  });

  //GIG
  document.getElementById("selVenueComboBox").addEventListener("change",function(event){
    guiDisplayActionCost(this.value, 1); //1 = Gig
  });
  document.getElementById("selTicketPriceComboBox").addEventListener("change",function(event){
    guiDisplayActionCost(this.value, 1); //1 = Gig
  });
  document.getElementById("divGigDays").addEventListener("change",function(event){
    guiDisplayActionCost(this.value, 1); //1 = Gig
  });

  document.getElementById("secPublicity").addEventListener("mousemove",function(event){
    guiDisplayActionCost(1, 2); //2 = Publicity
  });

//END MAIN MENU

  document.getElementById("selGiftComboBox").addEventListener("change",function(event){
    guiDisplayActionCost(this.value, 3); //3 = Gifts
  });

  document.getElementById("selTracksComboBox").addEventListener("change",function(event){
    guiDisplayActionCost(this.value, 4); //4 = Record
  });

  //Release
  document.getElementById("selDirectorComboBox").addEventListener("change",function(event){
    guiDisplayActionCost(this.value, 5); //5 = Release
  });
  document.getElementById("selLocationComboBox").addEventListener("change",function(event){
    guiDisplayActionCost(this.value, 5); //5 = Release
  });
  document.getElementById("selFeatureComboBox").addEventListener("change",function(event){
    guiDisplayActionCost(this.value, 5); //5 = Release
  });

} //function


function guiDisplayActionCost(i, index) {

  var strTemp = "";
  var intTotalCost = 0;
  var intDayCost = 0;
  var intTotalCost = "";

  switch(index) {
    case 0:
      //practice
      intDayCost = displayNumbersWithCommas(JSONconfig[0].valuePracticeCost);
      intTotalCost = displayNumbersWithCommas(i * JSONconfig[0].valuePracticeCost);
      strTemp = "To <strong>Practice</strong> for <strong>" + i + "</strong> day(s), at <strong>"+JSONconfig[0].currency + intDayCost + "</strong> per day, will cost a total of <strong>" + JSONconfig[0].currency + intTotalCost + "</strong>";
    break;
    case 1:
      //gig
      intDayCost = displayNumbersWithCommas(JSONvenue[i].money);
      intTotalCost = displayNumbersWithCommas(document.getElementById("divGigDays").value * JSONvenue[i].money);
      strTemp = "To <strong>Gig</strong> for <strong>" + i + "</strong> day(s), at <strong>"+JSONconfig[0].currency + intDayCost + "</strong> per day, will cost a total of <strong>" + JSONconfig[0].currency + intTotalCost + "</strong>";
    break;
    case 2:
      //publicity
      intDayCost = displayNumbersWithCommas(JSONconfig[0].valuePublicityCost);
      intTotalCost = displayNumbersWithCommas(JSONconfig[0].valuePublicityCost);
      strTemp = "To gain <strong>Publicity</strong> for <strong>" + i + "</strong> day(s), at <strong>"+JSONconfig[0].currency + intDayCost + "</strong> per day, will cost a total of <strong>" + JSONconfig[0].currency + intTotalCost + "</strong>";
    break;
    case 3:
      //gifts
      intDayCost = displayNumbersWithCommas(JSONgift[i].money);
      intTotalCost = displayNumbersWithCommas(JSONgift[i].money * JSONband[0].musician.length);
      strTemp = "Buying <strong>Gifts</strong> for <strong>" + JSONband[0].musician.length + "</strong> musician(s), at <strong>"+JSONconfig[0].currency + intDayCost + "</strong> per musician, will cost a total of <strong>" + JSONconfig[0].currency + intTotalCost + "</strong>";
    break;
    case 4:
      //record
      intDayCost = displayNumbersWithCommas(JSONtracks[i].money);
      intTotalCost = displayNumbersWithCommas(JSONtracks[i].money);
      strTemp = "To <strong>Record</strong> a <strong>" + JSONtracks[i].tracks + "</strong>-track album will take <strong>"+JSONtracks[i].days+"</strong> day(s) and cost a total of <strong>"+JSONconfig[0].currency + intDayCost + "</strong>";
    break;
    case 5:
      //release
      intDayCost = displayNumbersWithCommas(JSONconfig[0].valueReleaseCost);
      intTotalCost = displayNumbersWithCommas(JSONdirector[document.getElementById("selDirectorComboBox").value].money + JSONlocation[document.getElementById("selLocationComboBox").value].money + JSONfeature[document.getElementById("selFeatureComboBox").value].money);
      strTemp = "To <strong>Release</strong> a <strong>Single</strong> it will take <strong>"+1+"</strong> day(s) and cost a total of <strong>"+JSONconfig[0].currency + intTotalCost + "</strong>";
      strTemp += "To create a music video directed by <strong>"+JSONdirector[document.getElementById("selDirectorComboBox").value].name+"</strong> in <strong>"+JSONlocation[document.getElementById("selLocationComboBox").value].name+"</strong> featuring <strong>"+JSONfeature[document.getElementById("selFeatureComboBox").value].name+"</strong>, will take <strong>1</strong> day(s) and cost a total of <strong>"+JSONconfig[0].currency + intTotalCost + "</strong>";
    break;
  } //switch

  updateElement("divActionCost", "<br>" + strTemp);

} //function




















var GLOBALBandi = 0;
function guiDisplayDetailsBand(i) {

  i = parseInt(i);

  if (i < 0)
    i = JSONband.length - 1;

  if (i >= JSONband.length)
    i=0;

  GLOBALBandi = i;

  updateElement("divBandDetails", guiDisplayDetailsCreateHTMLtable(guiDisplayDetailsReturnArray(JSONband[i])));

} //function
var GLOBALMusiciani = 0;
function guiDisplayDetailsMusician(i) {

  i = parseInt(i);

  if (i < 0)
    i = JSONmusician.length - 1;

  if (i >= JSONmusician.length)
    i=0;

  GLOBALMusiciani = i;

  updateElement("divMusicianDetails", guiDisplayDetailsCreateHTMLtable(guiDisplayDetailsReturnArray(JSONmusician[i])));
} //function


function guiDisplayDetailsReturnArray(JSONtoUse) {
  //Returns array of fully formed labeks and values to display
  /*
    METHOD
    ======
    Get the labels to display from JSON
    Get the alternative value, if any, for the values
    Get the alternative names, if any, for the labels
  */
  var arrTemp = [];
      arrTemp = guiDisplayDetailsLabelsReturnArray(JSONtoUse); //Get what to show
      arrTemp = guiDisplayDetailsLabelsGetAlternativeValues(arrTemp); //Get alternative value | Value first as labels may change and using that for comparison
//      arrTemp = guiDisplayDetailsLabelsGetAlternativeLabels(arrTemp); //Get alternative labels
  return arrTemp;
} //function

function guiDisplayDetailsLabelsReturnArray(JSONtoUse) {
  //Iterates through JSONtoUse for output
  var strTemp = "";
  var arrTemp = [];
  var strLabel = "";
  var strLabelValue = "";

  if (JSONtoUse.length > 0) {
    //MULTIPLE
    for (i in JSONtoUse) {
      //for every band
      for (k in JSONtoUse[i]) {
        //for every key value in band
        if (JSONtoUse[i].hasOwnProperty(k)) {
          strLabel = k;
          strLabelValue = JSONtoUse[i][k];

          if (guiDisplayDetailsLabelsCheckToShow(strLabel))
            arrTemp.push([strLabel,strLabelValue]);

        } //if
      } //for every key value in band
    } //for every band

  } else {
    //SINGLE
    for (k in JSONtoUse) {
      //for every key value in band
      if (JSONtoUse.hasOwnProperty(k)) {
        strLabel = k;
        strLabelValue = JSONtoUse[k];

        if (guiDisplayDetailsLabelsCheckToShow(strLabel))
          arrTemp.push([strLabel,strLabelValue]);

      } //if
    } //for every key value in band

  } //if

  return arrTemp;

} //function
function guiDisplayDetailsLabelsCheckToShow(strLabel) {
  //Check to see if label exists in JSONgui, if so then show!
  var boolTemp = false;
  for (l in JSONgui[0]) {
    if (strLabel == l)
      boolTemp = true;
  } //for
  return boolTemp;
} //function

function guiDisplayDetailsLabelsGetAlternativeLabels(arrTemp) {
  //Get alternative labels
  for (a in arrTemp) {
  //for every label
    for (b in JSONgui[0]) {
      if (arrTemp[a][0] == b) {
        //Found label
        arrTemp[a][0] = JSONgui[0][b].label;
      } //if
    } //for
  } //for
  return arrTemp;
} //function
function guiDisplayDetailsLabelsGetAlternativeValues(arrTemp) {
  //Get alternative value
  for (a in arrTemp) {
  //for every label
      switch(arrTemp[a][0]) {
        case "money":
          //money
        break;
        case "gift":
          //gift
          arrTemp[a][1] = JSONgift[arrTemp[a][1]].name;
        break;
        default:
      } //switch
  } //for
  return arrTemp;
} //function

function guiDisplayDetailsCreateHTMLtable(arrTemp) {
  var strTemp = "";

  for (l in arrTemp) {
    //for every label

    strTemp += "<p>";
    strTemp += "<span>";
    strTemp += "<img src='_images/";
    strTemp += arrTemp[l][0];
    // strTemp += "_images/gui32x32";
    strTemp += ".png";
    strTemp += "' alt='";
    strTemp += arrTemp[l][0];
    strTemp += "'>";
    strTemp += "</span>";
    strTemp += "&nbsp;";
    strTemp += arrTemp[l][1];
    strTemp += "</p>";

  } //for musician

  return strTemp;
} //function

function guiDisplayDetailsCreateHTMLsimple(arrTemp) {
  var strTemp = "";
  strTemp +="   <div class='divTable'>";
  for (l in arrTemp) {
    //for every label
    strTemp +="     <div class='divRow'>";
    strTemp +="       <div class='divCell divRight divRowLabel'>";
    strTemp +=            arrTemp[l][0];
    strTemp +="       </div> <!-- divCell -->";
    strTemp +="       <div class='divCell'>";
    strTemp +=            arrTemp[l][1];
    strTemp +="       </div> <!-- divCell -->";
    strTemp +="     </div> <!-- divRow -->";
  } //for musician
  strTemp +="   </div> <!-- divTable -->";
  return strTemp;
} //function

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
