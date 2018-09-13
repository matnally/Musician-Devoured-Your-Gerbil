
function bandAddMusician(index) {
  //Add musician index to band musician array
  JSONband[0].musician.push(index);
  updateElement("divBandComboBox", createComboBoxfromJSONband(JSONband[0].musician)); //Update and display the comboBox
} //function
