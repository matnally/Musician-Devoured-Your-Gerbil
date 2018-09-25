

/*
NOT TESTED
  actionChooseBandAll
  actionExecuteBandAll
*/
QUnit.module( "action.js" );
  QUnit.test( "getAction()", function( assert ) {
    var result = getAction();
    assert.ok (result >= 0 && result < 6, "Action is between 0-5");
  });
  QUnit.test( "actionChoose(0)", function( assert ) {
    actionChoose(0);
    var result = JSONband[0].action
    assert.ok (result >= 0 && result <= 4, "Band has a choosen Action");
  });


/*
NOT TESTED
  guiAdminShowJSON
  adminAdminTurn
*/
QUnit.module( "admin.js" );
QUnit.test( "  gameCreateMusicians(document.getElementById('selNameSet').value)", function( assert ) {
  var resultBefore = JSONmusician.length;
  gameCreateMusicians("JSONmusicianNamesRockstar");
  var resultAfter = JSONmusician.length;
  assert.ok (resultAfter > resultBefore, "JSONmusician has more than before, so worked?");
});


/*
NOT TESTED
*/
QUnit.module( "album.js" );
  QUnit.test( "createAlbum(1)", function( assert ) {
    gameCreateMusicians(document.getElementById('selNameSet').value);
    createBandOther();
    var resultBefore = JSONband[1].album.length;
    createAlbum(1);
    var resultAfter = JSONband[1].album.length;
    assert.ok (resultAfter == (resultBefore+1), "Band's albums have increased by 1");
  });
  QUnit.test( "createTrack(i, intAlbum)", function( assert ) {
    gameCreateMusicians(document.getElementById('selNameSet').value);
    createBandOther();
    createAlbum(1);
    var resultBefore = JSONsingle.length;
    createTrack(1, 0);
    var resultAfter = JSONsingle.length;
    assert.ok (resultBefore < resultAfter, "JSON singles has more than before, so worked?");
  });
  QUnit.test( "chkAlreadyHaveAlbum(0)", function( assert ) {
    var result = chkAlreadyHaveAlbum(0);
    assert.ok (result == false, "Player's band does NOT have an album as its the start of the game");
  });
  QUnit.test( "getQualityRatingTrack(1)", function( assert ) {
    gameCreateMusicians(document.getElementById('selNameSet').value);
    createBandOther();
    var result = getQualityRatingTrack(1);
    assert.ok (result > 0, "Value returned from getQualityRatingTrack is more that 0");
  });


/*
NOT TESTED
  getMusiciansRemaining
*/
QUnit.module( "band.js" );
  QUnit.test( "calBandMusicianCost()", function( assert ) {
    var result = calBandMusicianCost();
    assert.ok (result > 0, "Value returned from calBandMusicianCost is more that 0");
  });
  QUnit.test( "createBandPlayer(JSONband[0])", function( assert ) {
    createBandPlayer(JSONband[0]);
    assert.ok (JSONband[0].name == document.getElementById("inpBandName").value
              ,JSONband[0].reputation == calcBandReputation(JSONband[0].musician)
              ,JSONband[0].equipment == document.getElementById("selEquipmentComboBox").value
              ,"Player's band equals band create choices");
  });
  QUnit.test( "createBandOther()", function( assert ) {
    var resultBefore = JSONband.length;
    createBandOther();
    var resultAfter = JSONband.length;
    assert.ok (resultBefore < resultAfter, "JSONband has more than before, so worked?");
  });
  QUnit.test( "updateBandReputation(0)", function( assert ) {
    gameCreateMusicians(document.getElementById('selNameSet').value);
    JSONband[0].money = 1000000; //cheat so can afford musician
    bandAddMusician(0);
    createBandPlayer(JSONband[0]);
    updateBandReputation(0);
    var result = JSONband[0].reputation;
    assert.ok (result == calcBandReputation(JSONband[0].musician), "Band reputation calculated");
  });
  QUnit.test( "calcBandReputation(JSONband[0].musician)", function( assert ) {
    gameCreateMusicians(document.getElementById('selNameSet').value);
    JSONband[0].money = 1000000; //cheat so can afford musician
    bandAddMusician(0);
    createBandPlayer(JSONband[0]);
    updateBandReputation(0);
    var result = JSONband[0].reputation;
    assert.ok (result == calcBandReputation(JSONband[0].musician), "Band reputation calculated");
  });
  QUnit.test( "getDateCurrent()", function( assert ) {
    var result = getDateCurrent();
    assert.ok (result == GLOBALdatDateCurrent, "Date is correct");
  });
  QUnit.test( "getActionDateFinish(0)", function( assert ) {
    var result = getActionDateFinish(1);
    assert.ok (result > GLOBALdatDateCurrent, "Finish date is in the future");
  });
  QUnit.test( "getDays(69)", function( assert ) {
    var result = getDays(69);
    assert.ok (result >= 1 && result < 69, "Days is between 1-69");
  });
  QUnit.test( "getEquipment()", function( assert ) {
    var result = getEquipment();
    assert.ok (result >= 0 && result < JSONequipment.length, "Equipment is more than 0 and less than JSONequipment.length");
  });
  QUnit.test( "getMusiciansRemaining()", function( assert ) {
    var result = getMusiciansRemaining();
    assert.ok (result.length > 0, "More than 0 so still musicians left!");
  });


/*
NOT TESTED
*/
QUnit.module( "calc.js" );
  QUnit.test( "getMarkUpBand(0)", function( assert ) {
    var result = getMarkUpBand(0);
    assert.ok (result != "", "getMarkUpBand is not empty");
  });
  QUnit.test( "getMarkUpGameStartMusician(0)", function( assert ) {
    var result = getMarkUpGameStartMusician(0);
    assert.ok (result != "", "getMarkUpGameStartMusician is not empty");
  });
  QUnit.test( "getMarkUpMusician(0)", function( assert ) {
    var result = getMarkUpMusician(0);
    assert.ok (result != "", "getMarkUpMusician is not empty");
  });
  QUnit.test( "getMarkUpAlbum(0)", function( assert ) {
    var result = getMarkUpAlbum(0);
    assert.ok (result != "", "getMarkUpAlbum is not empty");
  });


/*
NOT TESTED
  getChartSingleMovement
  calcChartTimeSingleQualityRating
  sortArrayByKey
  getBandFromAlbum
  getBandFromMusician
  getReleasedSinglesAll
*/
QUnit.module( "chart.js" );
  QUnit.test( "chartTime()", function( assert ) {
    gameCreateMusicians(document.getElementById('selNameSet').value);
    createBandOther();
    createAlbum(1);
    release(1);
    chartTime();
    var result = document.getElementById("divChart").innerHTML;
    assert.ok (result == "NOT GOT 20 SINGLES YET!", "Not got 20 singles yet so no chart!");
  });


/*
NOT TESTED
  eventContract
  askSignContract
  chkAlreadyHaveContract
  calChanceContract
  getContract
*/
QUnit.module( "contract.js" );


/*
NOT TESTED
  updateDate
  getJSONIDfromName
  loggingOutput
  adminShowLog
  updateElement
  createComboBoxfromJSONband
  displayNumbersWithCommas
  formatDate
  displayContainer
  getActionName
*/
QUnit.module( "default.js" );


/*
NOT TESTED
  setGiftPlayer
  setGift
  gift
  getGift
*/
QUnit.module( "gift.js" );


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
