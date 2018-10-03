//Default functions go here!

function updateDate() {
  GLOBALdatDateCurrent.setDate(GLOBALdatDateCurrent.getDate() + 1); //increase GLOBAL current date

  updateElement("divCurrentDate", guiDisplayDate());

} //function

var GLOBALJSONlog = [];
function loggingOutput(i, strAction, strTemp) {

  GLOBALJSONlog.push({'band':i, 'action':strAction, 'content':strTemp}); //add band JSON

} //function

function adminShowLog(i) {

  var strTemp = "";

  // for (l in GLOBALJSONlog) {
  for (var l = (GLOBALJSONlog.length-1); l >= 0; l--) { //REVERSES log order
    if (GLOBALJSONlog[l].band == i)
      strTemp += "[" + GLOBALJSONlog[l].action.toUpperCase() + "] - " + GLOBALJSONlog[l].content;
  } //for

  document.getElementById("loggingOutput").innerHTML = strTemp;

} //function

function updateElement(elemName, strTemp) {
  //update the element with text
  document.getElementById(elemName).innerHTML = strTemp;
} //function

function createComboBoxMusicianfromBand(JSONtoConvert) {
  //create and string return complete html combo box

  var strTemp = "";
  var strName = "";
  var intIndex = 0;

  strTemp = "<select>";
  for (i in JSONtoConvert) {
    intIndex = parseInt(JSONtoConvert[i]); //get JSONmusician index from name
    strTemp += "<option value='" + intIndex + "'>" + JSONmusician[intIndex].name + "</option>";
  }
  strTemp += "</select>";
  return strTemp;
} //function

function displayNumbersWithCommas(intNumber) {
  //puts commas in the 1,000's
  intNumber = parseInt(intNumber);
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
} //function
