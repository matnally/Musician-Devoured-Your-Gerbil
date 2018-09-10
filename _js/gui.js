
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

  guiDisplayDetailsBandMusicians(0);

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
      strTemp += "<br>";
      strTemp += "For each of the "+JSONband[0].musician.length+" musician(s) in <strong>" + JSONband[0].name + "</strong> they will recieve <strong>" + JSONconfig[0].valuePracticeSkill + "</strong> Skill, <strong>" + JSONconfig[0].valuePracticeHappiness + "</strong> Happiness and <strong>" + JSONconfig[0].valuePracticeReputation + "</strong> Reputation for each day's practice, not included any extra bonuses for using the musician's favourite equipment.";

      guiDisplayMovementLabelMusician("spnMovementMusicianskill", (i * JSONconfig[0].valuePracticeSkill));
      guiDisplayMovementLabelMusician("spnMovementMusicianhappiness", (i * JSONconfig[0].valuePracticeHappiness));
      guiDisplayMovementLabelMusician("spnMovementMusicianreputation", (i * JSONconfig[0].valuePracticeReputation));

    break;
    case 1:
      //gig
      intDayCost = displayNumbersWithCommas(JSONvenue[document.getElementById("selVenueComboBox").value].money);
      intTotalCost = displayNumbersWithCommas(document.getElementById("divGigDays").value * JSONvenue[document.getElementById("selVenueComboBox").value].money);
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


  // intTotalCost = -intTotalCost; //turn into negative number
  guiDisplayMovementLabelBand("spnMovementBandmoney", (i * intDayCost));

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
    elems[m].innerHTML = strTemp + intTotalCost;


  } //for

} //function


function guiDisplayMovementLabelBand(strID, intTotalCost) {
  //Updates how much will be taken for the property, applying the appropiate class
  var elem = document.getElementById(strID);
  var strTemp = "";
  if (intTotalCost < 0) {
    elem.setAttribute("class", "valueNegative");
    strTemp = "&nbsp;";
  } else {
    elem.setAttribute("class", "valuePositive");
    strTemp = "&nbsp; +";
  } //if
  elem.innerHTML = strTemp + intTotalCost;
} //function



function guiDisplayActionCurrent(i) {

  var strTemp = "";
      strTemp = "<strong>" + JSONband[i].name + "</strong> is <strong>" + getActionName(JSONband[i].action) + "</strong> for <strong>" + JSONband[i].days + "</strong> day(s). They are due to finish on <strong>" + JSONband[i].dateActionFinish + "</strong>";
  updateElement("divBandActionCurrent", "<br>" + strTemp);

} //function




















var GLOBALBandi = 0;
function guiDisplayDetailsBand(i) {

  i = parseInt(i);

  if (i < 0)
    i = JSONband.length - 1;

  if (i >= JSONband.length)
    i=0;

  GLOBALBandi = i;

  updateElement("divBandDetails", guiDisplayDetailsCreateHTMLband(guiDisplayDetailsReturnArray(JSONband[i])));

} //function
var GLOBALMusiciani = 0;
function guiDisplayDetailsMusician(i) {

  i = parseInt(i);

  if (i < 0)
    i = JSONmusician.length - 1;

  if (i >= JSONmusician.length)
    i=0;

  GLOBALMusiciani = i;

  updateElement("divMusicianDetails", guiDisplayDetailsCreateHTMLband(guiDisplayDetailsReturnArray(JSONmusician[i])));
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

function guiDisplayDetailsCreateHTMLband(arrTemp) {
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
    strTemp += "<span id='spnMovementBand"+arrTemp[l][0]+"'>";
    strTemp += "</span>";
    strTemp += "</p>";

  } //for band

  return strTemp;
} //function
function guiDisplayDetailsCreateHTMLmusician(arrTemp) {
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
    strTemp += "<span name='spnMovementMusician"+arrTemp[l][0]+"'>";
    strTemp += "</span>";
    strTemp += "</p>";

  } //for musician

  return strTemp;
} //function

function guiDisplayDetailsCreateHTMLalbum(intBandAlbumID) {
  var strTemp = "";
  strTemp += "<p>";
  strTemp += JSONalbum[intBandAlbumID].name + " - " + JSONalbum[intBandAlbumID].tracks + " track album";
  strTemp += "</p>";
  for (t in JSONsingle) {
    if (JSONsingle[t].album == intBandAlbumID) {
      //SAME album so track belongs to album
      strTemp += "<p>";
      strTemp += JSONsingle[t].name;
      strTemp += "</p>";
    } //if
  } //for
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








function displayJSON() {

  console.log("************** START OF BAND JSON************************");
  console.log(JSON.stringify(JSONband));
  console.log("************** END OF BAND JSON************************");
  console.log("************** START OF ALBUM JSON************************");
  console.log(JSON.stringify(JSONalbum));
  console.log("************** END OF ALBUM JSON************************");
  console.log("************** START OF SINGLES JSON************************");
  console.log(JSON.stringify(JSONsingle));
  console.log("************** END OF SINGLES JSON************************");

} //function
