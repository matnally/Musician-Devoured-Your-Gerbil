//Default functions go here!

function updateDate(){
  GLOBALdatDateCurrent.setDate(GLOBALdatDateCurrent.getDate() + 1); //increase GLOBAL current date
  updateElement("divCurrentDate", GLOBALdatDateCurrent);
} //function



function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    } //if
  } //for
} //function



function getJSONIDfromName(strName, JSONtoUse) {
  var intTemp = 0;
  for (i in JSONtoUse) {
    if (JSONtoUse[i].name == strName) {
      intTemp = i;
    } //if
  } //for
  return intTemp;
} //function


var GLOBALstrLogging = "";
function loggingOutput(strAction, strTemp) {
  //document.getElementById("loggingOutput").innerHTML += "["+strAction.toUpperCase()+"] " + strTemp;
  //console.log("["+strAction.toUpperCase()+"] " + strTemp);
  GLOBALstrLogging += "["+strAction.toUpperCase()+"] " + strTemp;

} //function
function logShow() {
  document.getElementById("loggingOutput").innerHTML = GLOBALstrLogging;
  $("#loggingOutput").toggle();
}

function updateElement(elemName, strTemp) {
  //update the element with text
  document.getElementById(elemName).innerHTML = strTemp;
} //function

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
