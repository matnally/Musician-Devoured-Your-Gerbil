
function getMarkUpBand(i) {

  var strTemp = "";

  strTemp += "<h2>";
  strTemp += JSONband[i].name;
  strTemp += "</h2>";

  strTemp +="   <div class='divTable'>";
  strTemp +="     <div class='divRow'>";

  strTemp += "<div class='divCell divRight'>";

  strTemp += "<img id='guiImageBand' src='_images/band"+JSONband[i].musician.length+".png' alt=''>";

  strTemp += "</div> <!-- divCell -->";
  strTemp += "<div class='divCell'>";

  strTemp += "<p>";
  strTemp += "<img class='guiImage' src='_images/reputation.png' alt='Reputation'>";
  strTemp += "&nbsp;";
  strTemp += displayNumbersWithCommas(JSONband[i].reputation);
  strTemp += "</p>";
  strTemp += "<p>";
  strTemp += "<img class='guiImage' src='_images/money.png' alt='Money'>";
  strTemp += "&nbsp;";
  strTemp += JSONconfig[0].currency + displayNumbersWithCommas(JSONband[i].money);

  strTemp += "<span id='spnMovementBandmoney'>";
  strTemp += "</span>";

  strTemp += "</p>";
  strTemp += "<p>";

  strTemp += "<img class='guiImage' src='_images/equipment"+JSONband[i].equipment+".png' alt='"+JSONequipment[JSONband[i].equipment].name+"'>";
  strTemp += "&nbsp;";
  strTemp += JSONequipment[JSONband[i].equipment].name;
  strTemp += "</p>";
  if (JSONband[i].contract === false) {
    strTemp += "<p>";
    strTemp += "<img class='guiImage' src='_images/contract.png' alt='Record contract'>";
    strTemp += "&nbsp;";
    strTemp += "UNSIGNED";
    strTemp += "</p>";
  } else {
    strTemp += "<p>";
    strTemp += "<img class='guiImage' src='_images/contract"+JSONband[i].contract+".png' alt='Record contract'>";
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

  i = parseInt(i);

  if (i < 0)
    i = JSONmusician.length - 1;

  if (i >= JSONmusician.length)
    i=0;

  GLOBALMusiciani = i;

  var strTemp = "";

  strTemp +="   <div class='divTable'>";
  strTemp +="     <div class='divRow'>";



  strTemp += "<div class='divCell'>";

  strTemp += "<img id='guiImageMusician"+GLOBALMusiciani+"' class='guiImageMusician' src='_images/name.png' alt='"+JSONmusician[GLOBALMusiciani].name+"'>";

  strTemp += "<br>";

  strTemp += "<img class='guiImage' src='_images/gift"+JSONmusician[GLOBALMusiciani].gift+".png' alt='"+JSONgift[JSONmusician[GLOBALMusiciani].gift].name+"'>";
  // strTemp += "<p>";
  // strTemp += "Fav gift: " + JSONgift[JSONmusician[GLOBALMusiciani].gift].name;
  // strTemp += "</p>";
  strTemp += "&nbsp;&nbsp;";
  //
  strTemp += "<img class='guiImage' src='_images/equipment"+JSONmusician[GLOBALMusiciani].equipment+".png' alt='"+JSONequipment[JSONmusician[GLOBALMusiciani].equipment].name+"'>";
  // strTemp += "<p>";
  // strTemp += "Plays: " + JSONequipment[JSONmusician[GLOBALMusiciani].equipment].name;
  // strTemp += "</p>";
  strTemp += "<h3>";
  strTemp += JSONmusician[GLOBALMusiciani].name;
  strTemp += "</h3>";




  strTemp += "</div> <!-- divCell -->";
  strTemp += "<div class='divCell'>";



  strTemp +="   <div class='divTable'>";
  strTemp +="     <div class='divRow'>";

  strTemp += "<div class='divCell divRight'>";
  strTemp += "<img class='guiImage' src='_images/reputation.png' alt='"+displayNumbersWithCommas(JSONmusician[GLOBALMusiciani].reputation)+"'>";
  strTemp += "</div> <!-- divCell -->";
  strTemp += "<div class='divCell'>";
  strTemp += "<p class='"+getGameStatClass(JSONmusician[GLOBALMusiciani].reputation, 'reputation')+"' >";
  strTemp += displayNumbersWithCommas(JSONmusician[GLOBALMusiciani].reputation);
  strTemp += "</p>";
  strTemp += "</div> <!-- divCell -->";

  strTemp += "</div> <!-- divRow -->";
  strTemp +="<div class='divRow'>";

  strTemp += "<div class='divCell divRight'>";
  strTemp += "<img class='guiImage' src='_images/skill.png' alt='"+displayNumbersWithCommas(JSONmusician[GLOBALMusiciani].skill)+"'>";
  strTemp += "</div> <!-- divCell -->";
  strTemp += "<div class='divCell'>";
  strTemp += "<p class='"+getGameStatClass(JSONmusician[GLOBALMusiciani].skill, 'skill')+"' >";
  strTemp += displayNumbersWithCommas(JSONmusician[GLOBALMusiciani].skill);
  strTemp += "</p>";
  strTemp += "</div> <!-- divCell -->";

  strTemp += "</div> <!-- divRow -->";
  strTemp +="<div class='divRow'>";

  strTemp += "<div class='divCell divRight'>";
  strTemp += "<img class='guiImage' src='_images/happiness.png' alt='"+displayNumbersWithCommas(JSONmusician[GLOBALMusiciani].happiness)+"'>";
  strTemp += "</div> <!-- divCell -->";
  strTemp += "<div class='divCell'>";
  strTemp += "<p class='"+getGameStatClass(JSONmusician[GLOBALMusiciani].happiness, 'happiness')+"' >";
  strTemp += displayNumbersWithCommas(JSONmusician[GLOBALMusiciani].happiness);
  strTemp += "</p>";
  strTemp += "</div> <!-- divCell -->";

  strTemp += "</div> <!-- divRow -->";
  strTemp +="<div class='divRow'>";

      strTemp += "<div class='divCell'>";
      strTemp += "<img class='guiImage' src='_images/wage.png' alt='"+JSONconfig[0].currency + displayNumbersWithCommas(JSONmusician[GLOBALMusiciani].wage)+"'>";
      strTemp += "</div> <!-- divCell -->";
      strTemp += "<div class='divCell'>";
      strTemp += "<p class='"+getGameStatClass(JSONmusician[GLOBALMusiciani].wage, 'wage')+"' >";
      strTemp += JSONconfig[0].currency + displayNumbersWithCommas(JSONmusician[GLOBALMusiciani].wage);
      strTemp += "</p>";
      strTemp += "</div> <!-- divCell -->";

      strTemp += "</div> <!-- divRow -->";
      strTemp +="<div class='divRow'>";


      strTemp += "<div class='divCell'>";
      strTemp += "<img class='guiImage' src='_images/equipment"+JSONmusician[GLOBALMusiciani].equipment+".png' alt='"+JSONequipment[JSONmusician[GLOBALMusiciani].equipment].name+"'>";
      strTemp += "</div> <!-- divCell -->";
      strTemp += "<div class='divCell'>";
      strTemp += "<p>";
      strTemp += JSONequipment[JSONmusician[GLOBALMusiciani].equipment].name;
      strTemp += "</p>";
      strTemp += "</div> <!-- divCell -->";

      strTemp += "</div> <!-- divRow -->";
      strTemp +="<div class='divRow'>";


      strTemp += "<div class='divCell'>";
      strTemp += "<img class='guiImage' src='_images/gift"+JSONmusician[GLOBALMusiciani].gift+".png' alt='"+JSONgift[JSONmusician[GLOBALMusiciani].gift].name+"'>";
      strTemp += "</div> <!-- divCell -->";
      strTemp += "<div class='divCell'>";
      strTemp += "<p>";
      strTemp += JSONgift[JSONmusician[GLOBALMusiciani].gift].name;
      strTemp += "</p>";
      strTemp += "</div> <!-- divCell -->";

      strTemp += "</div> <!-- divRow -->";
      strTemp +="<div class='divRow'>";


  strTemp += "<div class='divCell'>";
  strTemp += "<img class='guiImage' src='_images/fee.png' alt='"+JSONconfig[0].currency + displayNumbersWithCommas(JSONmusician[GLOBALMusiciani].fee)+"'>";
  strTemp += "</div> <!-- divCell -->";
  strTemp += "<div class='divCell'>";
  strTemp += "<p class='"+getGameStatClass(JSONmusician[GLOBALMusiciani].fee, 'fee')+"' >";
  strTemp += JSONconfig[0].currency + displayNumbersWithCommas(JSONmusician[GLOBALMusiciani].fee);
  strTemp += "</p>";
  strTemp += "</div> <!-- divCell -->";

  strTemp += "</div> <!-- divRow -->";
  strTemp +="<div class='divRow'>";

  // strTemp += "<div class='divCell'>";
  // strTemp += "<img class='guiImage' src='_images/equipment"+JSONmusician[GLOBALMusiciani].equipment+".png' alt='"+JSONequipment[JSONmusician[GLOBALMusiciani].equipment].name+"'>";
  // strTemp += "</div> <!-- divCell -->";
  // strTemp += "<div class='divCell'>";
  // strTemp += "<p>";
  // strTemp += JSONequipment[JSONmusician[GLOBALMusiciani].equipment].name;
  // strTemp += "</p>";
  // strTemp += "</div> <!-- divCell -->";
  //
  // strTemp += "</div> <!-- divRow -->";
  // strTemp +="<div class='divRow'>";
  //
  // strTemp += "<div class='divCell'>";
  // strTemp += "<img class='guiImage' src='_images/gift"+JSONmusician[GLOBALMusiciani].gift+".png' alt='"+JSONgift[JSONmusician[GLOBALMusiciani].gift].name+"'>";
  // strTemp += "</div> <!-- divCell -->";
  // strTemp += "<div class='divCell'>";
  // strTemp += "<p>";
  // strTemp += JSONgift[JSONmusician[GLOBALMusiciani].gift].name;
  // strTemp += "</p>";
  // strTemp += "</div> <!-- divCell -->";

  strTemp +="     </div> <!-- divRow -->";
  strTemp +="   </div> <!-- divTable -->";


  strTemp +="       </div> <!-- divCell -->";





  strTemp +="     </div> <!-- divRow -->";
  strTemp +="   </div> <!-- divTable -->";

  strTemp += "<p>" + (GLOBALMusiciani+1) + " of " + JSONmusician.length + "</p>";

  updateElement("divMusicianDetails", strTemp);
  // return strTemp;

} //function

function getMarkUpMusician(i) {

  var strTemp = "";


  strTemp +="   <div class='divTable'>";
  strTemp +="     <div class='divRow'>";
  for (m in JSONband[i].musician) {
    strTemp += "<div class='divCell'>";

    strTemp += "<img id='guiImageMusician"+JSONband[i].musician[m]+"' class='guiImageMusician' src='_images/name.png' alt='"+JSONmusician[JSONband[i].musician[m]].name+"'>";

    strTemp += "<br>";

    strTemp += "<img class='guiImage' src='_images/gift"+JSONmusician[JSONband[i].musician[m]].gift+".png' alt='"+JSONgift[JSONmusician[JSONband[i].musician[m]].gift].name+"'>";
    // strTemp += "<p>";
    // strTemp += "Fav gift: " + JSONgift[JSONmusician[JSONband[i].musician[m]].gift].name;
    // strTemp += "</p>";
    strTemp += "&nbsp;&nbsp;";
    //
    strTemp += "<img class='guiImage' src='_images/equipment"+JSONmusician[JSONband[i].musician[m]].equipment+".png' alt='"+JSONequipment[JSONmusician[JSONband[i].musician[m]].equipment].name+"'>";
    // strTemp += "<p>";
    // strTemp += "Plays: " + JSONequipment[JSONmusician[JSONband[i].musician[m]].equipment].name;
    // strTemp += "</p>";
    strTemp += "<h3>";
    strTemp += JSONmusician[JSONband[i].musician[m]].name;
    strTemp += "</h3>";




    strTemp += "</div> <!-- divCell -->";
    strTemp += "<div class='divCell'>";



    strTemp +="   <div class='divTable'>";
    strTemp +="     <div class='divRow'>";

    strTemp += "<div class='divCell divRight'>";
    strTemp += "<img class='guiImage' src='_images/reputation.png' alt='"+displayNumbersWithCommas(JSONmusician[JSONband[i].musician[m]].reputation)+"'>";
    strTemp += "</div> <!-- divCell -->";
    strTemp += "<div class='divCell'>";
    strTemp += "<p>";

    //
    // alert(JSONmusician[JSONband[i].musician[m]].reputation);
    // var mat = "reputation";
    // var bob = JSONmusician[JSONband[i].musician[m]].reputation;
    // console.log("mat: " + mat);
    // console.log("bob: " + bob);
    // alert(getGameStatClass(bob, mat));
    // strTemp += "<p class='"+getGameStatClass(bob, mat)+"' >";


    strTemp += displayNumbersWithCommas(JSONmusician[JSONband[i].musician[m]].reputation);

    strTemp += "</p>";
    strTemp += "</div> <!-- divCell -->";

    strTemp += "</div> <!-- divRow -->";
    strTemp +="<div class='divRow'>";

    strTemp += "<div class='divCell divRight'>";
    strTemp += "<img class='guiImage' src='_images/skill.png' alt='"+displayNumbersWithCommas(JSONmusician[JSONband[i].musician[m]].skill)+"'>";
    strTemp += "</div> <!-- divCell -->";
    strTemp += "<div class='divCell'>";
    strTemp += "<p>";
    strTemp += displayNumbersWithCommas(JSONmusician[JSONband[i].musician[m]].skill);
    strTemp += "</p>";
    strTemp += "</div> <!-- divCell -->";

    strTemp += "</div> <!-- divRow -->";
    strTemp +="<div class='divRow'>";

    strTemp += "<div class='divCell divRight'>";
    strTemp += "<img class='guiImage' src='_images/happiness.png' alt='"+displayNumbersWithCommas(JSONmusician[JSONband[i].musician[m]].happiness)+"'>";
    strTemp += "</div> <!-- divCell -->";
    strTemp += "<div class='divCell'>";
    strTemp += "<p>";
    strTemp += displayNumbersWithCommas(JSONmusician[JSONband[i].musician[m]].happiness);
    strTemp += "</p>";
    strTemp += "</div> <!-- divCell -->";

    strTemp += "</div> <!-- divRow -->";
    strTemp +="<div class='divRow'>";

        strTemp += "<div class='divCell'>";
        strTemp += "<img class='guiImage' src='_images/wage.png' alt='"+JSONconfig[0].currency + displayNumbersWithCommas(JSONmusician[JSONband[i].musician[m]].wage)+"'>";
        strTemp += "</div> <!-- divCell -->";
        strTemp += "<div class='divCell'>";
        strTemp += "<p>";
        strTemp += JSONconfig[0].currency + displayNumbersWithCommas(JSONmusician[JSONband[i].musician[m]].wage);
        strTemp += "</p>";
        strTemp += "</div> <!-- divCell -->";

        strTemp += "</div> <!-- divRow -->";
        strTemp +="<div class='divRow'>";


        strTemp += "<div class='divCell'>";
        strTemp += "<img class='guiImage' src='_images/equipment"+JSONmusician[JSONband[i].musician[m]].equipment+".png' alt='"+JSONequipment[JSONmusician[JSONband[i].musician[m]].equipment].name+"'>";
        strTemp += "</div> <!-- divCell -->";
        strTemp += "<div class='divCell'>";
        strTemp += "<p>";
        strTemp += JSONequipment[JSONmusician[JSONband[i].musician[m]].equipment].name;
        strTemp += "</p>";
        strTemp += "</div> <!-- divCell -->";

        strTemp += "</div> <!-- divRow -->";
        strTemp +="<div class='divRow'>";


        strTemp += "<div class='divCell'>";
        strTemp += "<img class='guiImage' src='_images/gift"+JSONmusician[JSONband[i].musician[m]].gift+".png' alt='"+JSONgift[JSONmusician[JSONband[i].musician[m]].gift].name+"'>";
        strTemp += "</div> <!-- divCell -->";
        strTemp += "<div class='divCell'>";
        strTemp += "<p>";
        strTemp += JSONgift[JSONmusician[JSONband[i].musician[m]].gift].name;
        strTemp += "</p>";
        strTemp += "</div> <!-- divCell -->";

        strTemp += "</div> <!-- divRow -->";
        strTemp +="<div class='divRow'>";

    //
    // // strTemp += "<div class='divCell'>";
    // // strTemp += "<img class='guiImage' src='_images/fee.png' alt='"+JSONconfig[0].currency + displayNumbersWithCommas(JSONmusician[JSONband[i].musician[m]].fee)+"'>";
    // // strTemp += "</div> <!-- divCell -->";
    // // strTemp += "<div class='divCell'>";
    // // strTemp += "<p>";
    // // strTemp += JSONconfig[0].currency + displayNumbersWithCommas(JSONmusician[JSONband[i].musician[m]].fee);
    // // strTemp += "</p>";
    // // strTemp += "</div> <!-- divCell -->";
    // //
    // // strTemp += "</div> <!-- divRow -->";
    // // strTemp +="<div class='divRow'>";
    // //
    // strTemp += "<div class='divCell'>";
    // strTemp += "<img class='guiImage' src='_images/equipment"+JSONmusician[JSONband[i].musician[m]].equipment+".png' alt='"+JSONequipment[JSONmusician[JSONband[i].musician[m]].equipment].name+"'>";
    // strTemp += "</div> <!-- divCell -->";
    // strTemp += "<div class='divCell'>";
    // strTemp += "<p>";
    // strTemp += JSONequipment[JSONmusician[JSONband[i].musician[m]].equipment].name;
    // strTemp += "</p>";
    // strTemp += "</div> <!-- divCell -->";
    //
    // strTemp += "</div> <!-- divRow -->";
    // strTemp +="<div class='divRow'>";
    //
    // strTemp += "<div class='divCell'>";
    // strTemp += "<img class='guiImage' src='_images/gift"+JSONmusician[JSONband[i].musician[m]].gift+".png' alt='"+JSONgift[JSONmusician[JSONband[i].musician[m]].gift].name+"'>";
    // strTemp += "</div> <!-- divCell -->";
    // strTemp += "<div class='divCell'>";
    // strTemp += "<p>";
    // strTemp += JSONgift[JSONmusician[JSONband[i].musician[m]].gift].name;
    // strTemp += "</p>";
    // strTemp += "</div> <!-- divCell -->";

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
    strTemp += "<img id='guiImageAlbum' src='_images/album.png' alt='"+JSONalbum[JSONband[i].album[b]].name+"'>";
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
