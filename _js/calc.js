
function getGameText(strTemp) {

  var strReturn = "";
  var mapObj = [];

  //Hack as Player's band should be FALSE first and that will cause an error
  var temp = false;
      temp = JSONband[0].contract;
  if (JSONband[0].contract == false)
    JSONband[0].contract = 0;

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

    //Contract
    ,"<nameContract>"                 : "<strong>" + JSONcontract[JSONband[0].contract].name + "</strong>"
    ,"<money>"                        : "<strong>" + JSONconfig[0].currency + displayNumbersWithCommas(JSONcontract[JSONband[0].contract].money) + "</strong>"
    ,"<percent>"                      : "<strong>" + JSONcontract[JSONband[0].contract].percent + "%</strong>"

    //Other
    ,"<gameCliveSuffix>"              : getRandomWordFromString("<gameCliveSuffix>", JSONconfig[0].gameCliveSuffix)

  };

  //Hack as Player's band should be FALSE first and that will cause an error
  JSONband[0].contract = temp; //revert

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
