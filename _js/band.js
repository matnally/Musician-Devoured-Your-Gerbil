
function bandCreate(intBand) {

  bandAddMusician(intBand, 0);
  bandAddMusician(intBand, 1);
  bandAddMusician(intBand, 2);
  bandAddMusician(intBand, 3);


  var strTemp = "";
  for (m in JSONband[intBand].musician) {
    strTemp += guiCreateHTMLMusician(JSONband[intBand].musician[m]);
  } //for
  updateElement('templateMusicians', strTemp); // New GUI




  guiShowSection("secBand");

} //function

function bandAddMusician(intBand, intMusician) {

  JSONband[intBand].musician.push(intMusician); //Push musician index to band's musician array

} //function
