function guiCreateButtonListeners() {
  //TODO: put somewhere appropiate
//  butMusicianAdd.addEventListener("click", musicianAdd);
//  butGameStart.addEventListener("click", bandCreatePlayerStart);
  rpguiContentMain.addEventListener('click', function(e) {
    if(e.target.classList.contains('guiButtonAll')) {
      guiCreateChoiceGUI( e.target.value);
//      alert(e.target.value);
    }
  }, false);
//  guiButtonAll.addEventListener("click", testMe);
} //function

function guiCreateChoiceGUI(strAction) {
  //creates appropiate HTML for the game
  var strTemp = "";

  switch(strAction) {
    case "init":
      strTemp += guiShowCreateBand();
      updateElement("divGUI", strTemp);
      updateElement("divGUImusician", guiCreateMusicianDetails(GLOBALintMusicianChoice));
      guiCreateButtonListeners(); // AFTER element update
    break;
    case "Add musician":
      musicianAdd();
    break;
    case "Start game":
      bandCreatePlayerStart();
      strTemp += createGUImain();
      updateElement("divGUI", strTemp);
      updateElement("divGUImusician", "");
    break;
    case "Practice":
      strTemp += createGUIpractice();
      updateElement("divGUI", strTemp);
    break;
    case "Start Practice":
      turnStart();
    break;
    case "<":
      traverseMusician(-1);
      updateElement("divGUImusician", guiCreateMusicianDetails(GLOBALintMusicianChoice));
    break;
    case ">":
      traverseMusician(1);
      updateElement("divGUImusician", guiCreateMusicianDetails(GLOBALintMusicianChoice));
    break;
    default:
      alert("switch default: VALUE = " + strAction);
  } //switch

} //function

var GLOBALintMusicianChoice = 0;
function traverseMusician(intTemp) {

  GLOBALintMusicianChoice += intTemp;

  if (GLOBALintMusicianChoice >= JSONmusician.length) {
    GLOBALintMusicianChoice = 0;
  }
  if (GLOBALintMusicianChoice < 0) {
    GLOBALintMusicianChoice = JSONmusician.length - 1; //start from zero
  }

} //function

function guiShowCreateBand() {
  //DEFAULTS
  var strContent = "";
  var strOnClick = "";
  var strValue = "";
  var strText = "";
  var strContainerClass = "rpgui-container framed rpgui-draggable";
  var strContainerStyle = "left:35%;height:400px;width:400px;";
  var strButtonClass = "rpgui-button guiButtonAll";
  var strButtonStyle = "width:100%;";
  var strDropdownClass = "rpgui-list";
  var strOptions = "";

  var strTemp = "";

  //START Musician
    strContent = ""; //RESET
    strOptions = ""; //RESET

    strContent += "<p>Create a band</p>";
    strContent += "<input id='inpBandName' type='text' value='Profanity'></input>";
    strContent += "<p>Band musicians</p>";
    strContent += "<div id='divBandComboBox'></div>";

        strOptions += guiCreateSelectOption(JSONmusician);
    strContent += guiCreateSelect("comboBandMusician", strOptions, strDropdownClass);
    strContent +=guiCreateButton("Add musician", "butMusicianAdd", strButtonClass, strButtonStyle, "");
  //END Musician
  strContent +=guiCreateButton("Start game", "butGameStart", strButtonClass, strButtonStyle, "");
    strTemp += guiCreateContainerMain("", strContent, strContainerClass, strContainerStyle);

  //  console.log(strTemp);
    return strTemp;

} //function


function createGUImain() {

  //DEFAULTS
  var strContent = "";
  var strOnClick = "";
  var strValue = "";
  var strText = "";
  var strContainerClass = "rpgui-container framed rpgui-draggable";
  var strContainerStyle = "left:35%;height:560px;width:300px;";
  var strButtonClass = "rpgui-button guiButtonAll";
  var strButtonStyle = "width:100%;";
  var strDropdownClass = "rpgui-list";
  var strOptions = "";

  var strTemp = "";

//START Musician
  strContent = ""; //RESET
  strContent +=guiCreateButton("Practice", "", strButtonClass, strButtonStyle, "");
  strContent +=guiCreateButton("Gig", "", strButtonClass, strButtonStyle, "");
  strContent +=guiCreateButton("Publicity", "", strButtonClass, strButtonStyle, "");
  strContent +=guiCreateButton("Gifts", "", strButtonClass, strButtonStyle, "");
  strContent +=guiCreateButton("Record", "", strButtonClass, strButtonStyle, "");
  strContent +=guiCreateButton("Release", "", strButtonClass, strButtonStyle, "");
//END Musician
  strTemp += guiCreateContainerMain("", strContent, strContainerClass, strContainerStyle);

//  console.log(strTemp);
  return strTemp;

} //function


function createGUIpractice() {

  //DEFAULTS
  var strContent = "";
  var strOnClick = "";
  var strValue = "";
  var strText = "";
  var strContainerClass = "rpgui-container framed rpgui-draggable";
  var strContainerStyle = "left:35%;height:260px;width:300px;";
  var strButtonClass = "rpgui-button guiButtonAll";
  var strButtonStyle = "width:100%;";
  var strDropdownClass = "rpgui-dropdown";
  var strOptions = "";

  var strTemp = "";


//START practice
  strContent = ""; //RESET
  strContent += "<p>Practice</p>";

//strContent += '<select id="divPracticeComboBox">';

  strOptions += '<option value="2">2 days</option>';
  strOptions += '<option value="3">3 days</option>';
  strOptions += '<option value="4">4 days</option>';
  strOptions += '<option value="5">5 days</option>';
  strOptions += '<option value="6">6 days</option>';
  strOptions += '<option value="7">7 days</option>';
  strContent += guiCreateSelect("divPracticeComboBox", strOptions, strDropdownClass);
  strContent += guiCreateButton("Start Practice", "", strButtonClass, strButtonStyle, "setPractice()");


//END practice
  strTemp += guiCreateContainerMain("", strContent, strContainerClass, strContainerStyle);

//  console.log(strTemp);
return strTemp;


} //function


function guiCreateMusicianDetails(i) {

var JSONtoConvert = JSONmusician;

  //DEFAULTS
  var strContent = "";
  var strOnClick = "";
  var strValue = "";
  var strText = "";
  var strContainerClass = "rpgui-container framed rpgui-draggable";
  var strContainerStyle = "left:0;top:0px;height:400px;width:500px;";
  var strButtonClass = "rpgui-button guiButtonAll";
  var strButtonStyle = "width:50%;";
  var strDropdownClass = "rpgui-dropdown";
  var strOptions = "";


  var strTemp = "";

  strContent += "<h1>" +JSONmusician[i].name+ "</h1>";

  strContent += '<div class="divTable">';
  var object = JSONtoConvert[i];//put your object here
  // strContent += '<div class="divTable">';
  for(var key in object) {
    strContent += '<div class="divRow">';
      if(object.hasOwnProperty(key)) {
          var property = object[key];
          // strContent += '<div class="divRow">';
          strContent += '<div class="divCell divRight" style="width:5%;">';
          strContent += '<p>' + key + '</p>';
          strContent += '</div>'; //row
          strContent += '<div class="divCell divCellValue">';
          strContent += '<p>' + property + '</p>';
          strContent += '</div>'; //cell
      } //if
      strContent += '</div>'; //row
    } //for
    strContent += '</div>'; //table

    strContent += '<div class="divTable">';
    strContent += '<div class="divRow">';
    strContent += '<div class="divCell">';
    strContent += guiCreateButton("<", "", strButtonClass, strButtonStyle, "");
    strContent += '</div>'; //row
    strContent += '<div class="divCell">';
    strContent += guiCreateButton(">", "", strButtonClass, strButtonStyle, "");
    strContent += '</div>'; //cell
    strContent += '</div>'; //row
    strContent += '</div>'; //table

//  strTemp += strContent;
    strTemp += guiCreateContainerMain("", strContent, strContainerClass, strContainerStyle);
//alert(strTemp);
  return strTemp;

} //function

function guiCreateContainerMain(strID, strContent, strClass, strStyle) {
  //create a rpgui container in html
  var strTemp = "";
    strTemp += "<div id='"+strID+"' class='"+strClass+"' style='"+strStyle+"'>";
    strTemp += strContent;
    strTemp += "</div>";
  return strTemp;
} //function
function guiCreateButton(strText, strID, strClass, strStyle, strOnClick) {
  //create a rpgui container in html
  var strTemp = "";
    strTemp += "<button id='"+strID+"' value='"+strText+"' class='"+strClass+"' type='button' onClick='"+strOnClick+"' style='"+strStyle+"'><p>"+strText+"</p></button>";
  return strTemp;
} //function
function guiCreateSelect(strID, strContent, strClass) {
  var strTemp = "";
    strTemp += "<select id='"+strID+"' class='"+strClass+"' size='5' style='width:100%;'>";
    strTemp += strContent;
    strTemp += "</select>";
  return strTemp;
} //function
function guiCreateSelectOption(JSONtoConvert) {
  var strTemp = "";
  for (i in JSONtoConvert) {
    strTemp += "<option value='" + i + "'>" + JSONtoConvert[i].name + "</option>";
  }
  return strTemp;
} //function
