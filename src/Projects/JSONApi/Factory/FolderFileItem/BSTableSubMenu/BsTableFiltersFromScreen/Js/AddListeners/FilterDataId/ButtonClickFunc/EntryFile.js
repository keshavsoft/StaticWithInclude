import { StartFunc as StartFuncFilterData } from "./FilterData.js";
import { StartFunc as StartFuncShowColumnsArray } from "./ShowColumnsArray.js";
import { StartFunc as StartFuncColumnOrder } from "./ColumnOrder.js";
import { StartFunc as StartFuncTableColumns  } from "./BsTableFuncs/TableColumns.js";

let StartFunc = async() => {
    jFLocalShowFilters();

    let jVarLocalNewData = JSON.parse(JSON.stringify(jVarGlobalPresentViewData.KData.TableData));

    let jVarLocalTableColumns = Object.entries(jVarGlobalPresentViewData.KData.TableColumns).map(element => {
        return element[1]
    });

    let jVarLocalShowColumnsArray = StartFuncShowColumnsArray();

    let localColumnsData = LocalInsertFunc({ jVarLocalTableColumns, jVarLocalShowColumnsArray });

    let jVarLocalFilteredData = StartFuncFilterData({ inData: jVarLocalNewData });


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
    // jFLocalPrepareHeaderForDataOnly({ data: localColumnsData })
    var $table = $('#FilterDataTable');

    $table.bootstrapTable({
        data: jVarLocalFilteredData,
        columns: StartFuncTableColumns({ data: localColumnsData })

    });

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


let LocalInsertFunc = ({ jVarLocalTableColumns, jVarLocalShowColumnsArray }) => {

    let jVarLocalNewArray = jVarLocalShowColumnsArray.map(element => {

        let jVarLoopInsideFilter = jVarLocalTableColumns.filter(e => e.DisplayName === element);
        element = jVarLoopInsideFilter;
        return element;

    });

    return [...jVarLocalNewArray];
};


export { StartFunc }