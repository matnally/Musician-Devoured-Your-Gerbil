
function createGrid(JSONtoUse) {

  var strType = "";
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
    objTemp.push({ name: strProperty, type: strType });

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
