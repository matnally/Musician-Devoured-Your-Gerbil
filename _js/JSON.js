
function createGrid(JSONtoUse) {

  var strTemp = "";
  var strType = "";
  var intName = "";
  var intPropertyValue = 0;
  var objTemp = [];

  //create array of property names and types for fields to display in grid
  for (var strProperty in this[JSONtoUse][0]) {

    intPropertyValue = this[JSONtoUse][0][strProperty];

    //check the TYPE of the value
    if (isNaN(intPropertyValue)) {
      //string
      strType = "text";
    } else {
      //integer
      strType = "number";
    }

    //look up values and changes
    switch (true) {
      //SHARED PROPERTIES
      case (strProperty == "equipment"):
        objTemp.push({ name: strProperty, type: "text",
            itemTemplate: function(value) {
              return JSONequipment[parseInt(value)].name;
            }
        });
      break;



      //BAND
      case ((strProperty == "name") && (JSONtoUse == "JSONband")):
        objTemp.push({ name: strProperty, type: "text",
            itemTemplate: function(value) {
              intName = value; //store to use as a sort of index
              return value;
            }
        });
      break;
      case (strProperty == "money"):
        objTemp.push({ name: strProperty, type: "number",
            itemTemplate: function(value) {
              return JSONconfig[0].currency + displayNumbersWithCommas(value);
            }
        });
      break;
      case (strProperty == "musician"):
        objTemp.push({ name: strProperty, type: "text",
            itemTemplate: function(value) {
              //Returns a list of musician names rather than an array of numbers
              strTemp = "";
              for (m in JSONband[getJSONIDfromName(intName, JSONband)].musician) {
                strTemp += " - ";
                strTemp += JSONmusician[JSONband[getJSONIDfromName(intName, JSONband)].musician[m]].name + "<br>";
              } //for
              return strTemp;
            }
        });
      break;
      case (strProperty == "album") && (JSONtoUse == "JSONband"):
        objTemp.push({ name: strProperty, type: "text",
            itemTemplate: function(value, item) {
              strTemp = "";
              for (a in JSONband[getJSONIDfromName(intName, JSONband)].album) {
                strTemp += " - ";
                strTemp += JSONalbum[JSONband[getJSONIDfromName(intName, JSONband)].album[a]].name + "<br>";
              } //for
              return strTemp;
            }
        });
      break;
      case (strProperty == "action"):
        objTemp.push({ name: strProperty, type: "text", visible: false });
      break;
      case (strProperty == "days"):
        objTemp.push({ name: strProperty, type: "text", visible: false });
      break;
      case (strProperty == "gift") && (JSONtoUse == "JSONband"):
        objTemp.push({ name: strProperty, type: "text", visible: false });
      break;
      case (strProperty == "dateActionFinish"):
        objTemp.push({ name: strProperty, type: "text", visible: false });
      break;
      case (strProperty == "venue"):
        objTemp.push({ name: strProperty, type: "text", visible: false });
      break;
      case (strProperty == "ticketPrice"):
        objTemp.push({ name: strProperty, type: "text", visible: false });
      break;
      case (strProperty == "contract"):
        objTemp.push({ name: strProperty, type: "text",
            itemTemplate: function(value) {
              if (value == "")
                return "";
              else
                return JSONcontract[parseInt(value)].name;
              // return value;
            }
        });
      break;
      case ((strProperty == "tracks") && (JSONtoUse == "JSONband")):
        objTemp.push({ name: strProperty, type: "text", visible: false });
      break;



      //MUSICIAN
      case (strProperty == "wage"):
        objTemp.push({ name: strProperty, type: "number",
            itemTemplate: function(value) {
              return JSONconfig[0].currency + displayNumbersWithCommas(value);
            }
        });
      break;
      case (strProperty == "fee"):
        objTemp.push({ name: strProperty, type: "number",
            itemTemplate: function(value) {
              return JSONconfig[0].currency + displayNumbersWithCommas(value);
            }
        });
      break;
      case ((strProperty == "gift") && (JSONtoUse == "JSONmusician")):
        objTemp.push({ name: strProperty, type: "text",
            itemTemplate: function(value) {
              return JSONgift[parseInt(value)].name;
            }
        });
      break;



      //ALBUM
      case ((strProperty == "band") && (JSONtoUse == "JSONalbum")):
        objTemp.push({ name: strProperty, type: "text",
            itemTemplate: function(value) {
              return JSONband[value].name;
            }
        });
      break;
      case ((strProperty == "recordedDate") && (JSONtoUse == "JSONalbum")):
        objTemp.push({ name: strProperty, type: "text",
            itemTemplate: function(value) {
              return guiDisplayDate(new Date(value));
            }
        });
      break;
      case ((strProperty == "releasedDate") && (JSONtoUse == "JSONalbum")):
        objTemp.push({ name: strProperty, type: "text", visible: false });
      break;


      //TRACK
      case ((strProperty == "recordedDate") && (JSONtoUse == "JSONsingle")):
        objTemp.push({ name: strProperty, type: "text",
            itemTemplate: function(value) {
              return guiDisplayDate(new Date(value));
            }
        });
      break;
      case ((strProperty == "releasedDate") && (JSONtoUse == "JSONsingle")):
        objTemp.push({ name: strProperty, type: "text",
            itemTemplate: function(value) {

              if (!value)
                return "Not released";
              else
                return guiDisplayDate(new Date(value));

            }
        });
      break;
      case ((strProperty == "album") && (JSONtoUse == "JSONsingle")):
        var intValue = 0;
        objTemp.push({ name: strProperty, type: "text",
            itemTemplate: function(value) {
              intValue = value;
              return JSONalbum[parseInt(value)].name + " (" + value + ")";
            }

            ,valueField: function(value) {
              intValue = value;
              return JSONalbum[parseInt(value)].name;
            }

        });
        objTemp.push({ name: "band", type: "text",
            itemTemplate: function() {
              return JSONband[getBandIDfromAlbum(parseInt(intValue))].name + " (" + intValue + ")";
            }
        });
      break;
      case (strProperty == "chartHistory"):
        objTemp.push({ name: strProperty, type: "text", visible: false });
      break;

      default:
        objTemp.push({ name: strProperty, type: strType });
    } //switch

  } //for

  $("#jsGrid").jsGrid({

    width      : "100%"
    ,height    : "400px"

    ,filtering : false
    ,inserting : false
    ,editing   : false
    ,selecting : true
    ,sorting   : true
    ,paging    : false

    ,data      : this[JSONtoUse]
    ,fields    : objTemp

    ,pagerFormat           : "{first} {prev} {pages} {next} {last}  Page {pageIndex} of {pageCount}"
    ,pagePrevText          : "<"
    ,pageNextText          : ">"
    ,pageFirstText         : "<<"
    ,pageLastText          : ">>"
    ,pageNavigatorNextText : "..."
    ,pageNavigatorPrevText : "..."


    ,rowClick: function(args) {
      // alert(args.item.name);
    } //rowClick

  });

} //function
