
function actionChooseBandAll() {
  //set each band's action
  for (i in JSONband) {
    actionChoose(i);
  } //for
} //function

function actionChoose(i) {
  //sets but doesn't execute action for a band

  switch(getAction()) {
    case 0:
      //practice
      setPractice(i, getDays(7));
    break;
    case 1:
      //gig
      setGig(i, getDays(7), getVenue(), getTicketPrice());
    break;
    case 2:
      //publicity
      setPublicity(i);
    break;
    case 3:
      //gifts
      setGift(i, getGift());
    break;
    case 4:
      //record
      setRecord(i, getTracks()); //default action just record album
    break;
    case 5:
      //release
      if (!chkAlreadyHaveAlbum(i)) {
        //returned false so does NOT have any albums so choose action again until it's not 5 = release
        setRecord(i, getTracks()); //default action just record album
      } else {
        //DO have at least one album so can release

        //Check for still have singles unreleased
        var arrTemp = getSinglesOfAlbumYetToBeReleased(i);

        if (arrTemp.length) {
          setRelease(i);
        } else {
          setRecord(i, getTracks()); //default action just record album
        } //if

      } //if
    break;
    default:
  } //switch

} //function

function actionExecuteBandAll() {
  //execute each band's action

  for (i in JSONband) { //looping through all the bands

    var datDateActionFinish = new Date(JSONband[i].dateActionFinish);
    //AT START OR END?????
    //action finish check
    if (GLOBALdatDateCurrent.getTime() === datDateActionFinish.getTime()) {
      //today is the day the action move finishes
      if (i != 0) { //NOT equals zero so its NOT the player's band (first created)
        actionChoose(i);  //sets next action for a band  IMPORTANT!!!
        // console.log("*&*&: " + JSONband[i].name + " action has finished so choose antoher");
      } else {
        turnEnd();
      } //if (i != 0)
    } //if

    loggingOutput(JSONband[i].name + " TURN", "*****" +  JSONband[i].name + " - " + getActionName(JSONband[i].action) + "*****<br>");

    switch((JSONband[i].action)) {
      case 0:
        //practice
        practice(i);
      break;
      case 1:
        //gig
        gig(i);
      break;
      case 2:
        //publicity
        publicity(i);
      break;
      case 3:
      //gift
        gift(i);
      break;
      case 4:
        //record
        if (GLOBALdatDateCurrent.getTime() == datDateActionFinish.getTime()) {//Check if last day of action. If so, do action as can't do it every day!
          createAlbum(i); //creates the album!

if (i=0) {
  //PLAYER
  updateElement("divBandAlbums", guiDisplayDetailsCreateHTMLcomboBoxAlbums("selBandAlbums")); //TODO: Needs to be here?
  showAlbumSingles(document.getElementById("selBandAlbums").value);
} //if

        } //if
      break;
      case 5:
        //release
        if (GLOBALdatDateCurrent.getTime() == datDateActionFinish.getTime()) {//Check if last day of action. If so, do action as can't do it every day!
          release(i);
        } //if
      break;
      default:
    } //switch

    //to do after executing turn for single band
    updateBandReputation(i);  //WRITES and CALS single band reps

  } //for

} //function


//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////

function getAction() {
  return Math.floor(Math.random() * 6);
} //function
