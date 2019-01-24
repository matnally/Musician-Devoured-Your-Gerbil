
function guiShowSection(strID) {

  //Hides all sections
  var elems = document.getElementsByTagName("section");
  for (var i=0; i < elems.length; i++) {
    $(elems).hide();
  }
  //Show section by passed in ID
  $("#" + strID).show();

} //function







function guiCreateHTMLMusician(m) {


  m = parseInt(m);

  if (m < 0)
    m = JSONmusician.length - 1;

  if (m >= JSONmusician.length)
    m = 0;

  GLOBALMusiciani = m;

  var elemTemplateNode = "";
  var elemTemplateItem = "";
  var strTemp = ""; // To hold the HTML
  var strClass = ""; // Class to add

  var elemTemplate = document.querySelector("template.templateMusician"); //Get template

  elemTemplateNode = document.importNode(elemTemplate, true); // Create new node, based on the template

  // ID
  elemTemplateItem = elemTemplateNode.content.querySelector("div.divTableWrapper");
  elemTemplateItem.setAttribute("id", "musician" + m); //give it a unquie ID based on musican ID

  // Choose correct class for the table from https://www.w3schools.com/w3css/w3css_responsive.asp
  switch (true) {
    case (JSONband[0].musician.length == 2):
      strClass = "w3-half";
    break;
    case (JSONband[0].musician.length == 3):
      strClass = "w3-third";
    break;
    case (JSONband[0].musician.length == 4):
      strClass = "w3-quarter";
    break;
    default:
      strClass = "w3";
  } //switch
  elemTemplateItem.classList.add(strClass);

  // Name
  elemTemplateItem = elemTemplateNode.content.querySelector("div.musicianName");
  elemTemplateItem.textContent = JSONmusician[m].name; //change name
  // Musician Image
  elemTemplateItem = elemTemplateNode.content.querySelector("img.musicianImage");
  elemTemplateItem.setAttribute("src", "_images/gui32x32.png"); //give it a unquie ID based on musican ID
  elemTemplateItem.setAttribute("alt", JSONmusician[m].name); //give it a unquie ID based on musican ID
  // Skill
  elemTemplateItem = elemTemplateNode.content.querySelector("div.musicianSkill");
  elemTemplateItem.textContent = JSONmusician[m].skill;
  // Happiness
  elemTemplateItem = elemTemplateNode.content.querySelector("div.musicianHappiness");
  elemTemplateItem.textContent = JSONmusician[m].happiness;
  // Reputation
  elemTemplateItem = elemTemplateNode.content.querySelector("div.musicianReputation");
  elemTemplateItem.textContent = JSONmusician[m].reputation;
  // Gift
  elemTemplateItem = elemTemplateNode.content.querySelector("img.musicianGift");
  elemTemplateItem.setAttribute("src", "_images/gui32x32.png"); //give it a unquie ID based on musican ID
  elemTemplateItem.setAttribute("alt", JSONmusician[m].gift); //give it a unquie ID based on musican ID
  // Equipment
  elemTemplateItem = elemTemplateNode.content.querySelector("img.musicianEquipment");
  elemTemplateItem.setAttribute("src", "_images/gui32x32.png"); //give it a unquie ID based on musican ID
  elemTemplateItem.setAttribute("alt", JSONmusician[m].equipment); //give it a unquie ID based on musican ID
  // Wage
  elemTemplateItem = elemTemplateNode.content.querySelector("div.musicianWage");
  elemTemplateItem.textContent = JSONgame[0].currency + displayNumbersWithCommas(JSONmusician[m].wage);

  strTemp += elemTemplateNode.innerHTML; //get innerHTML so does get the template tags. If get the TEMPLATE tags it won't show by default

  return strTemp;

} //function





//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function updateElement(elemName, strTemp) {
  //update the element with text
  document.getElementById(elemName).innerHTML = strTemp;
} //function

function displayNumbersWithCommas(intNumber) {
  //puts commas in the 1,000's
  intNumber = parseInt(intNumber);
  return intNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
} //function
