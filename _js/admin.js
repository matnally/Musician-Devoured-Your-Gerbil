
function guiAdminBandsAllShow() {
  updateElement("divAdminBandComboBox", createComboBoxfromJSONiAndNameBandDetails(JSONband, "selAdminBandComboBox"));
  updateElement("divAdminMusicianComboBox", createComboBoxfromJSONiAndNameMusicianDetails(JSONmusician, "selAdminMusicianComboBox"));
} //function
