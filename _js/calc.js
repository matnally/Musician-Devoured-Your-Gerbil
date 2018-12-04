
function getGameText(strTemp) {

  var strReturn = "";
  var mapObj = [];

  //TODO: duplication of map object! Bad

  if (JSONband[0].musician.length > 0) {

    mapObj = {
      "<bandName>"                      : "<strong>" + JSONband[0].name + "</strong>"
      ,"<bandMusicians>"                : "<strong>" + JSONband[0].musician.length + "</strong>"
      ,"<musicianBand>"                 : "<strong>" + JSONmusician[GLOBALMusiciani].name + "</strong>"
      ,"<wage>"                         : "<strong>" + JSONconfig[0].currency + displayNumbersWithCommas(JSONmusician[GLOBALMusiciani].wage) + "</strong>"

      //Practice
      ,"<valuePracticeSkill>"           : "<strong>" + JSONconfig[0].valuePracticeSkill + "</strong>"
      ,"<valuePracticeHappiness>"       : "<strong>" + JSONconfig[0].valuePracticeHappiness + "</strong>"
      ,"<valuePracticeReputation>"      : "<strong>" + JSONconfig[0].valuePracticeReputation + "</strong>"
      ,"<practiceEstimateDays>"         : "<strong>" + document.getElementById("selPracticeComboBox").value + "</strong>"
      ,"<practiceEstimateCost>"         : "<strong>" + JSONconfig[0].currency  + displayNumbersWithCommas(JSONconfig[0].valuePracticeCost) + "</strong>"
      ,"<practiceEstimateTotal>"        : "<strong>" + JSONconfig[0].currency  + displayNumbersWithCommas(document.getElementById("selPracticeComboBox").value * JSONconfig[0].valuePracticeCost) + "</strong>"
      ,"<practiceEstimateMusicians>"    : "<strong>" + JSONband[0].musician.length + "</strong>"

      //Gig
      ,"<valueGigSkill>"                : "<strong>" + JSONconfig[0].valueGigSkill + "</strong>"
      ,"<valueGigHappiness>"            : "<strong>" + JSONconfig[0].valueGigHappiness + "</strong>"
      ,"<valueGigReputation>"           : "<strong>" + JSONconfig[0].valueGigReputation + "</strong>"
      ,"<gigEstimateDays>"              : "<strong>" + document.getElementById("selGigDays").value + "</strong>"
      ,"<gigEstimateVenue>"             : "<strong>" + JSONvenue[document.getElementById("selVenueComboBox").value].name + "</strong>"
      ,"<gigEstimateCost>"              : "<strong>" + JSONconfig[0].currency  + displayNumbersWithCommas(JSONvenue[document.getElementById("selVenueComboBox").value].money) + "</strong>"
      ,"<gigEstimateTotal>"             : "<strong>" + JSONconfig[0].currency  + displayNumbersWithCommas(document.getElementById("selGigDays").value * JSONvenue[document.getElementById("selVenueComboBox").value].money) + "</strong>"

      //Publicity
      ,"<valuePublicityCost>"           : "<strong>" + JSONconfig[0].currency  + displayNumbersWithCommas(JSONconfig[0].valuePublicityCost) + "</strong>"
      ,"<valuePublicityDaysDuration>"   : "<strong>" + JSONconfig[0].valuePublicityDaysDuration + "</strong>"
      ,"<valuePublicityReputationGood>" : "<strong>" + JSONconfig[0].valuePublicityReputationGood + "</strong>"
      ,"<valuePublicityReputationBad>"  : "<strong>" + JSONconfig[0].valuePublicityReputationBad + "</strong>"

      //Gift
      ,"<giftName>"                     : "<strong>" + JSONgift[document.getElementById("selGiftComboBox").value].name + "</strong>"
      ,"<giftEstimateCost>"             : "<strong>" + JSONconfig[0].currency  + displayNumbersWithCommas(JSONgift[document.getElementById("selGiftComboBox").value].money) + "</strong>"
      ,"<giftEstimateTotal>"            : "<strong>" + JSONconfig[0].currency  + displayNumbersWithCommas(JSONconfig[0].valueGiftDaysDuration * JSONgift[document.getElementById("selGiftComboBox").value].money) + "</strong>"
      ,"<giftHappiness>"                : "<strong>" + JSONgift[document.getElementById("selGiftComboBox").value].happiness + "</strong>"

      //Record
      ,"<recordAlbum>"                  : "<strong>" + JSONtracks[document.getElementById("selTracksComboBox").value].name + "</strong>"
      ,"<recordDaysDuration>"           : "<strong>" + JSONtracks[document.getElementById("selTracksComboBox").value].days + "</strong>"
      ,"<recordEstimateCost>"           : "<strong>" + JSONconfig[0].currency  + displayNumbersWithCommas(JSONtracks[document.getElementById("selTracksComboBox").value].money) + "</strong>"
      ,"<recordEstimateTotal>"          : "<strong>" + JSONconfig[0].currency  + displayNumbersWithCommas(JSONtracks[document.getElementById("selTracksComboBox").value].days * JSONtracks[document.getElementById("selTracksComboBox").value].money) + "</strong>"

      //Release
      ,"<releaseFeature>"               : "<strong>" + JSONfeature[document.getElementById("selFeatureComboBox").value].name + "</strong>"
      ,"<releaseDirector>"              : "<strong>" + JSONdirector[document.getElementById("selDirectorComboBox").value].name + "</strong>"
      ,"<releaseStudio>"                : "<strong>" + JSONstudio[document.getElementById("selStudioComboBox").value].name + "</strong>"
      ,"<releaseDaysDuration>"          : "<strong>" + JSONconfig[0].valueReleaseDaysDuration + "</strong>"
      ,"<releaseEstimateCost>"          : "<strong>" + JSONconfig[0].currency  + displayNumbersWithCommas(JSONconfig[0].valueReleaseCost) + "</strong>"
      ,"<releaseTotal>"                 : "<strong>" + JSONconfig[0].currency  + displayNumbersWithCommas(JSONfeature[document.getElementById("selFeatureComboBox").value].money + JSONdirector[document.getElementById("selDirectorComboBox").value].money + JSONstudio[document.getElementById("selStudioComboBox").value].money) + "</strong>"
      ,"<releaseGrandTotal>"            : "<strong>" + JSONconfig[0].currency  + displayNumbersWithCommas(JSONconfig[0].valueReleaseCost + JSONfeature[document.getElementById("selFeatureComboBox").value].money + JSONdirector[document.getElementById("selDirectorComboBox").value].money + JSONstudio[document.getElementById("selStudioComboBox").value].money) + "</strong>"



      //Other
      ,"<gameCliveSuffix>"              : getRandomWordFromString("<gameCliveSuffix>", JSONconfig[0].gameCliveSuffix)

    };

  } else {

    //Probably the start of the game
    //Can't reference certain elements so commented out

    mapObj = {
      //Band
      "<bandName>"                      : "<strong>" + JSONband[0].name + "</strong>"
      ,"<bandMusicians>"                : "<strong>" + JSONband[0].musician.length + "</strong>"
      // ,"<musicianBand>"                 : "<strong>" + JSONmusician[GLOBALMusiciani].name + "</strong>"
      // ,"<wage>"                         : "<strong>" + JSONconfig[0].currency + displayNumbersWithCommas(JSONmusician[GLOBALMusiciani].wage) + "</strong>"

      //Practice
      ,"<valuePracticeSkill>"           : "<strong>" + JSONconfig[0].valuePracticeSkill + "</strong>"
      ,"<valuePracticeHappiness>"       : "<strong>" + JSONconfig[0].valuePracticeHappiness + "</strong>"
      ,"<valuePracticeReputation>"      : "<strong>" + JSONconfig[0].valuePracticeReputation + "</strong>"
      // ,"<practiceEstimateDays>"         : "<strong>" + document.getElementById("selPracticeComboBox").value + "</strong>"
      ,"<practiceEstimateCost>"         : "<strong>" + JSONconfig[0].currency  + displayNumbersWithCommas(JSONconfig[0].valuePracticeCost) + "</strong>"
      // ,"<practiceEstimateTotal>"        : "<strong>" + JSONconfig[0].currency  + displayNumbersWithCommas(document.getElementById("selPracticeComboBox").value * JSONconfig[0].valuePracticeCost) + "</strong>"
      ,"<practiceEstimateMusicians>"    : "<strong>" + JSONband[0].musician.length + "</strong>"
      //Gig
      ,"<valueGigSkill>"                : "<strong>" + JSONconfig[0].valueGigSkill + "</strong>"
      ,"<valueGigHappiness>"            : "<strong>" + JSONconfig[0].valueGigHappiness + "</strong>"
      ,"<valueGigReputation>"           : "<strong>" + JSONconfig[0].valueGigReputation + "</strong>"

      // ,"<gigEstimateDays>"         : "<strong>" + document.getElementById("selGigDays").value + "</strong>"
      // ,"<gigEstimateVenue>"        : "<strong>" + JSONvenue[document.getElementById("selVenueComboBox").value].name + "</strong>"
      // ,"<gigEstimateCost>"         : "<strong>" + JSONconfig[0].currency  + displayNumbersWithCommas(JSONvenue[document.getElementById("selVenueComboBox").value].money) + "</strong>"
      // ,"<gigEstimateTotal>"        : "<strong>" + JSONconfig[0].currency  + displayNumbersWithCommas(document.getElementById("selGigDays").value * JSONvenue[document.getElementById("selVenueComboBox").value].money) + "</strong>"

      //Publicity
      ,"<valuePublicityCost>"           : "<strong>" + JSONconfig[0].currency  + displayNumbersWithCommas(JSONconfig[0].valuePublicityCost) + "</strong>"
      ,"<valuePublicityDaysDuration>"   : "<strong>" + JSONconfig[0].valuePublicityDaysDuration + "</strong>"
      ,"<valuePublicityReputationGood>" : "<strong>" + JSONconfig[0].valuePublicityReputationGood + "</strong>"
      ,"<valuePublicityReputationBad>"  : "<strong>" + JSONconfig[0].valuePublicityReputationBad + "</strong>"
      //Record

      //Other
      ,"<gameCliveSuffix>"              : getRandomWordFromString("<gameCliveSuffix>", JSONconfig[0].gameCliveSuffix)

    };

  } //if

  return mapReplaceWords(strTemp, mapObj);

} //function

function mapReplaceWords(str, map){
    for(key in map){
        str = str.mapReplaceWords(key, map[key]);
    }
    return str;
} //function

String.prototype.mapReplaceWords = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
} //String.prototype

function getRandomWordFromString(strReplace, strString) {
  var arrTemp = [];
      arrTemp = strString.split(',');
  return arrTemp[Math.floor(Math.random() * arrTemp.length)];
} //function






/////////////////////////////////
// HTML MARK UP
/////////////////////////////////

function getMarkUpBand(i) {

  var strTemp = "";

  strTemp += "<h2>";
  strTemp += JSONband[i].name;
  strTemp += "</h2>";

  strTemp +="   <div class='divTable'>";
  strTemp +="     <div class='divRow'>";

  strTemp += "<div class='divCell divRight'>";

  strTemp += "<img id='guiImageBand' src='"+JSONconfig[0].imagesFolder+"band"+JSONband[i].musician.length+".png' alt=''>";

  strTemp += "</div> <!-- divCell -->";
  strTemp += "<div class='divCell'>";



  strTemp +="   <div class='divTable'>";


  strTemp +="     <div class='divRow'>";
  strTemp += "<div class='divCell divRight "+getGameStatClass(JSONband[i].reputation, 'reputation')+"'>";
  strTemp += "<img class='guiImage' src='"+JSONconfig[0].imagesFolder+"reputation.png' alt='Reputation'>";
  strTemp += "</div> <!-- divCell -->";
  strTemp += "<div class='divCell divCellValue'>";
  strTemp += "<p class=''>";
  strTemp += displayNumbersWithCommas(JSONband[i].reputation);
  strTemp += "</p>";
  strTemp += "</div> <!-- divCell -->";
  strTemp +="     </div> <!-- divRow -->";

  strTemp +="     <div class='divRow'>";
  strTemp += "<div class='divCell divRight'>";
  strTemp += "<img class='guiImage' src='"+JSONconfig[0].imagesFolder+"money.png' alt='Money'>";
  strTemp += "</div> <!-- divCell -->";
  strTemp += "<div class='divCell divCellValue'>";
  strTemp += "<p>";
  strTemp += JSONconfig[0].currency + displayNumbersWithCommas(JSONband[i].money);
  strTemp += "<span id='spnMovementBandmoney'>";
  strTemp += "</span>";
  strTemp += "</p>";
  strTemp += "</div> <!-- divCell -->";
  strTemp +="     </div> <!-- divRow -->";

  strTemp +="     <div class='divRow'>";
  strTemp += "<div class='divCell divRight'>";
  strTemp += "<img class='guiImage' src='"+JSONconfig[0].imagesFolder+"wage.png' alt='Band total wages'>";
  strTemp += "</div> <!-- divCell -->";
  strTemp += "<div class='divCell divCellValue'>";
  strTemp += "<p>";
  strTemp += JSONconfig[0].currency + displayNumbersWithCommas(getBandAGGattributeFromMusiciansSingle(i, 'wage'));
  strTemp += "</p>";
  strTemp += "</div> <!-- divCell -->";
  strTemp +="     </div> <!-- divRow -->";


  strTemp +="   </div> <!-- divTable -->";



  strTemp += "<p>";

  strTemp += "<img class='guiImage' src='"+JSONconfig[0].imagesFolder+"equipment"+JSONband[i].equipment+".png' alt='"+JSONequipment[JSONband[i].equipment].name+"'>";
  strTemp += "&nbsp;";
  strTemp += JSONequipment[JSONband[i].equipment].name;
  strTemp += "</p>";
  if (JSONband[i].contract === false) {
    strTemp += "<p>";
    strTemp += "<img class='guiImage' src='"+JSONconfig[0].imagesFolder+"unsigned.png' alt='Record contract'>";
    strTemp += "&nbsp;";
    strTemp += "UNSIGNED";
    strTemp += "</p>";
  } else {
    strTemp += "<p>";
    strTemp += "<img class='guiImage' src='"+JSONconfig[0].imagesFolder+"contract"+JSONband[i].contract+".png' alt='Record contract'>";
    strTemp += "&nbsp;";
    strTemp += JSONcontract[JSONband[i].contract].name;
    strTemp += "</p>";
  } //if


  strTemp += "</div> <!-- divCell -->";

  strTemp +="     </div> <!-- divRow -->";
  strTemp +="   </div> <!-- divTable -->";

  strTemp += "<p>" + (i+1) + " of " + JSONband.length + "</p>";

  return strTemp;
} //function


function getMarkUpGameStartMusician(i) {

  var intReputation = 0;
  var intSkill = 0;
  var intHappiness = 0;
  var intWage = 0;
  var intEquipment = 0;
  var intGift = 0;

  var intMusician = 0

  var strTemp = "";
  var intHappiness = 0

  i = parseInt(i);

  if (i < 0)
    i = JSONmusician.length - 1;

  if (i >= JSONmusician.length)
    i=0;

  GLOBALMusiciani = i;

  //set variables
  intReputation = JSONmusician[GLOBALMusiciani].reputation;
  intSkill = JSONmusician[GLOBALMusiciani].skill;
  intHappiness = JSONmusician[GLOBALMusiciani].happiness;
  intWage = JSONmusician[GLOBALMusiciani].wage;
  intEquipment = JSONmusician[GLOBALMusiciani].equipment;
  intGift = JSONmusician[GLOBALMusiciani].gift;
  intFee = JSONmusician[GLOBALMusiciani].fee;

  var strTemp = "";

  strTemp += "<p>" + getGameText(JSONconfig[0].musicianAdd) +  "</p>"

  strTemp +="   <div class='divTable'>";
  strTemp +="     <div class='divRow'>";

  strTemp += "<div class='divCell'>";

  strTemp += "<img id='guiImageMusician"+GLOBALMusiciani+"' class='guiImageMusician' src='"+JSONconfig[0].imagesFolder+"name.png' alt='"+JSONmusician[GLOBALMusiciani].name+"'>";
  strTemp += "<br>";
  strTemp += "<img class='guiImage' src='"+JSONconfig[0].imagesFolder+"gift"+intGift+".png' alt='"+JSONgift[intGift].name+"'>";
  strTemp += "&nbsp;&nbsp;";
  strTemp += "<img class='guiImage' src='"+JSONconfig[0].imagesFolder+"equipment"+intEquipment+".png' alt='"+JSONequipment[intEquipment].name+"'>";
  strTemp += "<h3>";
  strTemp += JSONmusician[GLOBALMusiciani].name;
  strTemp += "</h3>";
  strTemp += "</div> <!-- divCell -->";
  strTemp += "<div class='divCell'>";
  strTemp +="   <div class='divTable'>";
  strTemp +="     <div class='divRow'>";
  strTemp += "<div class='divCell divRight "+getGameStatClass(intReputation, 'reputation')+"'>";
  strTemp += "<img class='guiImage' src='"+JSONconfig[0].imagesFolder+"reputation.png' alt='"+displayNumbersWithCommas(intReputation)+"'>";
  strTemp += "</div> <!-- divCell -->";
  strTemp += "<div class='divCell'>";
  strTemp += "<p>";
  strTemp += displayNumbersWithCommas(intReputation);
  strTemp += "</p>";
  strTemp += "</div> <!-- divCell -->";

  strTemp += "</div> <!-- divRow -->";
  strTemp +="<div class='divRow'>";

  strTemp += "<div class='divCell divRight "+getGameStatClass(intSkill, 'skill')+"'>";
  strTemp += "<img class='guiImage' src='"+JSONconfig[0].imagesFolder+"skill.png' alt='"+displayNumbersWithCommas(intSkill)+"'>";
  strTemp += "</div> <!-- divCell -->";
  strTemp += "<div class='divCell'>";
  strTemp += "<p>";
  strTemp += displayNumbersWithCommas(intSkill);
  strTemp += "</p>";
  strTemp += "</div> <!-- divCell -->";

  strTemp += "</div> <!-- divRow -->";
  strTemp +="<div class='divRow'>";

  strTemp += "<div class='divCell divRight "+getGameStatClass(intHappiness, 'happiness')+"'>";
  strTemp += "<img class='guiImage' src='"+JSONconfig[0].imagesFolder+"happiness.png' alt='"+displayNumbersWithCommas(intHappiness)+"'>";
  strTemp += "</div> <!-- divCell -->";
  strTemp += "<div class='divCell'>";

  strTemp += "<p>";
  strTemp += displayNumbersWithCommas(intHappiness);
  strTemp += "</p>";
  strTemp += "</div> <!-- divCell -->";

  strTemp += "</div> <!-- divRow -->";
  strTemp +="<div class='divRow'>";

  strTemp += "<div class='divCell divRight "+getGameStatClass(intWage, 'wage')+"'>";
  strTemp += "<img class='guiImage' src='"+JSONconfig[0].imagesFolder+"wage.png' alt='"+JSONconfig[0].currency + displayNumbersWithCommas(intWage)+"'>";
  strTemp += "</div> <!-- divCell -->";
  strTemp += "<div class='divCell'>";

  strTemp += "<p>";
  strTemp += JSONconfig[0].currency + displayNumbersWithCommas(intWage);
  strTemp += "</p>";
  strTemp += "</div> <!-- divCell -->";

  strTemp += "</div> <!-- divRow -->";
  strTemp +="<div class='divRow'>";

  strTemp += "<div class='divCell divRight "+getGameStatClass(intFee, 'fee')+"'>";
  strTemp += "<img class='guiImage' src='"+JSONconfig[0].imagesFolder+"fee.png' alt='"+JSONconfig[0].currency + displayNumbersWithCommas(intFee)+"'>";
  strTemp += "</div> <!-- divCell -->";
  strTemp += "<div class='divCell'>";

  strTemp += "<p>";
  strTemp += JSONconfig[0].currency + displayNumbersWithCommas(intFee);
  strTemp += "</p>";
  strTemp += "</div> <!-- divCell -->";

  strTemp += "</div> <!-- divRow -->";
  strTemp +="<div class='divRow'>";

  strTemp += "<div class='divCell'>";
  strTemp += "<img class='guiImage' src='"+JSONconfig[0].imagesFolder+"equipment"+intEquipment+".png' alt='"+JSONequipment[intEquipment].name+"'>";
  strTemp += "</div> <!-- divCell -->";
  strTemp += "<div class='divCell'>";
  strTemp += "<p>";
  strTemp += JSONequipment[intEquipment].name;
  strTemp += "</p>";
  strTemp += "</div> <!-- divCell -->";

  strTemp += "</div> <!-- divRow -->";
  strTemp +="<div class='divRow'>";

  strTemp += "<div class='divCell'>";
  strTemp += "<img class='guiImage' src='"+JSONconfig[0].imagesFolder+"gift"+intGift+".png' alt='"+JSONgift[intGift].name+"'>";
  strTemp += "</div> <!-- divCell -->";
  strTemp += "<div class='divCell'>";
  strTemp += "<p>";
  strTemp += JSONgift[intGift].name;
  strTemp += "</p>";
  strTemp += "</div> <!-- divCell -->";

  strTemp += "</div> <!-- divRow -->";
  strTemp +="<div class='divRow'>";

  strTemp +="     </div> <!-- divRow -->";
  strTemp +="   </div> <!-- divTable -->";

  strTemp +="       </div> <!-- divCell -->";

  strTemp +="     </div> <!-- divRow -->";
  strTemp +="   </div> <!-- divTable -->";

  strTemp += "<p>" + (GLOBALMusiciani+1) + " of " + JSONmusician.length + "</p>";

  updateElement("divMusicianDetails", strTemp);

} //function

function getMarkUpMusician(i) {

  var intReputation = 0;
  var intSkill = 0;
  var intHappiness = 0;
  var intWage = 0;
  var intEquipment = 0;
  var intGift = 0;

  var intMusician = 0

  var strTemp = "";
  var intHappiness = 0

  strTemp +="   <div class='divTable'>";
  strTemp +="     <div class='divRow'>";

  for (m in JSONband[i].musician) {

    //set variables
    intReputation = JSONmusician[JSONband[i].musician[m]].reputation;
    intSkill = JSONmusician[JSONband[i].musician[m]].skill;
    intHappiness = JSONmusician[JSONband[i].musician[m]].happiness;
    intWage = JSONmusician[JSONband[i].musician[m]].wage;
    intEquipment = JSONmusician[JSONband[i].musician[m]].equipment;
    intGift = JSONmusician[JSONband[i].musician[m]].gift;

    strTemp += "<div class='divCell'>";

    strTemp += "<img id='guiImageMusician"+JSONband[i].musician[m]+"' class='guiImageMusician' src='"+JSONconfig[0].imagesFolder+"name.png' alt='"+JSONmusician[JSONband[i].musician[m]].name+"'>";

    strTemp +="   <div class='divTable'>";

    strTemp +="     <div class='divRow'>";

    strTemp += "<div class='divCell divRight'>";
    strTemp += "<img class='guiImage' src='"+JSONconfig[0].imagesFolder+"equipment"+intEquipment+".png' alt='"+JSONequipment[intEquipment].name+"'>";
    strTemp +="</div> <!-- divCell -->";

    strTemp += "<div class='divCell'>";
    strTemp += "<img class='guiImage' src='"+JSONconfig[0].imagesFolder+"gift"+intGift+".png' alt='"+JSONgift[intGift].name+"'>";
    strTemp +="</div> <!-- divCell -->";

    strTemp +="     </div> <!-- divRow -->";
    strTemp +="   </div> <!-- divTable -->";

    strTemp += "<h3>";
    strTemp += JSONmusician[JSONband[i].musician[m]].name;
    strTemp += "</h3>";

    strTemp += "</div> <!-- divCell -->";
    strTemp += "<div class='divCell'>";

    strTemp +="   <div class='divTable'>";
    strTemp +="     <div class='divRow'>";

    strTemp += "<div class='divCell divRight "+getGameStatClass(intReputation, "reputation")+"'>";
    strTemp += "<img class='guiImage' src='"+JSONconfig[0].imagesFolder+"reputation.png' alt='"+displayNumbersWithCommas(intReputation)+"'>";
    strTemp += "</div> <!-- divCell -->";
    strTemp += "<div class='divCell divCellValue'>";
    strTemp += "<p>";

    strTemp += displayNumbersWithCommas(intReputation);

    strTemp += "<span name='spnMovementMusicianreputation'>";
    strTemp += "</span>";

    strTemp += "</p>";
    strTemp += "</div> <!-- divCell -->";

    strTemp += "</div> <!-- divRow -->";
    strTemp +="<div class='divRow'>";

    strTemp += "<div class='divCell divRight "+getGameStatClass(intSkill, "skill")+"'>";
    strTemp += "<img class='guiImage' src='"+JSONconfig[0].imagesFolder+"skill.png' alt='"+displayNumbersWithCommas(intSkill)+"'>";
    strTemp += "</div> <!-- divCell -->";
    strTemp += "<div class='divCell divCellValue'>";
    strTemp += "<p>";
    strTemp += displayNumbersWithCommas(intSkill);
    strTemp += "<span name='spnMovementMusicianskill'>";
    strTemp += "</span>";
    strTemp += "</p>";
    strTemp += "</div> <!-- divCell -->";

    strTemp += "</div> <!-- divRow -->";
    strTemp +="<div class='divRow'>";

    strTemp += "<div class='divCell divRight "+getGameStatClass(intHappiness, "happiness")+"'>";
    strTemp += "<img class='guiImage' src='"+JSONconfig[0].imagesFolder+"happiness.png' alt='"+displayNumbersWithCommas(intHappiness)+"'>";
    strTemp += "</div> <!-- divCell -->";
    strTemp += "<div class='divCell divCellValue'>";
    strTemp += "<p>";
    strTemp += displayNumbersWithCommas(intHappiness);
    strTemp += "<span name='spnMovementMusicianhappiness'>";
    strTemp += "</span>";
    strTemp += "</p>";
    strTemp += "</div> <!-- divCell -->";

    strTemp += "</div> <!-- divRow -->";
    strTemp +="<div class='divRow'>";

    strTemp += "<div class='divCell divRight "+getGameStatClass(intWage, "wage")+"'>";
    strTemp += "<img class='guiImage' src='"+JSONconfig[0].imagesFolder+"wage.png' alt='"+JSONconfig[0].currency + displayNumbersWithCommas(intWage)+"'>";
    strTemp += "</div> <!-- divCell -->";
    strTemp += "<div class='divCell divCellValue'>";
    strTemp += "<p>";
    strTemp += JSONconfig[0].currency + displayNumbersWithCommas(intWage);
    strTemp += "</p>";
    strTemp += "</div> <!-- divCell -->";

    strTemp += "</div> <!-- divRow -->";
    strTemp +="<div class='divRow'>";

    strTemp +="     </div> <!-- divRow -->";
    strTemp +="   </div> <!-- divTable -->";

    strTemp +="       </div> <!-- divCell -->";
  } //for

  strTemp +="     </div> <!-- divRow -->";
  strTemp +="   </div> <!-- divTable -->";

  return strTemp;
} //function


function getMarkUpAlbum(i) {

  var strTemp = "";
  strTemp +="   <div class='divTable'>";
  strTemp +="     <div class='divRow'>";
  for (b in JSONband[i].album) {
    strTemp += "<div class='divCell'>";

    strTemp +="   <div class='divTable'>";
    strTemp +="     <div class='divRow'>";
    strTemp += "<div class='divCell divRight'>";
    strTemp += "<img id='guiImageAlbum' src='"+JSONconfig[0].imagesFolder+"album.png' alt='"+JSONalbum[JSONband[i].album[b]].name+"'>";
    strTemp += "</div> <!-- divCell -->";
    strTemp += "<div class='divCell'>";
    strTemp += "<p>";
    strTemp += JSONalbum[JSONband[i].album[b]].name;
    strTemp += "</p>";
    strTemp += "</div> <!-- divCell -->";
    strTemp +="     </div class='divRow'>";

    intTemp = 1;
    for (s in JSONsingle) {
      if  (JSONsingle[s].album == JSONband[i].album[b]) {
        strTemp +="     <div class='divRow'>";
        strTemp += "<div class='divCell divRight'>";
        strTemp += "Track " + intTemp;
        strTemp += "</div> <!-- divCell -->";
        strTemp += "<div class='divCell'>";
        strTemp += "<p>";
        strTemp += JSONsingle[s].name;

        if (!JSONsingle[s].releasedDate === false) {
          strTemp += "<strong> - Released</strong>";
          strTemp += " best Chart Position <strong>"+JSONsingle[s].chartPositionBest+"</strong>";
        } //if

        strTemp += "</p>";
        strTemp += "</div> <!-- divCell -->";
        strTemp +="     </div class='divRow'>";
        intTemp ++;
      } //if
    } //for

    strTemp +="   </div> <!-- divTable -->";
    strTemp += "</div class='divCell'>";
  } //for

  strTemp +="     </div> <!-- divRow -->";
  strTemp +="   </div> <!-- divTable -->";

  return strTemp;
} //function
