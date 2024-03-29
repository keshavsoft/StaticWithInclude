import { StartFunc as StartFuncFilterTableBody } from "./FillTabs/FilterTableBody.js";
import { StartFunc as StartFuncColumnsTableBody } from "./FillTabs/ColumnsTableBody.js";
import { StartFunc as StartFuncColumnOrderTableBody } from "./FillTabs/ColumnOrderTableBody.js";
import { StartFunc as StartFuncColumnWidthsTableBody } from "./FillTabs/ColumnWidthsTableBody.js";
import { StartFunc as StartFuncShowColumnsInDropdown } from "./FillTabs/ShowColumnsInDropdown.js";
import { StartFunc as StartFuncFillDataListForFilters } from "./FillTabs/FillDataListForFilters.js";
import { StartFunc as StartFuncColumnDataSortBy } from "./FillTabs/ColumnDataSortBy.js";
// import { StartFunc as StartFuncChangeFunc } from "./ChangeFunc.js";

let StartFunc = ({ inResponseAsJson }) => {
    let jVarLocalResponseAsJson = inResponseAsJson;

    if (jVarLocalResponseAsJson !== null) {
        if (jVarLocalResponseAsJson.KTF) {
            let jVarLocalJsonToDom = [];

            jVarLocalJsonToDom.push({
                HTMLControlType: "Table",
                KData: jVarLocalResponseAsJson.DataFromServer.KData
            });

            jVarGlobalPresentViewData = jVarLocalJsonToDom;
            let jVarLocalTableColumns = jVarGlobalPresentViewData[0].KData.TableColumns;
            let jVarLocalTableData = jVarGlobalPresentViewData[0].KData.TableData;

            // jVarGlobalPresentViewData = jVarLocalResponseAsJson.DataFromServer;
            StartFuncFilterTableBody({ inTableColumns: jVarLocalTableColumns });
            StartFuncColumnsTableBody({ inTableColumns: jVarLocalTableColumns });
            StartFuncColumnOrderTableBody({ inTableColumns: jVarLocalTableColumns });
            StartFuncColumnWidthsTableBody({ inTableColumns: jVarLocalTableColumns });
            StartFuncColumnDataSortBy({ inTableColumns: jVarLocalTableColumns });
            StartFuncShowColumnsInDropdown({ inTableColumns: jVarLocalTableColumns });
            StartFuncFillDataListForFilters({
                inTableColumns: jVarLocalTableColumns,
                inTableData: jVarLocalTableData
            });
            // StartFuncChangeFunc();
        };
    };
};

export { StartFunc }