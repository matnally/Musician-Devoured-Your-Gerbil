
QUnit.module( "action.js" );
  QUnit.test( "getAction()", function( assert ) {
    var result = getAction();
    assert.ok (result >= 0 && result < 6, "Action is between 0-5"); //A total of 6 actions - starting at 0
  });


QUnit.module( "album.js" );
  QUnit.test( "createAlbum(1)", function( assert ) {
    gameCreateMusicians(document.getElementById('selNameSet').value);
    createBandOther();
    var resultBefore = JSONband[1].album.length;
    createAlbum(1);
    var resultAfter = JSONband[1].album.length;
    assert.ok (resultAfter == (resultBefore+1), "Band's albums have increased by 1"); //A total of 6 actions - starting at 0
  });


  QUnit.test( "createTrack(i, intAlbum)", function( assert ) {
    gameCreateMusicians(document.getElementById('selNameSet').value);
    createBandOther();
    createAlbum(1);
    var resultBefore = JSONsingle.length;
    createTrack(1, 0);
    var resultAfter = JSONsingle.length;
    assert.ok (resultBefore < resultAfter, "JSON singles has more than before, so worked?"); //A total of 6 actions - starting at 0
  });



  QUnit.test( "chkAlreadyHaveAlbum(0)", function( assert ) {
    var result = chkAlreadyHaveAlbum(0);
    assert.ok (result == false, "Player's band does NOT have an album as its the start of the game"); //A total of 6 actions - starting at 0
  });
  QUnit.test( "getQualityRatingTrack(1)", function( assert ) {
    gameCreateMusicians(document.getElementById('selNameSet').value);
    createBandOther();
    var result = getQualityRatingTrack(1);
    assert.ok (result > 0, "Value returned from getQualityRatingTrack is more that 0"); //A total of 6 actions - starting at 0
  });
