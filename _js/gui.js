
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
  // document.getElementById("selTracksComboBox").addEventListener("change",function(event){
  //   setAlbumTracks(this.value);
  // });
  //
  // document.getElementById("selGiftComboBox").addEventListener("change",function(event){
  //   guiActionCostCalc(3);
  // });
  //
  // document.getElementById("selVenueComboBox").addEventListener("change",function(event){
  //   guiActionCostCalc(1);
  // });
  // document.getElementById("divTicketPriceComboBox").addEventListener("change",function(event){
  //   guiActionCostCalc(1);
  // });

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
      arrTemp = guiDisplayDetailsLabelsGetAlternativeLabels(arrTemp); //Get alternative labels
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

function guiDisplayDetailsCreateHTMLsimple(arrTemp) {
  var strTemp = "";

  for (l in arrTemp) {
    //for every label

    strTemp +="<div>";
    strTemp += arrTemp[l][0];
    strTemp += arrTemp[l][1];
    strTemp +="</div>";
  } //for musician

  return strTemp;
} //function

function guiDisplayDetailsCreateHTMLtable(arrTemp) {
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
