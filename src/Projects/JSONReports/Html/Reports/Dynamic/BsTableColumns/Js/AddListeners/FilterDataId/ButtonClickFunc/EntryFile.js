import { StartFunc as StartFuncFilterData } from "./FilterData.js";
import { StartFunc as StartFuncShowColumnsArray } from "./ShowColumnsArray.js";
import { StartFunc as StartFuncColumnOrder } from "./ColumnOrder.js";

let StartFunc = () => {
    jFLocalShowFilters();

    let jVarLocalNewData = JSON.parse(JSON.stringify(jVarGlobalPresentViewData.KData.TableData));
    
    let jVarLocalTableColumns = Object.entries(jVarGlobalPresentViewData.KData.TableColumns).map(element => {
        return element[1]
    });


    let jVarLocalFilteredData = StartFuncFilterData({ inData: jVarLocalNewData });
    let jVarLocalShowColumnsArray = StartFuncShowColumnsArray();


    let jVarLocalFromColumnOrder = StartFuncColumnOrder();

    let jVarLocalPickData = _.map(jVarLocalNewData, function (object) {
        return _.pick(object, [...jVarLocalFromColumnOrder, ..._.difference(jVarLocalShowColumnsArray, jVarLocalFromColumnOrder)]);
    });

    let jVarLocalToShowData = [];

    jVarLocalToShowData.push({
        HTMLControlType: "TableFromData",
        KData: {
            TableData: jVarLocalPickData
        }
    });
    jFLocalPrepareHeaderForDataOnly({ data: jVarLocalTableColumns })
    var $table = $('#FilterDataTable');

    $table.bootstrapTable({ data: jVarLocalFilteredData });

};

let jFLocalShowFilters = () => {

    let jVarLocalHtmlId = 'FilterFormId';
    let jVarLocalFilterFormId = document.getElementById(jVarLocalHtmlId);
    let jVarLocalFromData = serializeObject(jVarLocalFilterFormId);

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

let jFLocalPrepareHeaderForDataOnly = ({ data }) => {
    let jVarLocalHtmlId = 'FiltertableHeadRow';
    let jVarLocaltableHeadRow = document.getElementById(jVarLocalHtmlId);
    let jVarLocalColumns = data;
    jVarLocalColumns.forEach(element => {
        let jVarLocalNewTh = document.createElement("th");
        jVarLocalNewTh.innerHTML = element.DataAttribute;
        jVarLocalNewTh.dataset.field = element.DataAttribute;
        jVarLocaltableHeadRow.appendChild(jVarLocalNewTh);
        console.log("element:", element);
        if (element.ShowTotal) {
            jVarLocalNewTh.setAttribute("data-footer-formatter", "priceFormatter");
            
        }
    });
}

export { StartFunc }