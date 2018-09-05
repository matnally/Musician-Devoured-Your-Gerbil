
function bandActionChoose() {
  //set each band's action attribute
  for (i in JSONband) {
    actionChoose(i);
  } //for
} //function

function actionChoose(i) {
  //sets but doesn't execute action for a band

  var intDays = 0;
  var intGifts = 0;
  var intVenue = 0;
  var intTicketPrice = 0;
  var intTracks = 0;

  var intAction = 0;
      intAction = Math.floor(Math.random() * 6); //randomise action

  //START CHECK record / release
  if ((intAction == 4) || (intAction == 5)) { // 4 = record - 5 = release
    //record / release has been chosen as an action
    if (chkAlreadyHaveContract(i) == false) {
      //band DOES NOT have a record contract already so can't choose 4 or 5
      do {
        //redo action
        intAction = Math.floor(Math.random() * 6); //randomise action
      } while ((intAction == 4)||(intAction == 5)); //do
    } else {
      //band DOES have a record contract already

      //START CHECK has recorded album?
      if (JSONband[i].album == false) {
        //band HAS NOT recorded an album yet so can't release (5)
        do {
          //redo action
          intAction = Math.floor(Math.random() * 6); //randomise action
        } while (intAction == 5); //do 5 = release
      } else {
        //band HAS recorded an album and is active so can't rerecord (4) but can release (5)
        do {
          //redo action
          intAction = Math.floor(Math.random() * 6); //randomise action
        } while (intAction == 4); //do 4 = record
      } //if  (JSONband[i].album == false)
      //END CHECK has recorded album?

    } //if chkAlreadyHaveContract
  } //if ((intAction == 4) || (intAction == 5))
  //END CHECK record / release

  switch(intAction) {
    case 0:
      //practice
      intDays = getDays(7);
    break;
    case 1:
      //gig
      intDays = getDays(7);
      intVenue = getVenue();
      intTicketPrice = getTicketPrice();
    break;
    case 2:
      //publicity
      intDays = 1;
    break;
    case 3:
      //gifts
      intDays = 1;
      intGifts = getGift();
    break;
    case 4:
      //record

      //get the number of days needed to record album
      intTracks = getTracks();
      intDays = JSONtracks[intTracks].days;

    break;
    case 5:
      //release
      intDays = 1;
    break;
  } //switch

  var datDateActionFinish = 0;
      datDateActionFinish = getDateActionFinish(intDays);

  //action chosen so update band object
  JSONband[i].action = intAction;
  JSONband[i].days = intDays;
  JSONband[i].dateActionFinish = datDateActionFinish;
  JSONband[i].gift = intGifts;
  JSONband[i].venue = intVenue;
  JSONband[i].ticketPrice = intTicketPrice;
  JSONband[i].tracks = intTracks;

} //function



function bandActionExecute() {
  //execute each band's action

  for (i in JSONband) {
    //looping through all the bands

    //action finish check
    var datDateActionFinish = new Date(JSONband[i].dateActionFinish);
    if (GLOBALdatDateCurrent.getTime() === datDateActionFinish.getTime()) {
      //today is the day the action move finishes
      if (i != 0) { //NOT equals zero so its NOT the player's band (first created)
        actionChoose(i);  //sets next action for a band  IMPORTANT!!!
      } else {
        turnEnd();
      } //if (i != 0)
    } //if

    loggingOutput(JSONband[i].name + " TURN", "*****" + getActionName(JSONband[i].action) + "*****<br>");

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
        //CAN'T CREATE ALBUM EVERY DAY SO CHECK!
        if (!JSONband[i].album) {
          alert("bandActionExecute: " + i);
          createAlbum(i); //creates the album!
        } //if
      break;
      case 5:
        //release
        release(i);
      break;
      default:
    } //switch

  } //for

} //function
