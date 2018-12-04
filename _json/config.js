//store of config settings
var JSONconfig = [{
  //*************************************
  "currency"                      : "£"
  //*************************************
  ,"date"                         : "01-01-1989" //DD-MM-YYYY
  //*************************************
  ,"moneyEasy"                    : 150000
  ,"moneyNormal"                  : 100000 //Normal
  ,"moneyHard"                    : 50000
  //*************************************
  ,"imagesFolder"                 : "_images/"
  ,"theme0"                       : "_images/theme0/"
  ,"theme1"                       : "_images/theme1/"
  //*************************************
  ,"valuePracticeCost"            : 200 //cost per day of practice room
  ,"valuePracticeSkill"           : 1
  ,"valuePracticeHappiness"       : -1
  ,"valuePracticeReputation"      : -1
  //*************************************
  ,"valueGigSkill"                : 2
  ,"valueGigHappiness"            : 1
  ,"valueGigReputation"           : 3
  //*************************************
  ,"sameEquipmentBonus"           : 1 //bonus for same equipment in Practice or Gig
  //*************************************
  ,"valuePublicityCost"           : 5000
  ,"valuePublicityReputationGood" : 10
  ,"valuePublicityReputationBad"  : -10
  ,"valuePublicityDaysDuration"   : 1
  //*************************************
  ,"valueGiftDaysDuration"        : 1
  ,"sameGiftBonus"                : 1
  //*************************************
  ,"valueReleaseCost"             : 20000
  ,"valueReleaseDaysDuration"     : 1 //bonus for same gift
  //*************************************
  ,"contractThreshold"            : 300 //no of points to reach until ask band to sign
  //*************************************
  //Musician Creation
  ,"MusicianReputation"           : 501
  ,"MusicianSkill"                : 501
  ,"MusicianHappiness"            : 501
  //*************************************

  //START of Game text
  ,"gameStart0" : "One day at the office of the Cecil Pitt Theatrical Agency.."
  ,"gameStart1" : "We're finished Clive! Now even <name> has left us! I'm getting out of the theatre biz forever!"
  ,"gameStart3" : "Rock Music, that's where the money is! Yeah, we'll start a rock management business with that <money> your aunt Mabel left you!"
  ,"gameStart4" : "Hey! Rock and roll! Far out, Chief! Let's form a band.."
  ,"gameStart5" : "Go for it Clive! Lead me to the screening room.."
  ,"gameOver"   : "Heavy vibes, boss! We're bankrupt! Ah well, all part of life's rich tapestry I guess!"
  //*************************************
  ,"gameCliveSuffix" : "Outasight Boss!,Outasight Chief!,Unbelievable Boss!,Unbelievable Chief!,OK Boss!,Wild Boss!,OK Chief!,Wild Chief!,Amazing Boss!,Brilliant Boss!,Crazy Boss!,Groovy Boss!,Amazing Chief!,Brilliant Chief!,Crazy Chief!,Groovy Chief!"
  ,"gameCecilSuffix" : "OK Clive!"
  //*************************************
  ,"musicianAdd"  : "This is <musicianBand>, who's on <wage> a week!"
  ,"musicianDead" : "Ho hum, I guess <name> has gone to that great record label in the sky!"
  //*************************************
  ,"contract" : "There's a guy on the phone from <nameContract> who wants to sign <bandName> for <money> and <percent> royalties!"
  //*************************************
  ,"action" : "What shall we do now, Chief?"
  //*************************************
  ,"practiceDescription" : "Practicing, or Jamming as it is know in the business, improves each musician's SKILL by <valuePracticeSkill> but decreases their HAPPINESS by <valuePracticeHappiness> and REPUTATION by <valuePracticeReputation>"
  ,"practiceEstimate"    : "To practice for <practiceEstimateDays> day(s), at <practiceEstimateCost> per day, will cost a total of <practiceEstimateTotal>.<br><br>For each of the <bandMusicians> musician(s) in <bandName> they will recieve <valuePracticeSkill> Skill, <valuePracticeHappiness> Happiness and <valuePracticeReputation> Reputation for each day's practice, not included any extra bonuses for using the musician's favourite equipment"
  ,"practice0"           : "Ho Hum, practice time eh? <gameCliveSuffix> A practice room costs <money> a day!"
  ,"practice1"           : "Locked in there for <days> day(s)"
  ,"practiceDuring"      : "Yawn...,Doze...,Sigh.."
  ,"practiceEnd0"        : "Er... <gameCliveSuffix> I'll bet <bandName> will be note perfect by now!"
  ,"practiceEnd1"        : "Er... <gameCliveSuffix> I'll bet <bandName> will be really tight by now!"
  //*************************************
  ,"gigDescription"  : "Gigging improves each musician's SKILL by <valueGigSkill>, HAPPINESS by <valueGigHappiness> and REPUTATION by <valueGigReputation>"
  ,"gigEstimate"     : "To gig for <gigEstimateDays> day(s), at <gigEstimateVenue> for <gigEstimateCost> per day, will cost a total of <gigEstimateTotal>"
  ,"gigChoice"       : "<gameCliveSuffix> A <nameVenue> seats <seats> and costs <money> to hire a night!"
  ,"gig"             : "Wow, a tour! <gameCliveSuffix>"
  ,"gigDuring0"      : "OK <bandName>, I want you to storm out there tonight and give them hell! Go for it!"
  ,"gigDuring1"      : "OK <bandName>, I want you to storm out there tonight and win them over! Go for it!"
  ,"gigDuring2"      : "OK <bandName>, I want you to storm out there tonight and knock 'em dead! Go for it!"
  ,"gigTicketSales0" : "<gameCecilSuffix> How did the ticket sales go?"
  ,"gigTicketSales1" : "Well Boss, we sold <tickets> tickets charging <price> making <total>!"
  //*************************************
  ,"publicityDescription" : "Wow! A publicity stunt! <gameCliveSuffix> Just leave it to me!<br><br>Publicity costs <valuePublicityCost>, lasts <valuePublicityDaysDuration> day and could add <valuePublicityReputationGood> or subtract <valuePublicityReputationBad> from each musician's REPUTATION, depending on the result"
  ,"publicityEnd0"        : "<gameCliveSuffix> Wow! Any publicity's good publicity, as they say!!!"
  ,"publicityEnd1"        : "Ho hum, that's life I guess boss, er?"
  ,"publicityEndCecil"    : "Shut up Clive!"
  //*************************************
  ,"giftDescription" : "<gameCliveSuffix> Got to keep <bandName> happy, eh? What shall we give our amazing rock stars?"
  ,"giftEstimate"    : "Buying <giftName> for <bandMusicians> musician(s), costing <giftEstimateCost> per musician, will cost a total of <giftEstimateTotal>. Each musician in <bandName> will recieve <giftHappiness> HAPPINESS"
  ,"gift1"           : "The costs per star are <cost>!"
  ,"gift2"           : "The bill's <money>!"
  //*************************************
  ,"wages" : "Heavy vibes boss. It's wages time!"
  //*************************************
  ,"recordDescription" : "<gameCliveSuffix> Let's record an album! Wow! What size studio do you want to use?"
  ,"recordEstimate"    : "To record <recordAlbum> will take <recordDaysDuration> day(s) at <recordEstimateCost> per day and cost a total of <recordEstimateTotal>"
  ,"recordStart"       : "OK <bandName>, let's lay down some super noises!"
  ,"recordDuring0"     : "Wow, amazing! Play that super track, <bandName>! OK!"
  ,"recordDuring1"     : "Another monster noise taped, <gameCliveSuffix>"
  ,"recordDuring2"     : "Another classic hit cut, <gameCliveSuffix>"
  ,"recordDuring3"     : "Wow, far out! Play that mega sound, <gameCliveSuffix> Right on!"
  ,"recordEnd"         : "<gameCliveSuffix> Outasight! That's the best album I've ever heard!"
  //*************************************
  ,"releaseDescription" : "<gameCliveSuffix> Let's make a video! Who shall we get to direct it? Where shall we shoot this movie masterpiece? What shall we feature in this musical masterpiece?"
  ,"releaseEstimate"    : "To release a single it will take <releaseDaysDuration> day(s) and cost a total of <releaseEstimateCost>. To create a music video directed by <releaseDirector> at <releaseStudio> featuring <releaseFeature>, will cost a total of <releaseTotal>. Thats a grand total of <releaseGrandTotal>"
  ,"releaseVideoEnd"    : "Far out video boss! A subtle blend of <feature> and raw music! A movie extravaganza! And all for <money>!"
  //*************************************
  ,"chartPlatinum0" : "<gameCliveSuffix> We've just gone platinum!"
  ,"chartPlatinum1" : "<gameCecilSuffix> I couldn't have done it without you! You're fired!"
  //END of Game text

}];
