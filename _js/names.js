
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
