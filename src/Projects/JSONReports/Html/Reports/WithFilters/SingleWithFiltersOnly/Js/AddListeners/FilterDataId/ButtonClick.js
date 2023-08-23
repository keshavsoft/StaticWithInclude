import { StartFunc as StartFuncFilterTableBody } from "./FromTabs/FilterTableBody.js";
import { StartFunc as StartFuncShowColumnsArray } from "./FromTabs/ShowColumnsArray.js";
import { StartFunc as StartFuncColumnOrder } from "./FromTabs/ColumnOrder.js";

let jFConditionsShowData = ({ inData }) => {
    let jVarLocalFilteredTableId = document.getElementById("FilteredTableId");

    let jVarLocalColumnSelectedId = document.getElementById("ColumnSelectedId");
    let jVarLocalFromValueId = document.getElementById("FromValueId");
    let jVarLocalFromConditionId = document.getElementById("FromConditionId");
    let jVarLocalToValueId = document.getElementById("ToValueId");
    let jVarLocalToConditionId = document.getElementById("ToConditionId");

    let jVarLocalColumnSelected = jVarLocalColumnSelectedId.value;
    let jVarLocalFromValue = jVarLocalFromValueId.value;
    let jVarLocalFromCondition = jVarLocalFromConditionId.value;
    let jVarLocalToValue = jVarLocalToValueId.value;
    let jVarLocalToCondition = jVarLocalToConditionId.value;

    let jVarLocalStorageDataAsJson = inData;

    let jVarLocalTableData = jVarLocalStorageDataAsJson[0].KData.TableData;

    if (jVarLocalFromCondition === ">=" && jVarLocalToCondition === "<=" && jVarLocalColumnSelected === "Date") {
        jVarLocalStorageDataAsJson[0].KData.TableData = jVarLocalTableData.filter(l1 => {
            return l1.Date >= jVarLocalFromValue && l1.Date <= jVarLocalToValue
        });
    };

    return jVarLocalStorageDataAsJson;
};

let StartFunc = () => {
    let jVarLocalFilterObject = StartFuncFilterTableBody();
    let jVarLocalColumnsArray = StartFuncShowColumnsArray();
    let jVarLocalColumnOrder = StartFuncColumnOrder();
    console.log("jVarLocalColumnOrder : ", jVarLocalColumnOrder);
    let jVarLocalNewData = JSON.parse(JSON.stringify(jVarGlobalPresentViewData));

    let jVarlocalTableData = jVarLocalNewData[0].KData.TableData;
    let jVarLocalFilteredTableId = document.getElementById("FilteredTableId");
    let jVarLocalFilteredData = _.filter(jVarlocalTableData, jVarLocalFilterObject);

    let jVarLocalSortedData = _.sortBy(jVarLocalFilteredData, jVarLocalColumnOrder);

    // let jVarLocalSortedData = _.sortBy(jVarLocalFilteredData, "Date");

    jVarLocalNewData[0].KData.TableData = jVarLocalSortedData;

    // jVarLocalNewData[0].KData.TableData = jVarLocalFilteredData;

    LocalChangeTableColumns({ inTableColumns: jVarLocalNewData[0].KData.TableColumns });

    let jVarLocalFromCondition = jFConditionsShowData({ inData: jVarLocalNewData });

    let jVarLocalToShowData = KeshavSoftCrud.BuildFromArray(jVarLocalFromCondition);
    console.log("jVarLocalToShowData jVarLocalToShowData: ", jVarLocalToShowData);
    jVarGlobalKeshavSoftLocalFuncsObject.AppendToDOM.RequiredHtml({
        inData: jVarLocalToShowData,
        inHtmlParent: jVarLocalFilteredTableId
    });
};

let LocalChangeTableColumns = ({ inTableColumns }) => {
    let jVarLocalHtmlId = "ColumnsTableBody";
    let jVarLocalColumnsTableBody = document.getElementById(jVarLocalHtmlId);
    let jVarLocalChecks = jVarLocalColumnsTableBody.querySelectorAll("input[type=checkbox]");

    for (let i = 0; i < jVarLocalChecks.length; i++) {
        let LocalFind = inTableColumns.find(element => {
            return element.DataAttribute === jVarLocalChecks[i].dataset.dataattribute;
        });

        LocalFind.ShowInTable = jVarLocalChecks[i].checked;
    }
};

export { StartFunc }