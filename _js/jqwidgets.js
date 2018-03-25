
function guiActionCostCalc(intTemp) {

  var strTemp = "";
  strTemp +=  "It will cost " + JSONconfig[0].currency + displayNumbersWithCommas(JSONconfig[0].costPractice) + " per day";
  strTemp +=  "Thats a total of " + JSONconfig[0].currency + displayNumbersWithCommas((JSONconfig[0].costPractice * intTemp)) + " for " +intTemp+ "  days";
  updateElement("divActionCost", strTemp);
} //function

function createTableDetails(strID, JSONtoUse, i) {

var bob = []; //new array
//bob.push(JSONtoUse[i]);

if (JSONtoUse[i].musician) {  //check if have musician attribute
//a band request

  for (a in JSONtoUse[i].musician) {
    //for every musician in band
    bob.push(JSONmusician[JSONtoUse[i].musician[a]]);
  } //for

  var arrDataFields = [
    { name: 'name', type: 'string' }
    ,{ name: 'reputation', type: 'number' }
    ,{ name: 'wage', type: 'number' }
    ,{ name: 'fee', type: 'number' }

    // ,{ name: 'money', type: 'int' }
    // ,{ name: 'musician', type: 'string' }
    // ,{ name: 'equipment', type: 'int' }
    // ,{ name: 'action', type: 'int' }
    // ,{ name: 'days', type: 'int' }
    // ,{ name: 'album', type: 'string' }
    // ,{ name: 'dateActionFinish', type: 'string' }
  ]; //arrDataFields

  var arrDataColumns = [
    { text: 'Musician', dataField: 'name' }
    ,{ text: 'Reputation', dataField: 'reputation', aggregates: ['sum', 'min', 'max', 'avg'] }
    ,{ text: 'Wage', dataField: 'wage', aggregates: ['sum', 'min', 'max', 'avg'] }
    ,{ text: 'Fee', dataField: 'fee', aggregates: ['sum', 'min', 'max', 'avg'] }


    // ,{ text: 'Money', dataField: 'money' }
    // ,{ text: 'Musician', dataField: 'musician' }
    // ,{ text: 'equipment', dataField: 'equipment' }
    // ,{ text: 'action', dataField: 'action'}
    // ,{ text: 'Days', dataField: 'days' }
    // ,{ text: 'Album', dataField: 'album' }
    // ,{ text: 'Date Finish', dataField: 'dateActionFinish' }
  ]; //arrDataColumns


} else {
  //single musician?

  var arrDataFields = [
    { name: 'name', type: 'string' }
    ,{ name: 'reputation', type: 'int' }
//        ,{ name: 'reputation', type: 'int' }
  ]; //arrDataFields

  var arrDataColumns = [
    { text: 'Name', dataField: 'name', width: 300 }
   ,{ text: 'Reputation', dataField: 'reputation', width: 300 }
  ]; //arrDataColumns

  bob.push(JSONtoUse[i]);
} //if


//alert("bob.name: " + bob[i].name);
  var source = {
      localData: bob,
      dataType: "array",
      dataFields: arrDataFields,

      sortcolumn: 'name'
      ,sortdirection: 'asc'
//      ,id: 'id'
//            url: url
  };
  var dataAdapter = new $.jqx.dataAdapter(source);
  $("#" + strID).jqxDataTable(
  {
      width: '100%'
      ,pageable: true
      ,pagerButtonsCount: 10
      ,source: dataAdapter
      ,columns: arrDataColumns

      ,columnsResize: true
      ,sortable: true
      ,altRows: true

      ,showAggregates: true
      ,aggregatesHeight: 90

  });




} //function

  function createGUI() {

  var layout = [{
      type: 'layoutGroup',
      orientation: 'horizontal',
      items: [{
          type: 'layoutGroup',
          orientation: 'vertical',
          width: '70%',
          items: [{
              type: 'documentGroup',
              height: '50%',
              minHeight: '20%',
              items: [
{
  type: 'documentPanel',
  title: 'Start Game',
  contentContainer: 'guiStartGame'
}
,{
  type: 'documentPanel',
  title: 'Practice',
  contentContainer: 'guiPractice'
}
,{
  type: 'documentPanel',
  title: 'Gig',
  contentContainer: 'guiGig'
}
,{
  type: 'documentPanel',
  title: 'Publicity',
  contentContainer: 'guiPublicity'
}
,{
  type: 'documentPanel',
  title: 'Gifts',
  contentContainer: 'guiGifts'
}
,{
  type: 'documentPanel',
  title: 'Record',
  contentContainer: 'guiRecord'
}
,{
  type: 'documentPanel',
  title: 'Release',
  contentContainer: 'guiRelease'
}
,{
  type: 'documentPanel',
  title: 'Player',
  contentContainer: 'guiBandPlayerDetails'
}
,{
  type: 'documentPanel',
  title: 'Band',
  contentContainer: 'guiTest'
}
            ]
          }
          //END OF TOP LEFT

          , {
              type: 'tabbedGroup',
              height: '50%',
              pinnedHeight: '10%',
              items: [{
                  type: 'layoutPanel',
                  title: 'Buttons',
                  contentContainer: 'buttonsPanel'
              }, {
                  type: 'layoutPanel',
                  title: 'Data',
                  contentContainer: 'tableDataPanel',
                  selected: true
              }]
          }]
      }
//END OF BOTTOM LEFT
,

//START TOP RIGHT
{
    type: 'layoutGroup',
    orientation: 'vertical',
    width: '30%',
    items: [{
        type: 'documentGroup',
        height: '70%',
        minHeight: '20%',
        items: [
{
  type: 'documentPanel',
  title: 'All Bands',
  contentContainer: 'guiBand'
}
,{
  type: 'documentPanel',
  title: 'All Musicians',
  contentContainer: 'guiMusicians'
}
,{
  type: 'documentPanel',
  title: 'Your Band',
  contentContainer: 'guiBandPlayer'
}


      ]
    }
//END TOP RIGHT
    ,
//START BOTTOM RIGHT
     {
        type: 'tabbedGroup',
        height: '30%',
        pinnedHeight: '10%',
        items: [{
            type: 'layoutPanel',
            title: 'Logging Output',
            contentContainer: 'testGUI1'
        }, {
            type: 'layoutPanel',
            title: 'Dunno',
            contentContainer: 'testGUI2',
            selected: true
        }]
    }
//END BOTTOM RIGHT

  ]}
  ]
  }];


  $('#dockingLayout').jqxDockingLayout({ width: '100%', height: 600, layout: layout });

  $("#tableMatMusician").on('rowClick', function(event) {
    alert("Row with bound index: " +  event.args.row.name +" has been clicked.");
  });

} //function

function createJQWidgetTreeBandSingle(i) {
  var arrItem = [];
  var arrTemp = [];
  var arrChildren = [];
  var arrChildrenChildren = [];
  var object = [];
  var JSONtoUse = JSONband;
//  for (i in JSONtoUse) {
    //in every band
    arrItem = {
      icon: ''//'_js/jqwidgets/images/star.png'
      ,label: JSONtoUse[i].name
      ,items: []
    }; //arrItem
   object = JSONtoUse[i];//put your object here
    for(var key in object) {
      //for every node in band
      if(object.hasOwnProperty(key)) {
        var property = object[key];
        arrChildren = {
          icon: ''//'_js/jqwidgets/images/check_indeterminate_disabled.png'
          ,disabled:true
          ,label: '' + key.toUpperCase() + ' : ' + property
          ,items: []
        }; //arrItem
      } //if
      arrItem.items.push(arrChildren);
    } //for
    for (v in JSONtoUse[i].musician) {
      //for every musician in a band
      arrChildren = {
        icon: ''//'_js/jqwidgets/images/sotd.png'
        ,label: JSONmusician[(JSONtoUse[i].musician[v])].name
        ,items: []
      }; //arrItem
      object = JSONmusician[JSONtoUse[i].musician[v]];//put your object here
       for(var key in object) {
         //for every node in musician
         if(object.hasOwnProperty(key)) {
           var property = object[key];
           arrChildrenChildren = {
             icon: ''//'_js/jqwidgets/images/check_indeterminate_black.png'
             ,disabled:true
             ,label: '' + key.toUpperCase() + ' : ' + property
             ,items: []
           }; //arrItem
         } //if
         arrChildren.items.push(arrChildrenChildren);
       } //for
      arrItem.items.push(arrChildren);
    } //for
    arrTemp.push(arrItem);
//  } // for musician
  return arrTemp;

} //function

function createJQWidgetTreeBands(JSONtoUse) {
  var arrItem = [];
  var arrTemp = [];
  var arrChildren = [];
  var arrChildrenChildren = [];
  var object = [];
  for (i in JSONtoUse) {
    //in every band
    arrItem = {
      icon: ''//'_js/jqwidgets/images/star.png'
      ,label: JSONtoUse[i].name
      ,items: []
    }; //arrItem

   object = JSONtoUse[i];//put your object here
    for(var key in object) {
      //for every node in band
      if(object.hasOwnProperty(key)) {
        var property = object[key];
        arrChildren = {
          icon: ''//'_js/jqwidgets/images/check_indeterminate_disabled.png'
          ,disabled:true
          ,label: '' + key.toUpperCase() + ' : ' + property
          ,items: []
        }; //arrItem
      } //if
      arrItem.items.push(arrChildren);
    } //for


    for (v in JSONtoUse[i].musician) {
      //for every musician in a band
      arrChildren = {
        icon: ''//'_js/jqwidgets/images/sotd.png'
        ,label: JSONmusician[(JSONtoUse[i].musician[v])].name
        ,items: []
      }; //arrItem

      object = JSONmusician[JSONtoUse[i].musician[v]];//put your object here
       for(var key in object) {
         //for every node in musician
         if(object.hasOwnProperty(key)) {
           var property = object[key];
           arrChildrenChildren = {
             icon: ''//'_js/jqwidgets/images/check_indeterminate_black.png'
             ,disabled:true
             ,label: '' + key.toUpperCase() + ' : ' + property
             ,items: []
           }; //arrItem
         } //if
         arrChildren.items.push(arrChildrenChildren);
       } //for


      arrItem.items.push(arrChildren);
    } //for
    arrTemp.push(arrItem);
  } // for musician
  return arrTemp;
} //function

function createJQWidgetTreeMusicians(JSONtoUse) {
  var arrItem = [];
  var arrTemp = [];
  var arrChildren = [];
  var object = [];
  for (i in JSONtoUse) {
    //in every musician
    arrItem = {
      icon: ''//'_js/jqwidgets/images/sotd.png'
      ,label: JSONtoUse[i].name
      ,items: []
    }; //arrItem
   object = JSONtoUse[i];//put your object here
    for(var key in object) {
      //for every node in musician
      if(object.hasOwnProperty(key)) {
        var property = object[key];
        arrChildren = {
          icon: ''//'_js/jqwidgets/images/check_indeterminate_black.png'
          ,disabled:true
          ,label: '' + key.toUpperCase() + ' : ' + property
          ,items: []
        }; //arrItem
      } //if
      arrItem.items.push(arrChildren);
    } //for
    arrTemp.push(arrItem);
  } // for musician
  return arrTemp;
} //function
