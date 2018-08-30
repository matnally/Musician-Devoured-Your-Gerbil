

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
  updateElement("divBandDetailsContract", JSONband[i].contract);
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

function guiCreateMusicians(i) {

  var strTemp = "";

  strTemp +="   <div class='divTable'>";
  strTemp +="     <div class='divRow'>";

  for (m in JSONband[i].musician) {
    //for every musician in band

    strTemp +="   <div class='divCell'>";

    strTemp +="   <div class='divTable'>";
    strTemp +="     <div class='divRow'>";
    strTemp +="       <div class='divCell divRight divRowLegend'>";
    strTemp +="         <p>Name</p>";
    strTemp +="       </div> <!-- divCell -->";
    strTemp +="       <div class='divCell'>";
    strTemp +="         <div id=''>";
    strTemp += JSONmusician[JSONband[i].musician[m]].name;
    strTemp +="         </div> <!-- div -->";
    strTemp +="       </div> <!-- divCell -->";
    strTemp +="     </div> <!-- divRow -->";

    strTemp +="     <div class='divRow'>";
    strTemp +="       <div class='divCell divRight divRowLegend'>";
    strTemp +="         <p>Skill</p>";
    strTemp +="       </div> <!-- divCell -->";
    strTemp +="       <div class='divCell'>";
    strTemp +="         <div id=''>";
    strTemp += JSONmusician[JSONband[i].musician[m]].skill;
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

} //function
