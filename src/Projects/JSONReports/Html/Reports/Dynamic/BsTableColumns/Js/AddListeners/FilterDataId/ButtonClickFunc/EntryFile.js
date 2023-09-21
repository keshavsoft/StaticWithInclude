import { StartFunc as StartFuncFilterData } from "./FilterData.js";
import { StartFunc as StartFuncShowColumnsArray } from "./ShowColumnsArray.js";
import { StartFunc as StartFuncColumnOrder } from "./ColumnOrder.js";

let StartFunc = () => {
    jFLocalShowFilters();
    let jVarLocalFilteredTableId = document.getElementById("FilteredTableId");

    let jVarLocalNewData = JSON.parse(JSON.stringify(jVarGlobalPresentViewData.KData.TableData));

    let jVarLocalFilteredData = StartFuncFilterData({ inData: jVarLocalNewData });
    let jVarLocalShowColumnsArray = StartFuncShowColumnsArray();

    // let jVarLocalPickData = _.map(jVarLocalFilteredData, function (object) {
    //     return _.pick(object, jVarLocalShowColumnsArray);
    // });

    // let jVarLocalPickData = _.map(jVarGlobalPresentViewData, function (object) {
    //     return _.pick(object, ['AccountName', 'Credit']);
    // });


    let jVarLocalFromColumnOrder = StartFuncColumnOrder();

    let jVarLocalPickData = _.map(jVarLocalFilteredData, function (object) {
        return _.pick(object, [...jVarLocalFromColumnOrder, ..._.difference(jVarLocalShowColumnsArray, jVarLocalFromColumnOrder)]);
    });

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

let jFLocalShowFilters = () => {
    let jVarLocalHtmlIdFilterTableBody = 'FilterTableBody';
    let jVarLocalFilterTableBody = document.getElementById(jVarLocalHtmlIdFilterTableBody);

    let jVarLocalHtmlId = 'FilterFormId';
    let jVarLocalFilterFormId = document.getElementById(jVarLocalHtmlId);
    let jVarLocalFromData = serializeObject(jVarLocalFilterFormId);
    console.log("jVarLocalFromData : ", jVarLocalFromData, JSON.stringify(jVarLocalFromData));

    let jVarLocalShowFiltersIdHtmlId = 'ShowFiltersId';
    let jVarLocalShowFiltersId = document.getElementById(jVarLocalShowFiltersIdHtmlId);
    jVarLocalShowFiltersId.innerHTML = JSON.stringify(_.omitBy(jVarLocalFromData, _.isEmpty));
};

let serializeObject = (form) => {
    // Create a new FormData object
    const formData = new FormData(form);

    // Create an object to hold the name/value pairs
    const pairs = {};

    // Add each name/value pair to the object
    for (const [name, value] of formData) {
        pairs[name] = value;
    }

    // Return the object
    return pairs;
};

export { StartFunc }