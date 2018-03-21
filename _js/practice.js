function setPractice(intDays) {
  //set player (0) attributes appropiate for action

  alert("why?!")

intDays = document.getElementById('divPracticeComboBox').value;

  var datDateActionFinish = 0;
      datDateActionFinish = getDateActionFinish(intDays);
  JSONband[0].dateActionFinish = datDateActionFinish;
  JSONband[0].action = 0; //0 = practice
  JSONband[0].days = parseInt(intDays);
//  showMusicians(); //just to update what player has chosen
} //function


function practice(i) {
  //execute practice for the ith band
  var strTemp = "";
  var intTemp = 0;
  var intIndex = 0;

  for (a in JSONband[i].musician) {
    //for every musician in the passed in band
//alert(JSONband[i].musician[a]);
    //update skill
    intTemp = parseInt(JSONmusician[JSONband[i].musician[a]].skill) + JSONconfig[0].valuePracticeSkill;
      JSONmusician[JSONband[i].musician[a]].skill = intTemp;
    //update happiness
    intTemp = parseInt(JSONmusician[JSONband[i].musician[a]].happiness) - JSONconfig[0].valuePracticeHappiness;
      JSONmusician[JSONband[i].musician[a]].happiness = intTemp;
    //update reputation
    intTemp = parseInt(JSONmusician[JSONband[i].musician[a]].reputation) - JSONconfig[0].valuePracticeReputation;
      JSONmusician[JSONband[i].musician[a]].reputation = intTemp;

//console.log(JSONmusician[JSONband[i].musician[a]].name + " skill is now " + JSONmusician[JSONband[i].musician[a]].skill);

  }//for


i = updateBandReputation(i);


  //update momey
  intTemp = parseInt(JSONband[i].money) - parseInt(JSONconfig[0].costPractice);
    JSONband[i].money = intTemp;


} //function



function updateBandReputation(intI) {
  var bob = [];
//  console.log("intI B4: " + intI);
  bob = calcBandReputation(JSONband[intI].musician);
  JSONband[intI].reputation = bob;
//  console.log("intI After: " + intI);
  return intI;
} //function
