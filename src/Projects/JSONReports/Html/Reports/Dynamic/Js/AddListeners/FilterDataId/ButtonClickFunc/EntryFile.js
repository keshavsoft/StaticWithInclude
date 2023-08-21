import { StartFunc as StartFuncFilterData } from "./FilterData.js";
import { StartFunc as StartFuncShowColumnsArray } from "./ShowColumnsArray.js";
import { StartFunc as StartFuncColumnOrder } from "./ColumnOrder.js";

let StartFunc = () => {
    let jVarLocalFilteredTableId = document.getElementById("FilteredTableId");

    let jVarLocalNewData = JSON.parse(JSON.stringify(jVarGlobalPresentViewData));

    let jVarLocalFilteredData = StartFuncFilterData({ inData: jVarLocalNewData });
    let jVarLocalShowColumnsArray = StartFuncShowColumnsArray();

    // let jVarLocalPickData = _.map(jVarLocalFilteredData, function (object) {
    //     return _.pick(object, jVarLocalShowColumnsArray);
    // });

    // let jVarLocalPickData = _.map(jVarGlobalPresentViewData, function (object) {
    //     return _.pick(object, ['AccountName', 'Credit']);
    // });


    let jVarLocalFromColumnOrder = StartFuncColumnOrder();

    console.log("jVarLocalShowColumnsArray : ", jVarLocalShowColumnsArray, jVarLocalFromColumnOrder, _.difference(jVarLocalShowColumnsArray, jVarLocalFromColumnOrder));


    let jVarLocalPickData = _.map(jVarLocalFilteredData, function (object) {
        return _.pick(object, [...jVarLocalFromColumnOrder, ..._.difference(jVarLocalShowColumnsArray, jVarLocalFromColumnOrder)]);
    });

    // console.log("jVarLocalFromColumnOrder : ", jVarLocalFromColumnOrder);
    let jVarLocalToShowData = [];

    jVarLocalToShowData.push({
        HTMLControlType: "TableFromData",
        KData: {
            TableData: jVarLocalPickData
        }
    });

    jVarGlobalKeshavSoftLocalFuncsObject.AppendToDOM.RequiredHtml({
        inData: jVarLocalToShowData,
        inHtmlParent: jVarLocalFilteredTableId
    });
};

export { StartFunc }