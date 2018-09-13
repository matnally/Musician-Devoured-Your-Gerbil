
function getRandomName() {
  return createName();
} //function

function createName() {
  var randomPrefix = namePrefixes[Math.floor(Math.random()*namePrefixes.length)];
      randomPrefix = namePrefixes[Math.floor(Math.random()*namePrefixes.length)]; //??? so no randoms?
  var randomSuffix = nameSuffixes[Math.floor(Math.random()*nameSuffixes.length)];
      randomSuffix = nameSuffixes[Math.floor(Math.random()*nameSuffixes.length)]; //??? so no randoms?
  return (randomPrefix + ' ' + randomSuffix);
} //function

function getBandName(arrTemp) {
  //returns a random band name string
  var strTemp = "";
  switch (arrTemp.length) {
    case 1:
      strTemp = JSONmusician[arrTemp[0]].name; //only one member of band so just call band their name
    break;
    // case 2:
    //   //choose either make up band name using surnames or just band name
    //   strTemp = Math.random().toString(36).substring(7);
    // break;
    default:
      strTemp = getRandomName();
  } //switch
  return strTemp;
} //function
