
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

      if (getSinglesOfAlbumYetToBeReleased(i).length > 0) {

        if (getSinglesOfAlbumYetToBeReleased(i).length > 10)
          setRelease(i);
        else
          setRecord(i, getTracks()); //default action just record album

      } else
        setRecord(i, getTracks()); //default action just record album

    break;
    case 5:
      //release

      if (chkBandCanReleaseSingle(i)) {
        setRelease(i);
      } else {
        actionChoose(i);
      } //if

    break;
    default:
  } //switch

} //function

function actionExecuteBandAll() {
  //execute each band's action

  for (i in JSONband) { //looping through all the bands

    loggingOutput(i, "DAY", guiDisplayDate(GLOBALdatDateCurrent) + "<br>");

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

    loggingOutput(i, JSONband[i].name, " chose <strong>" + getActionName(JSONband[i].action) + "</strong><br>");

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
        } //if

        //Updates dropdowns so can choose what to release
        if (i==0) {
          //PLAYER
          updateElement("divBandAlbums", guiDisplayDetailsCreateHTMLcomboBoxAlbums("selBandAlbums")); //TODO: Needs to be here?
          showAlbumSingles(document.getElementById("selBandAlbums").value);
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
