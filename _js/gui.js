
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

function guiDisplayDetailsCreateHTMLcomboBox(arrTemp) {
  var strTemp = "";
  strTemp += "<select onChange=''>";
  for (l in arrTemp) {
    //for every label
    strTemp += "<option value='" + arrTemp[l][1] + "'>" + arrTemp[l][0] + "</option>";
  } //for musician
  strTemp += "</select>";
  return strTemp;
} //function















































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




function guiCreateMusicians(i) {

var arrTemp = [];
    arrTemp = guiDisplayDetailsLabelsReturnArray(JSONband[i]); //Get what to show
    arrTemp = guiDisplayDetailsLabelsGetAlternativeValues(arrTemp); //Get alternative value | Value first as labels may change and using that for comparison
    arrTemp = guiDisplayDetailsLabelsGetAlternativeLabels(arrTemp); //Get alternative labels


//document.write(guiDisplayDetailsCreateHTMLcomboBox(arrTemp));
document.write(guiDisplayDetailsCreateHTMLtable(arrTemp));



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
    strTemp +="       <div class='divCell divRight divRowLabel'>";
    strTemp +="       </div> <!-- divCell -->";
    strTemp +="       <div class='divCell'>";
    strTemp +="         <div id=''>";
    strTemp +="           <img src='_images/gui32x32.png' alt='Musician Name'>";
    strTemp +=            JSONmusician[JSONband[i].musician[m]].name;
    strTemp +="         </div> <!-- div -->";
    strTemp +="       </div> <!-- divCell -->";
    strTemp +="     </div> <!-- divRow -->";

    strTemp +="     <div class='divRow'>";
    strTemp +="       <div class='divCell divRight divRowLabel'>";
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
    strTemp +="       <div class='divCell divRight divRowLabel'>";
    strTemp +="         <p>Reputation</p>";
    strTemp +="       </div> <!-- divCell -->";
    strTemp +="       <div class='divCell'>";
    strTemp +="         <div id=''>";
    strTemp += JSONmusician[JSONband[i].musician[m]].reputation;
    strTemp +="         </div> <!-- div -->";
    strTemp +="       </div> <!-- divCell -->";
    strTemp +="     </div> <!-- divRow -->";

    strTemp +="     <div class='divRow'>";
    strTemp +="       <div class='divCell divRight divRowLabel'>";
    strTemp +="         <p>Preferred Equipment</p>";
    strTemp +="       </div> <!-- divCell -->";
    strTemp +="       <div class='divCell'>";
    strTemp +="         <div id=''>";
    strTemp += JSONequipment[JSONmusician[JSONband[i].musician[m]].equipment].name;
    strTemp +="         </div> <!-- div -->";
    strTemp +="       </div> <!-- divCell -->";
    strTemp +="     </div> <!-- divRow -->";

    strTemp +="     <div class='divRow'>";
    strTemp +="       <div class='divCell divRight divRowLabel'>";
    strTemp +="         <p>Happiness</p>";
    strTemp +="       </div> <!-- divCell -->";
    strTemp +="       <div class='divCell'>";
    strTemp +="         <div id=''>";
    strTemp += JSONmusician[JSONband[i].musician[m]].happiness;
    strTemp +="         </div> <!-- div -->";
    strTemp +="       </div> <!-- divCell -->";
    strTemp +="     </div> <!-- divRow -->";

    strTemp +="     <div class='divRow'>";
    strTemp +="       <div class='divCell divRight divRowLabel'>";
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
