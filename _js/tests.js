
QUnit.module( "action.js" );
  QUnit.test( "getAction()", function( assert ) {
    var result = getAction();
    assert.ok (result >= 0 && result < 6); //A total of 6 actions - starting at 0
  });


QUnit.module( "album.js" );
  QUnit.test( chkAlreadyHaveAlbum(0), function( assert ) {
    assert.ok( false, "start of game so no albums yet" );
  });
