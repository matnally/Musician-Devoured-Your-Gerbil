//store of config settings
var JSONconfig = [{

  "currency"                      : "£"

  ,"date"                         : "01-01-1989" //DD-MM-YYYY

  ,"moneyEasy"                    : 150000
  ,"moneyNormal"                  : 100000 //Normal
  ,"moneyHard"                    : 50000

  ,"valuePracticeCost"            : 200 //cost per day of practice room
  ,"valuePracticeSkill"           : 1 //practice
  ,"valuePracticeHappiness"       : -1 //practice
  ,"valuePracticeReputation"      : -1 //practice

  ,"valueGigSkill"                : 2 //gig
  ,"valueGigHappiness"            : 1 //gig
  ,"valueGigReputation"           : 3 //gig

  ,"sameEquipmentBonus"           : 1 //bonus to SKILL(change?) for same equipment in Practice or Gig

  ,"valuePublicityCost"           : 5000
  ,"valuePublicityReputationGood" : 10
  ,"valuePublicityReputationBad"  : -10
  ,"valuePublicityDaysDuration"   : 1 //in days

  ,"valueGiftDaysDuration"        : 1 //in days

  ,"sameGiftBonus"                : 1 //gift

  ,"valueReleaseCost"             : 20000
  ,"valueReleaseDaysDuration"     : 1 //in days

  ,"contractThreshold"            : 300 //no of points to reach until ask band to sign

  //Musician Creation
  ,"MusicianReputation" : 501
  ,"MusicianSkill" : 501
  ,"MusicianHappiness" : 501

,"gameStart0" : "One day at the office of the Cecil Pitt Theatrical Agency..."
,"gameStart1" : "We're finished Clive! Now even <name> has left us! I'm getting out of the theatre biz forever!"
,"gameStart3" : "Rock Music, that's where the money is! Yeah, we'll start a rock management business with that <money> your aunt Mabel left you!"
,"gameStart4" : "Hey! Rock and roll! Far out, Chief! Let's form a band..."
,"gameStart5" : "Go for it Clive! Lead me to the screening room..."

,"gameOver" : "Heavy vibes, boss! We're bankrupt! Ah well, all part of life's rich tapestry I guess!"

,"gameCliveSuffix": "Outasight Boss!,Outasight Chief!,Unbelievable Boss!,Unbelievable Chief!,OK Boss!,Wild Boss!,OK Chief!,Wild Chief!,Amazing Boss!,Brilliant Boss!,Crazy Boss!,Groovy Boss!,Amazing Chief!,Brilliant Chief!,Crazy Chief!,Groovy Chief!"
,"gameCecilSuffix" : "OK Clive!"

,"musicianAdd": "This is <nameMusician>, who's on <wage> a week!"
,"musicianDead" : "Ho hum, I guess <name> has gone to that great record label in the sky!"

,"contract" : "There's a guy on the phone from <nameContract> who wants to sign <nameBand> for <money> and <percent> royalties!"

,"action" : "What shall we do now, Chief?"

,"practice0" : "Ho Hum, practice time eh? <gameCliveSuffix> A practice room costs <money> a day!"
,"practice1" : "Locked in there for <days> day(s)"
,"practiceDuring" : "Yawn...,Doze...,Sigh..."
,"practiceEnd0" : "Er... <gameCliveSuffix> I'll bet <nameBand> will be note perfect by now!"
,"practiceEnd1" : "Er... <gameCliveSuffix> I'll bet <nameBand> will be really tight by now!"

,"gigChoice" : "<gameCliveSuffix> A <nameVenue> seats <seats> and costs <money> to hire a night!"
,"gig" : "Wow, a tour! <gameCliveSuffix>"
,"gigDuring0" : "OK <nameBand>, I want you to storm out there tonight and give them hell! Go for it!"
,"gigDuring1" : "OK <nameBand>, I want you to storm out there tonight and win them over! Go for it!"
,"gigDuring2" : "OK <nameBand>, I want you to storm out there tonight and knock 'em dead! Go for it!"
,"gigTicketSales0" : "<gameCecilSuffix> How did the ticket sales go?"
,"gigTicketSales1" : "Well Boss, we sold <tickets> tickets charging <price> making <total>!"

,"publicity" : "Wow! A publicity stunt! <gameCliveSuffix> Just leave it to me!"
,"publicityEnd0" : "<gameCliveSuffix> Wow! Any publicity's good publicity, as they say!!!"
,"publicityEnd1" : "Ho hum, that's life I guess boss, er?"
,"publicityEndCecil" : "Shut up Clive!"

,"gift0" : "<gameCliveSuffix> Got to keep <nameBand> happy, eh? What shall we give our amazing rock stars?"
,"gift1" : "The costs per star are <cost>!"
,"gift2" : "The bill's <money>!"

,"wages" : "Heavy vibes boss. It's wages time!"

,"record" : "<gameCliveSuffix> Let's record an album! Wow! What size studio do you want to use?"
,"recordStart" : "OK <nameBand>, let's lay down some super noises!"
,"recordDuring0" : "Wow, amazing! Play that super track, <nameBand>! OK!"
,"recordDuring1" : "Another monster noise taped, <gameCliveSuffix>"
,"recordDuring2" : "Another classic hit cut, <gameCliveSuffix>"
,"recordDuring3" : "Wow, far out! Play that mega sound, <gameCliveSuffix> Right on!"
,"recordEnd" : "<gameCliveSuffix> Outasight! That's the best album I've ever heard!"

,"release" : "Which one of these heavy grooves shall we release, boss?"
,"releaseVideoStart" : "<gameCliveSuffix> Let's make a video!"
,"releaseVideoDirect" : "Who shall we get to direct it?"
,"releaseVideoLocation" : "Where shall we shoot this movie masterpiece?"
,"releaseVideoFeature" : "What shall we feature in this musical masterpiece?"
,"releaseVideoEnd" : "Far out video boss! A subtle blend of <feature> and raw music! A movie extravaganza! And all for <money>!"

,"chartPlatinum0" : "<gameCliveSuffix> We've just gone platinum!"
,"chartPlatinum1" : "<gameCecilSuffix> I couldn't have done it without you! You're fired!"

}];
