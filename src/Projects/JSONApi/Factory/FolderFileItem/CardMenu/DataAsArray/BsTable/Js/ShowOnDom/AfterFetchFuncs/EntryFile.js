import { StartFunc as jFLocalPrepareHeaderForDataOnly } from "./TableColumns.js";
// import { StartFunc as DeleteEntry } from "../../AddListeners/Entry.js";
let StartFunc =async ({ inDataToShow }) => {
    // console.log("inDataToShow:", inDataToShow);

    let localmapData = inDataToShow.map((ele) => {
        return { ...ele.DataConfig, ...ele.Data }
    });
    // console.log('localmapData::', localmapData);


    let jVarLocalDataToShow = localmapData;
    var $table = $('#table');

    $table.bootstrapTable("destroy").bootstrapTable({
        data: jVarLocalDataToShow,
        columns: jFLocalPrepareHeaderForDataOnly({ data: jVarLocalDataToShow })
    });
    // DeleteEntry();
};


// let jFLocalPrepareHeaderForDataOnly = ({ data }) => {
//     let jVarLocalColumns =Object.keys( data[0]);

//     console.log("jVarLocalColumns::", jVarLocalColumns);


//     let jVarLocalReturnArray = [];
//     jVarLocalReturnArray = jVarLocalColumns.map(element => {
//         return {
//             title: element,
//             field: element
//         };
//     });

//     jVarLocalReturnArray.push(
//         {
//             field: 'operate',
//             title: 'Item Operate',
//             align: 'center',
//             clickToSelect: false,
//             events: window.operateEvents,
//             formatter: operateFormatter
//         });

//     return jVarLocalReturnArray;
// };

// function operateFormatter(value, row, index) {
//     return [
//       '<a class="like" href="javascript:void(0)" title="Like">',
//       '<i class="fa fa-heart"></i>',
//       '</a>  ',
//       '<a class="remove" href="javascript:void(0)" title="Remove">',
//       '<i class="fa fa-trash"></i>',
//       '</a>'
//     ].join('')
//   }


export { StartFunc }