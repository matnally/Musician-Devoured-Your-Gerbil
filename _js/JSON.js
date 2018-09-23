

// function createJSONmusician() {
//
//   var intTotal = 0;
//
//   for (intTotal) {
//
//   } //for
//
// }


function createGrid() {

      $("#jsGrid").jsGrid({
          width: "100%",
          height: "400px",

          inserting: false,
          editing: false,
          sorting: true,
          paging: true,

          data: JSONmusician,

          fields: [
            { name: "name", type: "text" }
            ,{ name: "reputation", type: "number" }
            ,{ name: "skill", type: "number" }
            ,{ name: "happiness", type: "number" }
            ,{ name: "wage", type: "number" }
            ,{ name: "fee", type: "number" }
            // ,{ type: "control" }
          ]
      });

} //function
