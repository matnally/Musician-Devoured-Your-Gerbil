
/*
NOT TESTED
  actionChooseBandAll
  actionExecuteBandAll
*/
QUnit.module( "action.js" );
  QUnit.test( "getAction()", function(assert) {
    var result = getAction();
    assert.ok (result >= 0 && result < 6, "Action is between 0-5. Result = " + result);
  });
  QUnit.test( "actionChoose(0)", function(assert) {
    actionChoose(0);
    var result = JSONband[0].action
    assert.ok (result >= 0 && result <= 4, "Band has a choosen Action. Result = " + result);
  });

/*
NOT TESTED
  guiAdminShowJSON
  adminAdminTurn
*/
QUnit.module( "admin.js" );
QUnit.test( "gameCreateMusicians(document.getElementById('selNameSet').value)", function(assert) {
  var resultBefore = JSONmusician.length;
  gameCreateMusicians("JSONmusicianNamesRockstar");
  var resultAfter = JSONmusician.length;
  assert.ok (resultAfter > resultBefore, "JSONmusician has more than before, so worked? ResultBefore : " + resultBefore + " - ResultAfter : " + resultAfter);
});

/*
NOT TESTED
*/
QUnit.module( "album.js" );
  QUnit.test( "createAlbum(1)", function(assert) {
    gameCreateMusicians(document.getElementById('selNameSet').value);
    createBandOther();
    var resultBefore = JSONband[1].album.length;
    createAlbum(1);
    var resultAfter = JSONband[1].album.length;
    assert.ok (resultAfter == (resultBefore+1), "Band's albums have increased by 1. ResultBefore : " + resultBefore + " - ResultAfter : " + resultAfter);
  });
  QUnit.test( "createTrack(i, intAlbum)", function(assert) {
    gameCreateMusicians(document.getElementById('selNameSet').value);
    createBandOther();
    createAlbum(1);
    var resultBefore = JSONsingle.length;
    createTrack(1, 0);
    var resultAfter = JSONsingle.length;
    assert.ok (resultBefore < resultAfter, "JSON singles has more than before, so worked? ResultBefore : " + resultBefore + " - ResultAfter : " + resultAfter);
  });
  QUnit.test( "chkAlreadyHaveAlbum(0)", function(assert) {
    var result = chkAlreadyHaveAlbum(0);
    assert.ok (result == false, "Player's band does NOT have an album as its the start of the game. Result = " + result);
  });
  QUnit.test( "getQualityRatingTrack(1)", function(assert) {
    gameCreateMusicians(document.getElementById('selNameSet').value);
    createBandOther();
    var result = getQualityRatingTrack(1);
    assert.ok (result > 0, "Value returned from getQualityRatingTrack is more that 0. Result = " + result);
  });

/*
NOT TESTED
  getMusiciansRemaining
*/
QUnit.module( "band.js" );
  QUnit.test( "calBandMusicianCost()", function(assert) {
    var result = calBandMusicianCost();
    assert.ok (result > 0, "Value returned from calBandMusicianCost is more that 0. Result = " + result);
  });
  QUnit.test( "createBandPlayer(JSONband[0])", function(assert) {
    createBandPlayer(JSONband[0]);
    assert.ok (JSONband[0].name == document.getElementById("inpBandName").value
              ,JSONband[0].reputation == calcBandReputation(JSONband[0].musician)
              ,JSONband[0].equipment == document.getElementById("selEquipmentComboBox").value
              ,"Player's band equals band create choices");
  });
  QUnit.test( "createBandOther()", function(assert) {
    var resultBefore = JSONband.length;
    createBandOther();
    var resultAfter = JSONband.length;
    assert.ok (resultBefore < resultAfter, "JSONband has more than before, so worked? ResultBefore : " + resultBefore + " - ResultAfter : " + resultAfter);
  });
  QUnit.test( "updateBandReputation(0)", function(assert) {
    gameCreateMusicians(document.getElementById('selNameSet').value);
    JSONband[0].money = 1000000; //cheat so can afford musician
    bandAddMusician(0);
    createBandPlayer(JSONband[0]);
    updateBandReputation(0);
    var result = JSONband[0].reputation;
    assert.ok (result == calcBandReputation(JSONband[0].musician), "Band reputation calculated. Result = " + result);
  });
  QUnit.test( "calcBandReputation(JSONband[0].musician)", function(assert) {
    gameCreateMusicians(document.getElementById('selNameSet').value);
    JSONband[0].money = 1000000; //cheat so can afford musician
    bandAddMusician(0);
    createBandPlayer(JSONband[0]);
    updateBandReputation(0);
    var result = JSONband[0].reputation;
    assert.ok (result == calcBandReputation(JSONband[0].musician), "Band reputation calculated. Result = " + result);
  });
  QUnit.test( "getDateCurrent()", function(assert) {
    var result = getDateCurrent();
    assert.ok (result == GLOBALdatDateCurrent, "Date is correct. Result = " + result);
  });
  QUnit.test( "getActionDateFinish(0)", function(assert) {
    var result = getActionDateFinish(1);
    assert.ok (result > GLOBALdatDateCurrent, "Finish date is in the future. Result = " + result);
  });
  QUnit.test( "getDays(69)", function(assert) {
    var result = getDays(69);
    assert.ok (result >= 1 && result < 69, "Days is between 1-69. Result = " + result);
  });
  QUnit.test( "getEquipment()", function(assert) {
    var result = getEquipment();
    assert.ok (result >= 0 && result < JSONequipment.length, "Equipment is more than 0 and less than JSONequipment.length. Result = " + result);
  });
  QUnit.test( "getMusiciansRemaining()", function(assert) {
    var result = getMusiciansRemaining();
    assert.ok (result.length > 0, "More than 0 so still musicians left!. Result = " + result);
  });

/*
NOT TESTED
*/
QUnit.module( "calc.js" );
  QUnit.test( "getMarkUpBand(0)", function(assert) {
    var result = getMarkUpBand(0);
    assert.ok (result != "", "getMarkUpBand is not empty. Result = " + result);
  });
  QUnit.test( "getMarkUpGameStartMusician(0)", function(assert) {
    var result = getMarkUpGameStartMusician(0);
    assert.ok (result != "", "getMarkUpGameStartMusician is not empty. Result = " + result);
  });
  QUnit.test( "getMarkUpMusician(0)", function(assert) {
    var result = getMarkUpMusician(0);
    assert.ok (result != "", "getMarkUpMusician is not empty. Result = " + result);
  });
  QUnit.test( "getMarkUpAlbum(0)", function(assert) {
    var result = getMarkUpAlbum(0);
    assert.ok (result != "", "getMarkUpAlbum is not empty. Result = " + result);
  });

/*
NOT TESTED
*/
QUnit.module( "chart.js" );
  QUnit.test( "chartTime()", function(assert) {
    gameCreateMusicians(document.getElementById('selNameSet').value);
    createBandOther();
    createAlbum(1);
    release(1);
    chartTime();
    var result = document.getElementById("divChart").innerHTML;
    assert.ok (result == "NOT GOT 20 SINGLES YET!", "Not got 20 singles yet so no chart!. Result = " + result);
  });
  QUnit.test( "getChartSingleMovement(arrSingle, intChartPosition)", function(assert) {
    gameCreateMusicians(document.getElementById('selNameSet').value);
    createBandOther();
    createAlbum(1);
    release(1);
    var result = getChartSingleMovement(JSONsingle[0], 1);
    assert.ok (result == "<img src='_images/imgChartNew.png' alt='imgChartNew'>", "getChartSingleMovement New as just entered. Result = " + result);
  });
  QUnit.test( "calcChartTimeSingleQualityRating(arrItemSingle)", function(assert) {
    gameCreateMusicians(document.getElementById('selNameSet').value);
    createBandOther();
    createAlbum(1);
    release(1);
    var result = calcChartTimeSingleQualityRating(JSONsingle[0]);
    assert.ok (result > 0, "calcChartTimeSingleQualityRating is more than 0. Result = " + result);
  });
  QUnit.test( "sortArrayByKey(array, key)", function(assert) {
    var result = sortArrayByKey(JSONcontract, "money");
    assert.ok (result[0].name == "Griffen", "sortArrayByKey ordered correctly. Result = " + result[0].name);
  });
  QUnit.test( "getBandFromAlbum(album)", function(assert) {
    gameCreateMusicians(document.getElementById('selNameSet').value);
    createBandOther();
    createAlbum(1);
    var result = getBandFromAlbum(0);
    assert.ok (result == 1, "getBandFromAlbum found Band! Result = " + result);
  });
  QUnit.test( "getBandFromMusician(musician)", function(assert) {
    gameCreateMusicians(document.getElementById('selNameSet').value);
    JSONband[0].money = 1000000; //cheat so can afford musician
    bandAddMusician(1);
    bandAddMusician(2);
    createBandPlayer(JSONband[0]);
    createBandOther();
    var result = getBandFromMusician(2);
    assert.ok (result == 0, "getBandFromMusician found Band! Result = " + result);
  });
  QUnit.test( "getReleasedSinglesAll()", function(assert) {
    gameCreateMusicians(document.getElementById('selNameSet').value);
    createBandOther();
    createAlbum(1);
    release(1);
    var result = getReleasedSinglesAll();
    assert.ok (result.length == 1, "getReleasedSinglesAll length is 1! Result = " + result);
  });

/*
NOT TESTED
*/
QUnit.module( "contract.js" );
  QUnit.test( "eventContract(band)", function(assert) {
    gameCreateMusicians(document.getElementById('selNameSet').value);
    JSONband[0].money = 1000000; //cheat so can afford musician
    bandAddMusician(1);
    createBandPlayer(JSONband[0]);
    eventContract(0);
    var result = JSONband[0].contract;
    assert.ok (result == false, "eventContract not asked for contract! Result = " + result);
  });
  QUnit.test( "askSignContract(band)", function(assert) {
    JSONband[0].reputation = 1000000; //cheat so can be applicable for contract
    askSignContract(0);
    var result = JSONband[0].contract;
    assert.ok (result != false, "askSignContract band got contract! Result = " + result);
  });
  QUnit.test( "chkAlreadyHaveContract(band)", function(assert) {
    JSONband[0].contract = false; //reset
    gameCreateMusicians(document.getElementById('selNameSet').value);
    JSONband[0].money = 1000000; //cheat so can afford musician
    bandAddMusician(1);
    createBandPlayer(JSONband[0]);
    var result = chkAlreadyHaveContract(0);
    assert.ok (result == false, "chkAlreadyHaveContract does not already have a contract! Result = " + result);
  });
  QUnit.test( "calChanceContract(band)", function(assert) {
    gameCreateMusicians(document.getElementById('selNameSet').value);
    JSONband[0].money = 1000000; //cheat so can afford musician
    bandAddMusician(1);
    createBandPlayer(JSONband[0]);
    var result = calChanceContract(0);
    assert.ok (result == false, "calChanceContract band not met contractThreshold! Result = " + result);
  });
  QUnit.test( "getContract()", function(assert) {
    var result = getContract();
    assert.ok (result >= 0 && result < JSONcontract.length, "Contract is more than 0 and less than JSONcontract.length. Result = " + result);
  });


/*
NOT TESTED
*/
QUnit.module( "default.js" );
  QUnit.test( "updateDate()", function(assert) {
    var resultBefore = GLOBALdatDateCurrent.getDate();
    updateDate();
    var resultAfter = GLOBALdatDateCurrent.getDate();
    assert.ok (resultBefore != resultAfter, "updateDate. Dates are not the same! ResultBefore : " + resultBefore + " - ResultAfter : " + resultAfter);
  });
  QUnit.test( "loggingOutput(i, strAction, strTemp)", function(assert) {
    var resultBefore = GLOBALJSONlog.length;
    loggingOutput(0, "Test Action", "Test Text");
    var resultAfter = GLOBALJSONlog.length;
    assert.ok (resultBefore != resultAfter, "loggingOutput. Lengths are not the same! ResultBefore : " + resultBefore + " - ResultAfter : " + resultAfter);
  });
  QUnit.test( "adminShowLog(i)", function(assert) {
    loggingOutput(0, "Test Action", "Test Text");
    adminShowLog(0);
    var result = document.getElementById("loggingOutput").innerHTML;
    assert.ok (result.indexOf('Test Text') != -1, "adminShowLog Contains correct text. Result = " + result);
  });
  QUnit.test( "updateElement(elemName, strTemp)", function(assert) {
    updateElement("jsGrid", "Test Text");
    var result = document.getElementById("jsGrid").innerHTML;
    assert.ok (result.indexOf('Test Text') != -1, "updateElement Contains correct text. Result = " + result);
  });
  QUnit.test( "createComboBoxMusicianfromBand(JSONtoConvert)", function(assert) {
    gameCreateMusicians("JSONmusicianNamesRockstar");
    JSONband[0].money = 1000000; //cheat so can afford musician
    bandAddMusician(1);
    createBandPlayer(JSONband[0]);
    var result = createComboBoxMusicianfromBand(JSONband[0].musician);
    assert.ok (result.indexOf(JSONmusician[1].name) != -1, "createComboBoxMusicianfromBand Contains correct text. Result = " + result);
  });
  QUnit.test( "displayNumbersWithCommas(10000)", function(assert) {
    var result = displayNumbersWithCommas(10000);
    assert.ok (result == "10,000", "displayNumbersWithCommas Contains correct text. Result = " + result);
  });
  QUnit.test( "formatDate(value)", function(assert) {
    var result = formatDate(GLOBALdatDateCurrent);
    assert.ok (result == "1/01/1989", "formatDate Contains correct text. Result = " + result);
  });
  QUnit.test( "displayContainer(strDivID)", function(assert) {
    displayContainer("jsGrid");
    var result = document.getElementById("jsGrid");
    assert.ok (result.classList.contains("divContainerShow") == true, "displayContainer element has the correct class. Result = " + result.classList);
  });
  QUnit.test( "getActionName(0)", function(assert) {
    var result = getActionName(0);
    assert.ok (result == "practice", "getActionName gets the correct action name. Result = " + result);
  });

/*
NOT TESTED
  gift
*/
QUnit.module( "gift.js" );
  QUnit.test( "setGiftPlayer(intGifts)", function(assert) {
    setGiftPlayer(2);
    var result = JSONband[0].gift;
    assert.ok (result == 2, "setGiftPlayer has set the correct gift number. Result = " + result);
  });
  QUnit.test( "setGift(i, intGift)", function(assert) {
    setGift(0, 2)
    var result = JSONband[0].gift;
    assert.ok (result == 2, "setGift has set the correct gift number. Result = " + result);
  });
  QUnit.test( "getGift()", function(assert) {
    var result = getGift();
    assert.ok (result >= 0 && result < JSONgift.length, "getGift is more than 0 and less than JSONgift.length. Result = " + result);
  });

/*
NOT TESTED
  createChart
*/
QUnit.module( "graph.js" );


/*
NOT TESTED
  guiCreateElements
  guiApplyListeners
  guiDisplayDetailsBand
  guiDisplayActionCost
  guiDisplayMovementLabelMusician
  guiDisplayMovementLabelBand
  guiDisplayActionCurrent
  guiDisplayDate
  getGameStatClass
  guiClearLabels
  guiDisplayDetailsCreateHTMLcomboBoxTopLevel
  guiDisplayDetailsCreateHTMLcomboBox
  guiDisplayDetailsCreateHTMLcomboBoxAlbums
  guiDisplayDetailsCreateHTMLcomboBoxSingles
  showAlbumSingles
*/
QUnit.module( "gui.js" );


/*
NOT TESTED
  createGrid
*/
QUnit.module( "JSON.js" );


/*
NOT TESTED
  getRandomName
  createName
  getBandName
*/
QUnit.module( "names.js" );


/*
NOT TESTED
  navHideAll
  navHide
  navToggle
  navShow
  navShowSingle
*/
QUnit.module( "nav.js" );


/*
NOT TESTED
  bandAddMusician
  gameSetSettings
*/
QUnit.module( "player.js" );


/*
NOT TESTED
  setPracticePlayer
  setPractice
  practice
  updateMusicianAttribute
  getEquipmentBonusMusician
*/
QUnit.module( "practice.js" );


/*
NOT TESTED
  setPublicityPlayer
  setPublicity
  publicity
  getPublicityBandBonusReputation
  getBandAGGattributeFromMusicians
  getAGGattributeFromMusicians
  getBandAGGattributeFromMusiciansSingle
*/
QUnit.module( "publicity.js" );


/*
NOT TESTED
  setRecordPlayer
  setRecord
*/
QUnit.module( "record.js" );


/*
NOT TESTED.
  setReleasePlayer
  setRelease
  release
  chkBandCanReleaseSingle
  getDateDifference
  singleChoose
  getSinglesOfAlbumYetToBeReleased
  getSingle
*/
QUnit.module( "release.js" );


/*
NOT TESTED
  getTracks
  guiDisplayDetailsSingle
*/
QUnit.module( "tracks.js" );


/*
NOT TESTED
  gameInit
  gameStart
  turnBegin
  turnStart
  turnEnd
  turnFinish
  eventDOWaction
  takewageAway
*/
QUnit.module( "turn.js" );


/*
NOT TESTED
  getTicketsSold
  getBandTotalAttributeFromMusicians
  getVenue
  getTicketPrice
*/
QUnit.module( "venue.js" );
