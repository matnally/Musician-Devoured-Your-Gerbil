
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
      case (strProperty == "name"):
        objTemp.push({ name: strProperty, type: "text",
            itemTemplate: function(value) {
              intName = value; //store to use as a sort of index
              return value;
            }
        });
      break;
      case (strProperty == "gift"):
        objTemp.push({ name: strProperty, type: "text",
            itemTemplate: function(value) {
              return JSONgift[value].name;
            }
        });
      break;
      case (strProperty == "equipment"):
        objTemp.push({ name: strProperty, type: "text",
            itemTemplate: function(value) {
              return JSONequipment[value].name;
            }
        });
      break;

      //BAND
      case (strProperty == "musician"):
        objTemp.push({ name: strProperty, type: "text",
            itemTemplate: function(value) {
              //Returns a list of musician names rather than an array of numbers
              strTemp = "";
              for (m in JSONband[getJSONIDfromName(intName, JSONband)].musician) {
                strTemp += JSONmusician[JSONband[getJSONIDfromName(intName, JSONband)].musician[m]].name + "<br>";
              } //for
              return strTemp;
            }
        });
      break;

      //ALBUM
      case (strProperty == "album"):
        objTemp.push({ name: strProperty, type: "text",
            itemTemplate: function(value) {
              strTemp = "";
              for (a in JSONband[getJSONIDfromName(intName, JSONband)].album) {
                strTemp += JSONalbum[JSONband[getJSONIDfromName(intName, JSONband)].album[a]].name + "<br>";
              } //for
              return strTemp;
            }
        });
      break;
      case (strProperty == "band"):
        objTemp.push({ name: strProperty, type: "text",
            itemTemplate: function(value) {
              return JSONband[value].name;
            }
        });
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
    ,paging    : true

    ,data      : this[JSONtoUse]
    ,fields    : objTemp

    ,pagerFormat           : "{first} {prev} {pages} {next} {last}  Page {pageIndex} of {pageCount}"
    ,pagePrevText          : "<"
    ,pageNextText          : ">"
    ,pageFirstText         : "<<"
    ,pageLastText          : ">>"
    ,pageNavigatorNextText : "..."
    ,pageNavigatorPrevText : "..."

  });

} //function













function getJSONIDfromName(strName, JSONtoUse) {
  var intTemp = 0;
  for (i in JSONtoUse) {
    if (JSONtoUse[i].name == strName) {
      intTemp = i;
    } //if
  } //for
  return intTemp;
} //function
