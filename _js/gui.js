
function guiCreateHTMLBand(i) {

  var elemTemplateNode = "";
  var elemTemplateItem = "";
  var strTemp = ""; // To hold the HTML
  var strClass = ""; // Class to add

  var elemTemplate = document.querySelector("template.templateBand"); //Get template

  elemTemplateNode = document.importNode(elemTemplate, true); // Create new node, based on the template

  // ID
  elemTemplateItem = elemTemplateNode.content.querySelector("div.divTableWrapperGUI");
  elemTemplateItem.setAttribute("id", "band" + i); //give it a unquie ID based on musican ID
  elemTemplateItem.classList.add("w3");

  // Name
  elemTemplateItem = elemTemplateNode.content.querySelector("div.bandName");
  elemTemplateItem.textContent = JSONband[i].name; //change name
  // Band Image
  elemTemplateItem = elemTemplateNode.content.querySelector("img.bandImage");
  elemTemplateItem.setAttribute("src", JSONconfig[0].imagesFolder + "gui32x32.png"); //give it a unquie ID based on musican ID
  elemTemplateItem.setAttribute("alt", JSONband[i].name); //give it a unquie ID based on musican ID
  // Money
  elemTemplateItem = elemTemplateNode.content.querySelector("div.bandMoney");
  elemTemplateItem.textContent = JSONconfig[0].currency + displayNumbersWithCommas(JSONband[i].money);
  // Wages
  elemTemplateItem = elemTemplateNode.content.querySelector("div.bandWages");
  elemTemplateItem.textContent = JSONconfig[0].currency + displayNumbersWithCommas(getBandAGGattributeFromMusiciansSingle(i, 'wage'));

  // Reputation
  elemTemplateItem = elemTemplateNode.content.querySelector("div.bandReputation");
  elemTemplateItem.textContent = JSONband[i].reputation;

  // Equipment
  elemTemplateItem = elemTemplateNode.content.querySelector("img.bandEquipment");
  elemTemplateItem.setAttribute("src", JSONconfig[0].imagesFolder + "gui32x32.png"); //give it a unquie ID based on musican ID
  elemTemplateItem.setAttribute("alt", JSONequipment[JSONband[i].equipment].name); //give it a unquie ID based on musican ID

  // Contract
  elemTemplateItem = elemTemplateNode.content.querySelector("img.bandContract");
  elemTemplateItem.setAttribute("src", JSONconfig[0].imagesFolder + "gui32x32.png"); //give it a unquie ID based on musican ID
  if (JSONband[i].contract == false) {
    elemTemplateItem.setAttribute("alt", "None"); //give it a unquie ID based on musican ID
  } else {
    elemTemplateItem.setAttribute("alt", JSONequipment[JSONband[i].contract].name); //give it a unquie ID based on musican ID
  } //if

  strTemp += elemTemplateNode.innerHTML; //get innerHTML so does get the template tags. If get the TEMPLATE tags it won't show by default

  return strTemp;

} //function

function guiCreateHTMLAlbum(i) {

  var elemTemplateNode = "";
  var elemTemplateItem = "";
  var strTemp = ""; // To hold the HTML
  var strClass = ""; // Class to add
  var elemTemplate = ""; //Get template

  for (a in JSONband[i].album) {

    elemTemplate = document.querySelector("template.templateAlbum"); //Get template
    elemTemplateNode = document.importNode(elemTemplate, true); // Create new node, based on the template

    // ID
    elemTemplateItem = elemTemplateNode.content.querySelector("div.divTableWrapperGUI");
    elemTemplateItem.setAttribute("id", "album" + a); //give it a unquie ID based on musican ID

    elemTemplateItem.classList.add("wc");

    // Name
    elemTemplateItem = elemTemplateNode.content.querySelector("div.albumName");
    elemTemplateItem.textContent = JSONalbum[JSONband[i].album[a]].name; //change name
    // album Image
    elemTemplateItem = elemTemplateNode.content.querySelector("img.albumImage");
    elemTemplateItem.setAttribute("src", JSONconfig[0].imagesFolder + "gui32x32.png"); //give it a unquie ID based on musican ID
    elemTemplateItem.setAttribute("alt", JSONalbum[JSONband[i].album[a]].name); //give it a unquie ID based on musican ID

    strTemp += elemTemplateNode.innerHTML; //get innerHTML so does get the template tags. If get the TEMPLATE tags it won't show by default

    elemTemplate = document.querySelector("template.templateSingle"); //Get template
    elemTemplateNode = document.importNode(elemTemplate, true); // Create new node, based on the template
    elemTemplateItem.classList.add("wc");

    for (s in JSONsingle) {
      if  (JSONsingle[s].album == JSONband[i].album[a]) {

        // Name
        elemTemplateItem = elemTemplateNode.content.querySelector("div.singleName");
        elemTemplateItem.textContent = JSONsingle[s].name; //change name

        if (!JSONsingle[s].releasedDate === false) {
          // Released flag
          elemTemplateItem = elemTemplateNode.content.querySelector("div.singleReleased");
          elemTemplateItem.textContent = "Released";
          // Current Chart Position
          elemTemplateItem = elemTemplateNode.content.querySelector("div.singleChartPositionCurrent");
          elemTemplateItem.textContent = JSONsingle[s].chartPosition;
          // Best Chart Position
          elemTemplateItem = elemTemplateNode.content.querySelector("div.singleChartPositionBest");
          elemTemplateItem.textContent = JSONsingle[s].chartPositionBest;
        } else {
          // Released flag
          elemTemplateItem = elemTemplateNode.content.querySelector("div.singleReleased");
          elemTemplateItem.textContent = "Not Released";
          // Current Chart Position
          elemTemplateItem = elemTemplateNode.content.querySelector("div.singleChartPositionCurrent");
          elemTemplateItem.textContent = "N/A";
          // Best Chart Position
          elemTemplateItem = elemTemplateNode.content.querySelector("div.singleChartPositionBest");
          elemTemplateItem.textContent = "N/A";
        } //if

        strTemp += elemTemplateNode.innerHTML; //get innerHTML so does get the template tags. If get the TEMPLATE tags it won't show by default

      } //if JSONsingle[s].album == JSONband[i].album[a]
    } //for (s in JSONsingle)

  } //for (a in JSONband[i].album)

  return strTemp;

} //function

function guiCreateHTMLMusician(m) {

  m = parseInt(m);

  if (m < 0)
    m = JSONmusician.length - 1;

  if (m >= JSONmusician.length)
    m = 0;

  GLOBALMusiciani = m;

  var elemTemplateNode = "";
  var elemTemplateItem = "";
  var strTemp = ""; // To hold the HTML
  var strClass = ""; // Class to add

  var elemTemplate = document.querySelector("template.templateMusician"); //Get template

  // for (m in JSONband[i].musician) {

    elemTemplateNode = document.importNode(elemTemplate, true); // Create new node, based on the template

    // ID
    elemTemplateItem = elemTemplateNode.content.querySelector("div.divTableWrapperGUI");
    elemTemplateItem.setAttribute("id", "musician" + m); //give it a unquie ID based on musican ID

    // Choose correct class for the table from https://www.w3schools.com/w3css/w3css_responsive.asp
    switch (true) {
      case (JSONband[0].musician.length == 2):
        strClass = "w3-half";
      break;
      case (JSONband[0].musician.length == 3):
        strClass = "w3-third";
      break;
      case (JSONband[0].musician.length == 4):
        strClass = "w3-quarter";
      break;
      default:
        strClass = "w3";
    } //switch
    elemTemplateItem.classList.add(strClass);

    // Name
    elemTemplateItem = elemTemplateNode.content.querySelector("div.musicianName");
    elemTemplateItem.textContent = JSONmusician[m].name; //change name
    // Musician Image
    elemTemplateItem = elemTemplateNode.content.querySelector("img.musicianImage");
    elemTemplateItem.setAttribute("src", JSONconfig[0].imagesFolder + "gui32x32.png"); //give it a unquie ID based on musican ID
    elemTemplateItem.setAttribute("alt", JSONmusician[m].name); //give it a unquie ID based on musican ID
    // Skill
    elemTemplateItem = elemTemplateNode.content.querySelector("div.musicianSkill");
    elemTemplateItem.textContent = JSONmusician[m].skill;
    // Happiness
    elemTemplateItem = elemTemplateNode.content.querySelector("div.musicianHappiness");
    elemTemplateItem.textContent = JSONmusician[m].happiness;
    // Reputation
    elemTemplateItem = elemTemplateNode.content.querySelector("div.musicianReputation");
    elemTemplateItem.textContent = JSONmusician[m].reputation;
    // Gift
    elemTemplateItem = elemTemplateNode.content.querySelector("img.musicianGift");
    elemTemplateItem.setAttribute("src", JSONconfig[0].imagesFolder + "gui32x32.png"); //give it a unquie ID based on musican ID
    elemTemplateItem.setAttribute("alt", JSONgift[JSONmusician[m].gift].name); //give it a unquie ID based on musican ID
    // Equipment
    elemTemplateItem = elemTemplateNode.content.querySelector("img.musicianEquipment");
    elemTemplateItem.setAttribute("src", JSONconfig[0].imagesFolder + "gui32x32.png"); //give it a unquie ID based on musican ID
    elemTemplateItem.setAttribute("alt", JSONequipment[JSONmusician[m].equipment].name); //give it a unquie ID based on musican ID
    // Wage
    elemTemplateItem = elemTemplateNode.content.querySelector("div.musicianWage");
    elemTemplateItem.textContent = JSONconfig[0].currency + displayNumbersWithCommas( JSONmusician[m].wage);

    strTemp += elemTemplateNode.innerHTML; //get innerHTML so does get the template tags. If get the TEMPLATE tags it won't show by default

  // } //for

  return strTemp;

} //function















// END OF NEW GUI

var GLOBALBandi = 0;
var GLOBALMusiciani = 0;

function guiCreateElements() {
  //Creates and displays all elements needed for the game

  //COMBO BOXES
  //Game Start
  updateElement("divEquipmentComboBox", guiDisplayDetailsCreateHTMLcomboBoxTopLevel(JSONequipment, "selEquipmentComboBox"));
  //Gig
  updateElement("divVenueComboBox", guiDisplayDetailsCreateHTMLcomboBoxTopLevel(JSONvenue, "selVenueComboBox"));
  updateElement("divTicketPriceComboBox", guiDisplayDetailsCreateHTMLcomboBoxTopLevel(JSONtickets, "selTicketPriceComboBox"));
  //Gifts
  updateElement("divGiftComboBox", guiDisplayDetailsCreateHTMLcomboBoxTopLevel(JSONgift, "selGiftComboBox"));
  //Record
  updateElement("divTracksComboBox", guiDisplayDetailsCreateHTMLcomboBoxTopLevel(JSONtracks, "selTracksComboBox"));
  //Release
  updateElement("divDirectorComboBox", guiDisplayDetailsCreateHTMLcomboBoxTopLevel(JSONdirector, "selDirectorComboBox"));
  updateElement("divFeatureComboBox", guiDisplayDetailsCreateHTMLcomboBoxTopLevel(JSONfeature, "selFeatureComboBox"));
  updateElement("divLocationComboBox", guiDisplayDetailsCreateHTMLcomboBoxTopLevel(JSONstudio, "selStudioComboBox"));

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
  document.getElementById("selStudioComboBox").addEventListener("change",function(event){
    guiDisplayActionCost(this.value, 5); //5 = Release
  }, {passive: true});
  document.getElementById("selFeatureComboBox").addEventListener("change",function(event){
    guiDisplayActionCost(this.value, 5); //5 = Release
  }, {passive: true});

} //function

function guiApplyGameText() {

  //When the game starts, apply the text from the config file
  updateElement("divGameTextAction", getGameText(JSONconfig[0].action));
  updateElement("divGameTextPracticeDescription", getGameText(JSONconfig[0].practiceDescription));
  updateElement("divGameTextGigDescription", getGameText(JSONconfig[0].gigDescription));
  updateElement("divGameTextPublicityDescription", getGameText(JSONconfig[0].publicityDescription));
  updateElement("divGameTextGiftDescription", getGameText(JSONconfig[0].giftDescription));
  updateElement("divGameTextRecordDescription", getGameText(JSONconfig[0].recordDescription));
  updateElement("divGameTextRecordDescription", getGameText(JSONconfig[0].releaseDescription));

} //function

// function guiDisplayDetailsBand(i) {
//
//   var intTemp = 1;
//   var strTemp = "";
//
//   i = parseInt(i);
//
//   if (i < 0) i = JSONband.length - 1; //ensur
//   if (i >= JSONband.length) i=0; //at the end so reset
//
//   GLOBALBandi = i;
//
//   // strTemp = getMarkUpBand(i);
//   // updateElement("divBandDetails", strTemp);
//   updateElement("divBandDetails", guiCreateHTMLBand(i));
//
//
//   // strTemp = getMarkUpMusician(i);
//   // updateElement("divBandMusicianDetails", strTemp);
//   updateElement("divMusicianDetails", guiCreateHTMLMusician(i));
//
//   // strTemp = getMarkUpAlbum(i);
//   // updateElement("divBandAlbumsDetails", strTemp);
//
//   guiDisplayActionCurrent(i);
//   adminShowLog(i); //display
//
// } //function

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

      //No need to display anything as its chance!

    break;
    case 3:
      //gifts
      intDays = JSONconfig[0].valueGiftDaysDuration;
      intDayCost = (JSONgift[i].money * JSONband[0].musician.length);

      strTemp = getGameText(JSONconfig[0].giftEstimate);

      guiDisplayMovementLabelMusician("spnMovementMusicianhappiness", JSONgift[i].happiness);

    break;
    case 4:
      //record
      intDays = JSONtracks[i].days;
      intDayCost = (JSONtracks[i].money);

      strTemp = getGameText(JSONconfig[0].recordEstimate);

    break;
    case 5:
      //release
      intDays = JSONconfig[0].valueReleaseDaysDuration;
      intDayCost = JSONconfig[0].valueReleaseCost + JSONfeature[document.getElementById("selFeatureComboBox").value].money + JSONdirector[document.getElementById("selDirectorComboBox").value].money + JSONstudio[document.getElementById("selStudioComboBox").value].money;

      strTemp = getGameText(JSONconfig[0].releaseEstimate);

    break;
  } //switch


  guiDisplayMovementLabelBand("spnMovementBandMoney", -Math.abs((intDays * intDayCost))); //turn into negative number

  updateElement("divActionCost", "<br>" + strTemp); //updates element

} //function

function guiDisplayMovementLabelMusician(strID, intTotalCost) {
  //Updates how much will be taken for the property, applying the appropiate class
  var strTemp = "";
  var elems = document.getElementsByName(strID);

  for (var m = 0; m < elems.length; m++) {

    if (intTotalCost > 0) {
      elems[m].setAttribute("class", "spnMovement valuePositive");
      strTemp = "+";
    } else {
      elems[m].setAttribute("class", "spnMovement valueNegative");
      strTemp = "";
    } //if

    elems[m].innerHTML = strTemp + displayNumbersWithCommas(intTotalCost);
    // document.getElementById(strID).innerHTML = strTemp + displayNumbersWithCommas(intTotalCost);

  } //for

} //function

function guiDisplayMovementLabelMusicianClear(strID) {
  var strTemp = "";
  var elems = document.getElementsByName(strID);

  for (var m = 0; m < elems.length; m++) {
    elems[m].innerHTML = "";
  } //for

} //function
function guiDisplayMovementLabelBandClear(strID) {
  var elem = document.getElementById(strID);
      elem.innerHTML = "";
} //function

function guiDisplayMovementLabelBand(strID, intTotalCost) {
  //Updates how much will be taken for the property, applying the appropiate class
  var elem = document.getElementById(strID);
  var strTemp = "";
  elem.setAttribute("class", "spnMovement valueNegative");
  if (intTotalCost < 0) {
    elem.setAttribute("class", "spnMovement valueNegative");
    strTemp = "&nbsp;";
  } else {
    elem.setAttribute("class", "spnMovement valuePositive");
    strTemp = "&nbsp;+";
  } //if

  if (strID.includes("money")) {
    strTemp += JSONconfig[0].currency; //concatenate currency symbol if ID is to do with money
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
  updateElement("divActionCost", ""); //updates element

} //function





// START - FUNKY STUFF

function guiTypewrite() {

  $('#typewriteText').typewrite({
      actions: [
          {type: 'Hello. '},
          {type: '<br>'},
          {type: 'Weclome '},
          {delay: 1500},
          {remove: {num: 1, type: 'stepped'}},
          {select: {from: 11, to: 16}},
          {delay: 2000},
          {remove: {num: 5, type: 'whole'}},
          {delay: 300},
          {type: 'lcome to typewrite. '},
          {type: '<br>'},
          {type: 'It\'s just so easy to setup and use.'}
      ]
  });

} //function

function guiAnimateNumber(elem, intNumber) {

  var od = new Odometer({
    el: elem
  });

  // od.el.update(intNumber);
  od.el.innerHTML = intNumber;

} //function

function guiCelebrate(elem) {

  $(elem).celebrate({unicode: '\u2B50', color: 'gold'});

} //function

// END - FUNKY STUFF



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
