//Default functions go here!


function createComboBoxfromJSON(JSONtoConvert) {

  var strTemp = "";

  strTemp += "<select>";
  for (i in JSONtoConvert) {
    strTemp += "<option value='" + JSONtoConvert[i].name + "'>" + JSONtoConvert[i].name + "</option>";
  }
  strTemp += "</select>";

  return strTemp;

} //function
