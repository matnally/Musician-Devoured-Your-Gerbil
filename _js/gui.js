

var GLOBALBandi = 0; //GLOBAL band youre viewing CHEAT
function showBandDetails(i) {

  if (i < 0) {
    i = JSONband.length - 1; //Tale away 1 as array starts from 0
  }
  if (i > (JSONband.length - 1)) {
    i = 0; //Tale away 1 as array starts from 0
  }

  GLOBALBandi = i;

  updateElement("divBandDetailsName", JSONband[i].name);
  updateElement("divBandDetailsMoney", JSONconfig[0].currency + displayNumbersWithCommas(JSONband[i].money));
  updateElement("divBandDetailsReputation", displayNumbersWithCommas(JSONband[i].reputation));
  updateElement("divBandDetailsEquipment", JSONequipment[JSONband[i].equipment].name);

  if (JSONband[i].contract == false) {
    updateElement("divBandDetailsContract", "Not signed yet");
  } else {
    updateElement("divBandDetailsContract", JSONcontract[JSONband[i].contract].name);
  } //if

  updateElement("divBandDetailsAlbums", JSONband[i].album);

//Musicians
guiCreateMusicians(i);

}

var GLOBALMusiciani = 0; //GLOBAL Musician youre viewing CHEAT
function showMusicianDetails(i) {

  if (i < 0) {
    i = JSONmusician.length - 1; //Tale away 1 as array starts from 0
  }
  if (i > (JSONmusician.length - 1)) {
    i = 0; //Tale away 1 as array starts from 0
  }

  GLOBALMusiciani = i;

  updateElement("divMusicianDetailsName", JSONmusician[i].name);
  updateElement("divMusicianDetailsSkill", displayNumbersWithCommas(JSONmusician[i].skill));
  updateElement("divMusicianDetailsReputation", displayNumbersWithCommas(JSONmusician[i].reputation));
  updateElement("divMusicianDetailsEquipment", JSONequipment[JSONmusician[i].equipment].name);
  updateElement("divMusicianDetailsHappiness", JSONmusician[i].happiness);
  updateElement("divMusicianDetailsGift", JSONgift[JSONmusician[i].gift].name);

}


function guiDisplayDetails(JSONtoUse) {
  //Iterates through JSONtoUse for output
  var strTemp = "";
  var arrTemp = [];
  var strLegend = "";
  var strLegendValue = "";

  if (JSONtoUse.length > 0) {
    //MULTIPLE
    for (i in JSONtoUse) {
      //for every band
      for (k in JSONtoUse[i]) {
        //for every key value in band
        if (JSONtoUse[i].hasOwnProperty(k)) {
          strLegend = k;
          strLegendValue = JSONtoUse[i][k];

          if (!guiDisplayDetailsShowKeyChk(strLegend))
            arrTemp.push([strLegend,strLegendValue]);
          // strTemp += guiDisplayDetailsShowKeyChk(strLegend, );
          //strTemp += '<div class="divCell divRight"><strong>' + strLegend + '</strong></div><div class="divCell">' + strLegendValue + "</div>";
        } //if
      } //for every key value in band
    } //for every band

  } else {
    //SINGLE
    for (k in JSONtoUse) {
      //for every key value in band
      if (JSONtoUse.hasOwnProperty(k)) {
        strLegend = k;
        strLegendValue = JSONtoUse[k];

        if (!guiDisplayDetailsShowKeyChk(strLegend))
          arrTemp.push([strLegend,strLegendValue]);
        // strTemp += '<div class="divCell divRight"><strong>' + strLegend + '</strong></div><div class="divCell">' + strLegendValue + "</div>";
      } //if
    } //for every key value in band

  } //if
console.log(arrTemp);
//alert(strTemp);
//TODO: update element

} //function


function guiDisplayDetailsShowKeyChk(strLegend) {

  //if strLegend in do not show

  return false;
} //function


function guiCreateMusicians(i) {

//guiDisplayDetails(JSONband[i]); //????????????????!!!!!!!!!!!

  updateElement("divAdminBandMusiciansComboBox", createComboBoxfromJSONiAndNameMusicianInBandsDetails(JSONband[i].musician, "selAdminBandMusiciansComboBox"));
  showMusicianDetails(document.getElementById("selAdminBandMusiciansComboBox").value);

  var strTemp = "";

  strTemp +="   <div class='divTable'>";
  strTemp +="     <div class='divRow'>";

  for (m in JSONband[i].musician) {
    //for every musician in band

    strTemp +="   <div class='divCell'>";

    strTemp +="   <div class='divTable'>";
    strTemp +="     <div class='divRow'>";
    strTemp +="       <div class='divCell divRight divRowLegend'>";
    strTemp +="       </div> <!-- divCell -->";
    strTemp +="       <div class='divCell'>";
    strTemp +="         <div id=''>";
    strTemp +="           <img src='_images/gui32x32.png' alt='Musician Name'>";
    strTemp +=            JSONmusician[JSONband[i].musician[m]].name;
    strTemp +="         </div> <!-- div -->";
    strTemp +="       </div> <!-- divCell -->";
    strTemp +="     </div> <!-- divRow -->";

    strTemp +="     <div class='divRow'>";
    strTemp +="       <div class='divCell divRight divRowLegend'>";
    strTemp +="         <p>Skill</p>";
    strTemp +="       </div> <!-- divCell -->";
    strTemp +="       <div class='divCell'>";
    strTemp +="         <div id=''>";
    strTemp +="           <img src='_images/gui32x32.png' alt='Musician Skill'>";
    strTemp +=            JSONmusician[JSONband[i].musician[m]].skill;
    strTemp +="         </div> <!-- div -->";
    strTemp +="       </div> <!-- divCell -->";
    strTemp +="     </div> <!-- divRow -->";

    strTemp +="     <div class='divRow'>";
    strTemp +="       <div class='divCell divRight divRowLegend'>";
    strTemp +="         <p>Reputation</p>";
    strTemp +="       </div> <!-- divCell -->";
    strTemp +="       <div class='divCell'>";
    strTemp +="         <div id=''>";
    strTemp += JSONmusician[JSONband[i].musician[m]].reputation;
    strTemp +="         </div> <!-- div -->";
    strTemp +="       </div> <!-- divCell -->";
    strTemp +="     </div> <!-- divRow -->";

    strTemp +="     <div class='divRow'>";
    strTemp +="       <div class='divCell divRight divRowLegend'>";
    strTemp +="         <p>Preferred Equipment</p>";
    strTemp +="       </div> <!-- divCell -->";
    strTemp +="       <div class='divCell'>";
    strTemp +="         <div id=''>";
    strTemp += JSONequipment[JSONmusician[JSONband[i].musician[m]].equipment].name;
    strTemp +="         </div> <!-- div -->";
    strTemp +="       </div> <!-- divCell -->";
    strTemp +="     </div> <!-- divRow -->";

    strTemp +="     <div class='divRow'>";
    strTemp +="       <div class='divCell divRight divRowLegend'>";
    strTemp +="         <p>Happiness</p>";
    strTemp +="       </div> <!-- divCell -->";
    strTemp +="       <div class='divCell'>";
    strTemp +="         <div id=''>";
    strTemp += JSONmusician[JSONband[i].musician[m]].happiness;
    strTemp +="         </div> <!-- div -->";
    strTemp +="       </div> <!-- divCell -->";
    strTemp +="     </div> <!-- divRow -->";

    strTemp +="     <div class='divRow'>";
    strTemp +="       <div class='divCell divRight divRowLegend'>";
    strTemp +="         <p>Favourite Gift</p>";
    strTemp +="       </div> <!-- divCell -->";
    strTemp +="       <div class='divCell'>";
    strTemp +="         <div id=''>";
    strTemp += JSONgift[JSONmusician[JSONband[i].musician[m]].gift].name;
    strTemp +="         </div> <!-- div -->";
    strTemp +="       </div> <!-- divCell -->";
    strTemp +="     </div> <!-- divRow -->";
    strTemp +="   </div> <!-- divTable -->";

    strTemp +="   </div> <!-- divCell -->";

  } //for musician

  strTemp +="       </div> <!-- divCell -->";
  strTemp +="     </div> <!-- divRow -->";
  strTemp +="   </div> <!-- divTable -->";

  updateElement("divBandDetailsMusicians", strTemp);

  guiAddImagetoDiv("gui32x32.png", "Band Name", "divBandDetailsNameImage");

} //function



function guiAddImagetoDiv(strSrc, strAlt, elem){
  var elemImage = document.createElement("img");
      elemImage.setAttribute("src", "_images/" + strSrc);
      elemImage.setAttribute("alt", "dunno");
  document.getElementById(elem).appendChild(elemImage);
}
