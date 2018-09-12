
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

/*
if the BAND has at least one album
  if the BAND has singles yet to be released in the albums
    if the BAND has not released a single in the past 7 days
      choose a single to release
*/

if (JSONband[i].album === false) {
  //not have album
  setRecord(i, getTracks()); //default action just record album
} else {
  //have album

  //Check for still have singles unreleased
  var arrTemp = getSinglesOfAlbumYetToBeReleased(i);
  if ( (arrTemp.length > 0) && (!chkAlreadyReleasedSingleInPastWeek(i)) ) {
    setRelease(i);
  } else {
    setGig(i, getDays(7), getVenue(), getTicketPrice());
  } //if


} //if




      // if (!chkAlreadyHaveAlbum(i)) {
      //   //returned false so does NOT have any albums so choose action again until it's not 5 = release
      //   console.log("recording");
      //   setRecord(i, getTracks()); //default action just record album
      // } else {
      //   //DO have at least one album so can release?
      //   console.log("else");
      //
      //   //Check for still have singles unreleased
      //   var arrTemp = getSinglesOfAlbumYetToBeReleased(i);
      //   if (arrTemp.length) {
      //     //TODO: Hmmmm
      //     console.log("arrTemp.length");
      //
      //     if (chkAlreadyReleasedSingleInPastWeek(i) == false) {
      //       //false so NOT released in the past week
      //       console.log("setRelease");
      //       setRelease(i);
      //     } else {
      //       console.log("setGig");
      //       setGig(i, getDays(7), getVenue(), getTicketPrice());
      //     } //if
      //
      //   } else {
      //     console.log("setRecord");
      //     setRecord(i, getTracks()); //default action just record album
      //   } //if
      //
      // } //if
    break;
    default:
  } //switch

} //function

// THIS IS THE PROBLEM!
function chkAlreadyReleasedSingleInPastWeek(i) {
  var boolReturnValue = false;
  var arrTemp = [];
      arrTemp = getReleasedSinglesAll();
  for (s in arrTemp) {
    //for every single released
    if (i == getBandFromAlbum(arrTemp[s].album)) {
      //band found
      var date1 = new Date(GLOBALdatDateCurrent);
      var date2 = new Date(arrTemp[s].releasedDate);
      var timeDiff = date2.getTime() - date1.getTime();
      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
console.log(JSONband[i].name + " are trying to release. diffDays: " + diffDays);
      if(diffDays < -7) {
console.log(JSONband[i].name + " diffDays < 7! so release");
        boolReturnValue = true;
      } //if
    } //if
  } //for
  return boolReturnValue;
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
