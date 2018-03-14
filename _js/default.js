//Default functions go here!

function updateElement(elemName, strTemp) {
  //update the element with text
  document.getElementById(elemName).innerHTML = strTemp;
} //function

function createComboBoxfromJSON(JSONtoConvert, strID) {
  //create and string return complete html combo box
  var strTemp = "";
  strTemp += "<select class='rpgui-dropdown' id='" + strID + "'>";
  // strTemp += "<option value=''>Choose an option</option>";
  for (i in JSONtoConvert) {
    strTemp += "<option value='" + JSONtoConvert[i].name + "'>" + JSONtoConvert[i].name + "</option>";
  }
  strTemp += "</select>";
  return strTemp;
} //function
function createComboBoxfromJSONiAndName(JSONtoConvert, strID) {
  //create and string return complete html combo box
  var strTemp = "";



  strTemp += "<select class='rpgui-dropdown' id='" + strID + "'>";
  // strTemp += "<option value=''>Choose an option</option>";
  for (i in JSONtoConvert) {
    strTemp += "<option value='" + i + "'>" + JSONtoConvert[i].name + "</option>";
  }
  strTemp += "</select>";
  return strTemp;
} //function
function createComboBoxfromJSONticketPrice(JSONtoConvert, strID) {
  //create and string return complete html combo box
  var strTemp = "";
  // strTemp += "<option value=''>Choose an option</option>";
  for (a in JSONtoConvert) {
    strTemp += "<select class='rpgui-dropdown' id='" + strID + "'>";
    var object2 = JSONtoConvert[0];//put your object here
    for(var key2 in object2) {
        if(object2.hasOwnProperty(key2)) {
            var property2 = object2[key2];
            strTemp += "<option value='" + property2 + "'>" + property2 + "</option>";
        } //if
    } //for
    strTemp += "</select>";
  } //for
  return strTemp;
} //function

//TODO:
function createComboBoxfromJSONband(JSONtoConvert) {
  //create and string return complete html combo box

  var strTemp = "";
  var strName = "";
  var intIndex = 0;

  strTemp = "<select class='rpgui-dropdown '>";
  // strTemp += "<option value=''>Choose an option</option>";
  for (i in JSONtoConvert) {
//    strName = JSONtoConvert[i]; //get musician
    intIndex = parseInt(JSONtoConvert[i]); //get JSONmusician index from name

    strTemp += "<option value='" + intIndex + "'>" + JSONmusician[intIndex].name + "</option>";
  }
  strTemp += "</select>";
  return strTemp;
} //function

function createComboBoxfromJSONTEMP(JSONtoConvert) {
  //create and string return complete html combo box
  var strTemp = "";
  strTemp += "<select class='rpgui-dropdown'>";
  // strTemp += "<option value=''>Choose an option</option>";
  for (i in JSONtoConvert) {
    strTemp += "<option value='" + i + "'>" + JSONtoConvert[i].name + " - " + JSONtoConvert[i].musician.length + " musicians</option>";
  }
  strTemp += "</select>";
  return strTemp;
} //function


function displayNumbersWithCommas(intNumber) {
  //puts commas in the 1,000's
  return intNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
} //function

function formatDate(value) {
   return value.getDate() + "/" + value.getMonth()+1 + "/" + value.getFullYear();
 } //function





   function displayContainer(strDivID) {
     //Loop through all containers: remove Show class, add Hide class
     var i;
     var x = document.getElementsByClassName("divMusicianContainer");
     for (i=0; i<x.length; i++) {
       x[i].classList.remove("divContainerShow");
       x[i].classList.add("divContainerHide");
     } //for
     if (strDivID != "")
      document.getElementById(strDivID).classList.add("divContainerShow"); //Show passed in container
   } //function


   function createMusicianContainer(i, strClass) {
     return '<div id=\'mus' + i + '\' class=\'' + strClass + '\'>'; // NO ENDING DIV
   } //function
   function createMusicianButton(i, strName) {
     return '<button id=\'but' + i + '\' onClick="displayContainer(\'mus' + i + '\')">'+ strName +'</button>';
   } //function


 function showPlayer() {

   var strTemp = "";

   strTemp += '<div class="divTable">';

   strTemp += '<div class="divRow">';
   strTemp += '<div class="divCell">';

   // BAND CELL
   strTemp += JSONband[0].name;
   strTemp += '<br>';
   strTemp += "MON: " + JSONconfig[0].currency + displayNumbersWithCommas(JSONband[0].money);
   strTemp += '<br>';
   strTemp += "REP: " + displayNumbersWithCommas(JSONband[0].reputation);
   strTemp += '<br>';
   strTemp += "EQP: " + JSONequipment[JSONband[0].equipment].name;
   strTemp += '<br>';
   strTemp += "RECORDCONTRACT: " + JSONband[0].contract;
   strTemp += '<br>';
   strTemp += "ALBUM: " + JSONband[0].album;
   strTemp += '<br>';
   strTemp += '<br>';
   strTemp += getActionName(JSONband[0].action).toUpperCase() + " for " + JSONband[0].days + " day(s). Completes on " + formatDate(JSONband[0].dateActionFinish);
   strTemp += '<br>';
   // MUSICIAN BUTTONS
   for (k in JSONband[0].musician) {
     strTemp += createMusicianButton(JSONband[0].musician[k], JSONmusician[(JSONband[0].musician[k])].name);
   } //for
   // MUSICIAN CELL
   for (v in JSONband[0].musician) {
     strTemp += createMusicianContainer(JSONband[0].musician[v], "divMusicianContainer divContainerHide");
       strTemp += JSONmusician[(JSONband[0].musician[v])].name;
       strTemp += '<br>';
       strTemp += "REP: " + JSONmusician[(JSONband[0].musician[v])].reputation;
       strTemp += '<br>';
       strTemp += "HAP: " + JSONmusician[(JSONband[0].musician[v])].happiness;
       strTemp += '<br>';
       strTemp += "SKI: " + JSONmusician[(JSONband[0].musician[v])].skill;
       strTemp += '<br>';
       strTemp += "WAG: " + JSONconfig[0].currency + displayNumbersWithCommas(JSONmusician[(JSONband[0].musician[v])].wage);
       strTemp += '<br>';
       strTemp += "FAV GIFT: " + JSONgift[JSONmusician[(JSONband[0].musician[v])].gift].name;
     strTemp += '</div>'; // to end the DIV created in createMusicianContainer
   } //for

   // BAND divCell
   strTemp += '</div>'; //divCell
   strTemp += '</div>'; //divRow

   strTemp += '</div>'; // divTable

   updateElement("divPlayerBand", strTemp);

} //function


function showMusicians() {

showPlayer();

  var strTemp = "";



  strTemp += '<section id="secBands">';
  strTemp += "<h3>" + GLOBALdatDateCurrent + "</h3>";
  strTemp += '<div class="divTable">';

  for (a in JSONband) {
    strTemp += '<div class="divRow">';
    strTemp += '<div class="divCell">';
    var object2 = JSONband[a];//put your object here
    strTemp += '<div class="divTable">';
    for(var key2 in object2) {
        if(object2.hasOwnProperty(key2)) {
            var property2 = object2[key2];
            strTemp += '<div class="divRow">';
            strTemp += '<div class="divCell divRight"><strong>' + key2 + '</strong></div><div class="divCell">' + property2 + "</div>";
            strTemp += '</div>'; //row
        } //if
    } //for

    //show action
    strTemp += '<div class="divRow">';
    strTemp += '<div class="divCell divRight">';
    strTemp += 'ACTION';
    strTemp += '</div>'; //cell
    strTemp += '<div class="divCell">';
    strTemp += getActionName(JSONband[a].action) + " for " + JSONband[a].days + " days";
    strTemp += '</div>'; //cell
    strTemp += '</div>'; //row

    //show albums if any
    if (JSONband[a].album != false) {
      strTemp += '<div class="divRow">';
      strTemp += '<div class="divCell divRight">';
      strTemp += 'ALBUM';
      strTemp += '</div>'; //cell
      strTemp += '<div class="divCell">';
      strTemp += "<strong>" + JSONalbum[JSONband[a].album].name + "</strong> - " + JSONalbum[JSONband[a].album].tracks + " tracks";
      //show singles of album
      for (y in JSONsingle) {
        //get singles of album
        if (JSONsingle[y].album == JSONband[a].album) {
          //single belongs to album
          strTemp += '<br>- ';
          strTemp += JSONsingle[y].name + " (ACTIVE : " + JSONsingle[y].active + ")";
        } //if
      } //for
      strTemp += '</div>'; //cell
      strTemp += '</div>'; //row
    } //if    show albums

  strTemp += '</div>'; //table
  strTemp += '</div>'; //section

    for (b in JSONband[a].musician) {
      strTemp += '<div class="divCell">';
      // strTemp += JSONband[a].musician[b]; //name
      var object = JSONmusician[(JSONband[a].musician[b])];//put your object here
      strTemp += '<div class="divTable">';
      for(var key in object) {
          if(object.hasOwnProperty(key)) {
            var property = object[key];
            strTemp += '<div class="divRow">';
            strTemp += '<div class="divCell divRight"><strong>' + key + '</strong></div><div class="divCell">' + property + "</div>";
            strTemp += '</div>';
          } //if
      } //for
      strTemp += '</div>';


      // strTemp += '<br>';
      // strTemp += 'Rep: ' + JSONmusician[(JSONband[a].musician[b])].reputation;
      // strTemp += '<br>';
      // strTemp += 'Skill: ' + JSONmusician[(JSONband[a].musician[b])].skill;
      // strTemp += '<br>';



      strTemp += '</div>';
    }
    strTemp += '</div>';

    strTemp += "";
    strTemp += "";
    strTemp += "";
  }

  strTemp += '</div>';
  strTemp += '</section>';

  updateElement("divData", strTemp);

}

function getActionName(index) {
  var strTemp = "";
  switch(index) {
    case 0:
      //practice
      strTemp = "practice";
    break;
    case 1:
      //gig
      strTemp = "gig";
    break;
    case 2:
      //publicity
      strTemp = "publicity";
    break;
    case 3:
      //gifts
      strTemp = "gifts";
    break;
    case 4:
      //record
      strTemp = "record";
    break;
    case 5:
      //release
      strTemp = "release";
    break;
  } //switch
return strTemp;
}
