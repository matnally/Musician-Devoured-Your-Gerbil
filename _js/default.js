//Default functions go here!

function updateElement(elemName, strTemp) {
  //update the element with text
  document.getElementById(elemName).innerHTML = strTemp;
} //function

function createComboBoxfromJSON(JSONtoConvert) {
  //create and string return complete html combo box
  var strTemp = "";
  strTemp += "<select>";
  // strTemp += "<option value=''>Choose an option</option>";
  for (i in JSONtoConvert) {
    strTemp += "<option value='" + i + "'>" + JSONtoConvert[i].name + "</option>";
  }
  strTemp += "</select>";
  return strTemp;
} //function

//TODO:
function createComboBoxfromJSONband(JSONtoConvert) {
  //create and string return complete html combo box
  var strTemp = "";
  strTemp += "<select>";
  // strTemp += "<option value=''>Choose an option</option>";
  for (i in JSONtoConvert) {
    strTemp += "<option value='" + i + "'>" + JSONmusician[JSONtoConvert[i]].name + "</option>";
  }
  strTemp += "</select>";
  return strTemp;
} //function
