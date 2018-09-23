
function bandAddMusician(index) {
  //Add musician index to band musician array

  if ((JSONband[0].money - JSONmusician[index].fee) >= 0) {
      //can afford
      JSONband[0].musician.push(index);
      updateElement("divBandMusicians", createComboBoxfromJSONband(JSONband[0].musician)); //Update and display the comboBox
  } else {
    alert("Can't afford this Musician's Signing Fee");
  } //if

} //function

function gameSetSettings() {

  JSONband[0].money = JSONconfig[0][document.getElementById('selBandMoney').value];
  gameCreateMusicians(document.getElementById('selNameSet').value);

  createGrid();

} //function
