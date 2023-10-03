import { StartFunc as StartFuncFilterTableBody } from "./FillTabs/FilterTableBody.js";
import { StartFunc as StartFuncColumnsTableBody } from "./FillTabs/ColumnsTableBody.js";
import { StartFunc as StartFuncColumnOrderTableBody } from "./FillTabs/ColumnOrderTableBody.js";
import { StartFunc as StartFuncColumnWidthsTableBody } from "./FillTabs/ColumnWidthsTableBody.js";
import { StartFunc as StartFuncShowColumnsInDropdown } from "./FillTabs/ShowColumnsInDropdown.js";
import { StartFunc as StartFuncFillDataListForFilters } from "./FillTabs/FillDataListForFilters.js";
let StartFunc = ({ inResponseAsJson }) => {
    let jVarLocalResponseAsJson = inResponseAsJson;

    if (jVarLocalResponseAsJson !== null) {
        if (jVarLocalResponseAsJson.KTF) {

            let jVarLocalData = jVarLocalResponseAsJson.JsonData;
            let jVarLocalDataToShow = jFLocalToArray({ jVarLocalData });
            let jVarLocalTableColumns = Object.keys(jVarLocalDataToShow[0]).map(LoopItem => {
                return {
                    DisplayName: LoopItem,
                    DataAttribute: LoopItem,
                    ShowInTable: true
                };
            })
            let jVarLocalTableData = jVarLocalData;
            
            StartFuncFilterTableBody({ inTableColumns: jVarLocalTableColumns });
            StartFuncColumnsTableBody({ inTableColumns: jVarLocalTableColumns });
            StartFuncColumnOrderTableBody({ inTableColumns: jVarLocalTableColumns });
            StartFuncColumnWidthsTableBody({ inTableColumns: jVarLocalTableColumns });
            StartFuncShowColumnsInDropdown({ inTableColumns: jVarLocalTableColumns });
            StartFuncFillDataListForFilters({
                inTableColumns: jVarLocalTableColumns,
                inTableData: jVarLocalTableData
            });
        };
    };
};

let jFLocalToArray = ({ jVarLocalData }) => {
    let jVarLocalArray = [];
    Object.entries(jVarLocalData).forEach(
        ([key, value]) => {
            jVarLocalArray.push({
                ...value,
                pk: key
            });
        }
    );

    return jVarLocalArray;
};

export { StartFunc }