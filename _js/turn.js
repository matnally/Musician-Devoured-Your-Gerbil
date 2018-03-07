

function turnInit() {
  //Initialisation of turn / Start of game!

  updateElement("divDirectorComboBox", createComboBoxfromJSON(JSONdirector));
  updateElement("divEquipmentComboBox", createComboBoxfromJSON(JSONequipment));
  updateElement("divFeatureComboBox", createComboBoxfromJSON(JSONfeature));
  updateElement("divGiftComboBox", createComboBoxfromJSON(JSONgift));
  // updateElement("divInstrumentComboBox", createComboBoxfromJSON(JSONinstrument));
  updateElement("divLocationComboBox", createComboBoxfromJSON(JSONlocation));
  updateElement("divMusicianComboBox", createComboBoxfromJSON(JSONmusician));
  // updateElement("divSponsorComboBox", createComboBoxfromJSON(JSONsponsor));
  updateElement("divVenueComboBox", createComboBoxfromJSON(JSONvenue));

  updateElement("divBandComboBox", createComboBoxfromJSON(JSONband));

} //function

function turnStart() {
  //Start of turn

} //function

function turnEnd() {
  //End of turn

} //function
