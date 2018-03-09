

function turnInit() {
  //Initialisation of turn / Start of game!

  updateElement("divDirectorComboBox", createComboBoxfromJSON(JSONdirector, "selDirectorComboBox"));
  updateElement("divEquipmentComboBox", createComboBoxfromJSON(JSONequipment, "selEquipmentComboBox"));
  updateElement("divFeatureComboBox", createComboBoxfromJSON(JSONfeature, "selFeatureComboBox"));
  updateElement("divGiftComboBox", createComboBoxfromJSON(JSONgift, "selGiftComboBox"));
  // updateElement("divInstrumentComboBox", createComboBoxfromJSON(JSONinstrument));
  updateElement("divLocationComboBox", createComboBoxfromJSON(JSONlocation, "selLocationComboBox"));
  updateElement("divMusicianComboBox", createComboBoxfromJSON(JSONmusician, "selMusicianComboBox"));
  // updateElement("divSponsorComboBox", createComboBoxfromJSON(JSONsponsor));
  updateElement("divVenueComboBox", createComboBoxfromJSON(JSONvenue, "selVenueComboBox"));
  updateElement("divBandComboBox", createComboBoxfromJSON(JSONband, "selBandComboBox"));

} //function

function turnStart() {
  //Start of turn

} //function

function turnEnd() {
  //End of turn

} //function
