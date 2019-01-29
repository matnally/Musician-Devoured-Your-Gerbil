
function getTracks() {
  return Math.floor(Math.random() * JSONtracks.length);
} //function



function guiDisplayDetailsSingle(intSingle) {

  console.log("intSingle: " + intSingle);
  console.log("JSONsingle[intSingle].name: " + JSONsingle[intSingle].name);
  console.log("JSONsingle[intSingle].chartHistory: " + JSONsingle[intSingle].chartHistory);

  createChart(JSONsingle[intSingle].chartHistory);

//  alert(intSingle + " : " + JSONsingle[intSingle].name);

} //function
