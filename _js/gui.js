
var GLOBALBandi = 0;
var GLOBALMusiciani = 0;

function guiCreateElements() {
  //Creates and displays all elements needed for the game

  //COMBO BOXES
  //Game Start
  // updateElement("divBandMusicians", guiDisplayDetailsCreateHTMLcomboBoxTopLevel(JSONband, "selBandComboBox"));
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
  document.getElementById("selPracticeComboBox").addEventListener("change",function(event){
    guiDisplayActionCost(this.value, 0); //0 = Practice
  }, {passive: true});

  //GIG
  document.getElementById("selVenueComboBox").addEventListener("change",function(event){
    guiDisplayActionCost(this.value, 1); //1 = Gig
  }, {passive: true});
  document.getElementById("selTicketPriceComboBox").addEventListener("change",function(event){
    guiDisplayActionCost(this.value, 1); //1 = Gig
  }, {passive: true});
  document.getElementById("selGigDays").addEventListener("change",function(event){
    guiDisplayActionCost(this.value, 1); //1 = Gig
  }, {passive: true});

  // document.getElementById("secPublicity").addEventListener("mousemove",function(event){
  //   guiDisplayActionCost(1, 2); //2 = Publicity
  // }, {passive: true});
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
      intDays = document.getElementById("selPracticeComboBox").value;
      intDayCost = (JSONconfig[0].valuePracticeCost);

      strTemp = getGameText(JSONconfig[0].practiceEstimate);

      guiDisplayMovementLabelMusician("spnMovementMusicianskill", (i * JSONconfig[0].valuePracticeSkill));
      guiDisplayMovementLabelMusician("spnMovementMusicianhappiness", (i * JSONconfig[0].valuePracticeHappiness));
      guiDisplayMovementLabelMusician("spnMovementMusicianreputation", (i * JSONconfig[0].valuePracticeReputation));

    break;
    case 1:
      //gig
      intDays = document.getElementById("selGigDays").value;
      intDayCost = JSONvenue[document.getElementById("selVenueComboBox").value].money;

      strTemp = getGameText(JSONconfig[0].gigEstimate);

      guiDisplayMovementLabelMusician("spnMovementMusicianskill", (i * JSONconfig[0].valueGigSkill));
      guiDisplayMovementLabelMusician("spnMovementMusicianhappiness", (i * JSONconfig[0].valueGigHappiness));
      guiDisplayMovementLabelMusician("spnMovementMusicianreputation", (i * JSONconfig[0].valueGigReputation));

    break;
    case 2:
      //publicity
      intDays = JSONconfig[0].valuePublicityDaysDuration;
      intDayCost = (JSONconfig[0].valuePublicityCost);

      // strTemp = "To gain <strong>Publicity</strong> for <strong>" + i + "</strong> day(s), at <strong>"+JSONconfig[0].currency + intDayCost + "</strong> per day, will cost a total of <strong>" + JSONconfig[0].currency + intTotalCost + "</strong>";

      //No need to display anything as its chance!

    break;
    case 3:
      //gifts
      intDays = JSONconfig[0].valueGiftDaysDuration;
      intDayCost = (JSONgift[i].money * JSONband[0].musician.length);

      strTemp = getGameText(JSONconfig[0].giftEstimate);

      // intTotalCost = (JSONgift[i].money * JSONband[0].musician.length);

      // strTemp = "Buying <strong>Gifts</strong> for <strong>" + JSONband[0].musician.length + "</strong> musician(s), at <strong>"+JSONconfig[0].currency + intDayCost + "</strong> per musician, will cost a total of <strong>" + JSONconfig[0].currency + intTotalCost + "</strong>";
      // strTemp += "<br>";
      // strTemp += "For each of the "+JSONband[0].musician.length+" musician(s) in <strong>" + JSONband[0].name + "</strong> they will recieve <strong>" + JSONgift[i].happiness + "</strong> Happiness";
      //
      // intDayCost = intTotalCost;

      guiDisplayMovementLabelMusician("spnMovementMusicianhappiness", JSONgift[i].happiness);

    break;
    case 4:
      //record
      intDays = JSONtracks[i].days;
      intDayCost = (JSONtracks[i].money);
      intTotalCost = (JSONtracks[i].money * intDays);
      strTemp = "To <strong>Record</strong> a <strong>" + JSONtracks[i].tracks + "</strong>-track album will take <strong>"+JSONtracks[i].days+"</strong> day(s) at <strong>"+JSONconfig[0].currency + intDayCost+"</strong> per day and cost a total of <strong>"+JSONconfig[0].currency + intTotalCost + "</strong>";

      // updateElement("spnMovementMusicianskill", "");
      // updateElement("spnMovementMusicianhappiness", "");
      // updateElement("spnMovementMusicianreputation", "");

    break;
    case 5:
      //release
      intDays = JSONconfig[0].valueReleaseDaysDuration;
      intDayCost = (JSONconfig[0].valueReleaseCost);
      intTotalCost = (JSONdirector[document.getElementById("selDirectorComboBox").value].money + JSONlocation[document.getElementById("selLocationComboBox").value].money + JSONfeature[document.getElementById("selFeatureComboBox").value].money);

      strTemp = "To <strong>Release</strong> a <strong>Single</strong> it will take <strong>"+1+"</strong> day(s) and cost a total of <strong>"+JSONconfig[0].currency + intDayCost + "</strong>";
      strTemp += "To create a music video directed by <strong>"+JSONdirector[document.getElementById("selDirectorComboBox").value].name+"</strong> in <strong>"+JSONlocation[document.getElementById("selLocationComboBox").value].name+"</strong> featuring <strong>"+JSONfeature[document.getElementById("selFeatureComboBox").value].name+"</strong>, will take <strong>1</strong> day(s) and cost a total of <strong>"+JSONconfig[0].currency + intTotalCost + "</strong>";

      intDayCost = intDayCost + intTotalCost;
      strTemp += "Thats a grand total of " + JSONconfig[0].currency + intDayCost;

      // updateElement("spnMovementMusicianskill", "");
      // updateElement("spnMovementMusicianhappiness", "");
      // updateElement("spnMovementMusicianreputation", "");

    break;
  } //switch

  // intTotalCost = -intTotalCost; //turn into negative number
  guiDisplayMovementLabelBand("spnMovementBandmoney", -Math.abs((intDays * intDayCost)));
  updateElement("divActionCost", "<br>" + strTemp); //updates element

} //function

function guiDisplayMovementLabelMusician(strID, intTotalCost) {
  //Updates how much will be taken for the property, applying the appropiate class
  var strTemp = "";
  var elems = document.getElementsByName(strID);

  for (var m = 0; m < elems.length; m++) {

    if (intTotalCost > 0) {
      elems[m].setAttribute("class", "valuePositive");
      strTemp = "&nbsp; +";
    } else {
      elems[m].setAttribute("class", "valueNegative");
      strTemp = "&nbsp;";
    } //if

    elems[m].innerHTML = strTemp + displayNumbersWithCommas(intTotalCost);
    // document.getElementById(strID).innerHTML = strTemp + displayNumbersWithCommas(intTotalCost);

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



function guiDisplayDate(datDate) {

    var strTemp = "";
    var strMonth = "";
    var strDay = "";

    var arrDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    strDay = arrDays[datDate.getDay()];

    var arrMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    strMonth = arrMonths[datDate.getMonth()];

    strTemp = strDay + " " + datDate.getDate() + " " + strMonth + " " + datDate.getFullYear();

    return strTemp;
} //function


function getGameStatClass(inValue, strKeyName) {
  var strClassName = "";

  var intMusicianAGG = parseInt(getAGGattributeFromMusicians(strKeyName));
  var intMusicianAVG = (intMusicianAGG / JSONmusician.length).toFixed(0);

var intTotal = 0;
    intTotal = inValue - intMusicianAVG;

    strClassName = "";

    if (intTotal >= 200) {
      strClassName = "gradient_0";
    } else if (intTotal >= 190) {
      strClassName = "gradient_5";
    } else if (intTotal >= 180) {
      strClassName = "gradient_10";
    } else if (intTotal >= 170) {
      strClassName = "gradient_15";
    } else if (intTotal >= 160) {
      strClassName = "gradient_20";
    } else if (intTotal >= 150) {
      strClassName = "gradient_25";
    } else if (intTotal >= 140) {
      strClassName = "gradient_30";
    } else if (intTotal >= 130) {
      strClassName = "gradient_35";
    } else if (intTotal >= 120) {
      strClassName = "gradient_40";
    } else if (intTotal >= 110) {
      strClassName = "gradient_45";
    } else if (intTotal >= 100) {
      strClassName = "gradient_50";
    } else if (intTotal >= 90) {
      strClassName = "gradient_55";
    } else if (intTotal >= 80) {
      strClassName = "gradient_60";
    } else if (intTotal >= 70) {
      strClassName = "gradient_65";
    } else if (intTotal >= 60) {
      strClassName = "gradient_70";
    } else if (intTotal >= 50) {
      strClassName = "gradient_75";
    } else if (intTotal >= 40) {
      strClassName = "gradient_80";
    } else if (intTotal >= 30) {
      strClassName = "gradient_85";
    } else if (intTotal >= 20) {
      strClassName = "gradient_90";
    } else if (intTotal >= 10) {
      strClassName = "gradient_95";
    } else if (intTotal >= 0) {
      strClassName = "gradient_100";
    // } else if (intTotal < 0) {
    //   strClassName = "valueBad";

    //
    //
  } else if (intTotal <= -120) {
      strClassName = "valueBad400";
    } else if (intTotal <= -90) {
      strClassName = "valueBad300";
    } else if (intTotal <= -60) {
      strClassName = "valueBad200";
    } else if (intTotal <= -30) {
      strClassName = "valueBad100";
    } else if (intTotal < 0) {
      strClassName = "valueBad50";
    } // else ifs

  // switch (true) {
  //   case (intTotal > 400):
  //     strClassName = "valueGood400";
  //   break;
  //   case (intTotal > 300):
  //     strClassName = "valueGood300";
  //   break;
  //   case (intTotal > 200):
  //     strClassName = "valueGood200";
  //   break;
  //   case (intTotal > 100):
  //     strClassName = "valueGood100";
  //   break;
  //   case (intTotal > 50):
  //     strClassName = "valueGood50";
  //   break;
  //
  //   case (intTotal < -100):
  //     strClassName = "valueBad100";
  //   break;
  //   case (intTotal < -50):
  //     strClassName = "valueBad50";
  //   break;
  //
  //   // case (intTotal < -400):
  //   //   strClassName = "valueBad400";
  //   // break;
  //   // case (intTotal < -300):
  //   //   strClassName = "valueBad300";
  //   // break;
  //   // case (intTotal < -200):
  //   //   strClassName = "valueBad200";
  //   // break;
  //
  //   default:
  // } //switch

  // console.log("intTotal: " + intTotal);
  // console.log("strClassName: " + strClassName);

  // if (inValue > intMusicianAVG)
  //   strClassName = "valueGood";
  // else
  //   strClassName = "valueBad";

  return strClassName;
} //function


function guiClearLabels() {

  var elems = document.getElementsByName("spnMovementMusicianskill");
  for (var m = 0; m < elems.length; m++) {
    elems[m].innerHTML = "";
    // updateElement(elems[m], "");
  } // for
  elems = document.getElementsByName("spnMovementMusicianhappiness");
  for (var m = 0; m < elems.length; m++) {
    elems[m].innerHTML = "";
    // updateElement(elems[m], "");
  } // for
  elems = document.getElementsByName("spnMovementMusicianreputation");
  for (var m = 0; m < elems.length; m++) {
    elems[m].innerHTML = "";
    // updateElement(elems[m], "");
  } // for
  updateElement("spnMovementBandmoney", "");
  updateElement("divActionCost", ""); //updates element

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
