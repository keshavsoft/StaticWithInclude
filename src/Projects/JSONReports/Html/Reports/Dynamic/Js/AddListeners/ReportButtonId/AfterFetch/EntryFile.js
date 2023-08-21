import { StartFunc as StartFuncFilterTableBody } from "./FilterTableBody.js";
import { StartFunc as StartFuncColumnsTableBody } from "./ColumnsTableBody.js";
import { StartFunc as StartFuncColumnOrderTableBody } from "./ColumnOrderTableBody.js";
import { StartFunc as StartFuncColumnWidthsTableBody } from "./ColumnWidthsTableBody.js";
import { StartFunc as StartFuncShowColumnsInDropdown } from "./ShowColumnsInDropdown.js";
import { StartFunc as StartFuncFillDataListForFilters } from "./FillDataListForFilters.js";

let StartFunc = ({ inResponseAsJson }) => {
    let jVarLocalResponseAsJson = inResponseAsJson;

    if (jVarLocalResponseAsJson !== null) {
        if (jVarLocalResponseAsJson.KTF) {

            jVarGlobalPresentViewData = jVarLocalResponseAsJson.DataFromServer;

            StartFuncFilterTableBody();
            StartFuncColumnsTableBody();
            StartFuncColumnOrderTableBody();
            StartFuncColumnWidthsTableBody();
            StartFuncShowColumnsInDropdown();
            StartFuncFillDataListForFilters();
        };
    };
};

export { StartFunc }