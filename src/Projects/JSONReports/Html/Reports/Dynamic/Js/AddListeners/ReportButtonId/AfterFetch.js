let jFShowFilterTable = () => {
    let jVarLocalTemplateNewTab = document.getElementById("FilterTableRow");
    let jVarLocalFilterTableBody = document.getElementById("FilterTableBody");

    let jVarLocalStorageDataAsJson = jVarGlobalPresentViewData;

    // let jVarLocalTableColumns = jVarLocalStorageDataAsJson[0].KData.TableColumns;

    let jVarLocalTableColumns = Object.keys(jVarGlobalPresentViewData[0]);
    
    jVarLocalTableColumns.forEach((element, LoopIndex) => {
        let jVarLocalHTMLContent = Handlebars.compile(jVarLocalTemplateNewTab.innerHTML)({
            Name: element,
            SNo: LoopIndex + 1,
            DataAttribute: element
        });

        jVarLocalFilterTableBody.insertAdjacentHTML("beforeend", jVarLocalHTMLContent);
    });
};

let jFShowColumnsTable = () => {
    let jVarLocalTemplateNewTab = document.getElementById("ColumnsTableRow");
    let jVarLocalFilterTableBody = document.getElementById("ColumnsTableBody");
    let jVarLocalStorageDataAsJson = jVarGlobalPresentViewData;

    let jVarLocalTableColumns = jVarLocalStorageDataAsJson[0].KData.TableColumns;

    jVarLocalTableColumns.forEach((element, LoopIndex) => {
        let jVarLocalHTMLContent = Handlebars.compile(jVarLocalTemplateNewTab.innerHTML)({
            Name: element.DisplayName,
            SNo: LoopIndex + 1,
            DataAttribute: element.DataAttribute,
            ShowInTable: element.ShowInTable
        });
        jVarLocalFilterTableBody.insertAdjacentHTML("beforeend", jVarLocalHTMLContent);
    });
};

let jFShowColumnsInDropdown = () => {
    //  let jVarLocalStorageData = localStorage.getItem(inUUID);
    //let jVarLocalStorageDataAsJson = JSON.parse(jVarLocalStorageData);
    let jVarLocalStorageDataAsJson = jVarGlobalPresentViewData;

    let jVarLocalTableColumns = jVarLocalStorageDataAsJson[0].KData.TableColumns;

    let str = '';

    jVarLocalTableColumns.forEach((name) => {
        str += '<option value="' + name.DisplayName + '" />';
    });

    document.getElementById("ColumnsList").innerHTML = str;
};

let jFFillDataListForFilters = () => {
    //let jVarLocalStorageData = localStorage.getItem(inUUID);
    //    let jVarLocalStorageDataAsJson = JSON.parse(jVarLocalStorageData);

    let jVarLocalStorageDataAsJson = jVarGlobalPresentViewData;

    let jVarLocalTableColumns = jVarLocalStorageDataAsJson[0].KData.TableColumns;
    let jVarLocalTableData = jVarLocalStorageDataAsJson[0].KData.TableData;

    jVarLocalTableColumns.forEach((element, LoopIndex) => {
        let LoopInsideDataListId = document.getElementById(`DataListForFilter-${LoopIndex + 1}`);
        let LoopInsideFilter = _.keys(_.groupBy(jVarLocalTableData, element.DataAttribute));

        let str = '';

        LoopInsideFilter.forEach((name) => {
            str += '<option value="' + name + '" />';
        });

        LoopInsideDataListId.innerHTML = str;
    });
};

let StartFunc = ({ inResponseAsJson }) => {
    let jVarLocalResponseAsJson = inResponseAsJson;

    if (jVarLocalResponseAsJson !== null) {
        if (jVarLocalResponseAsJson.KTF) {
            // let jVarLocalJsonToDom = [];

            // jVarLocalJsonToDom.push({
            //     HTMLControlType: "Table",
            //     KData: jVarLocalResponseAsJson.DataFromServer.KData
            // });

            // jVarGlobalPresentViewData = jVarLocalJsonToDom;

            jVarGlobalPresentViewData = jVarLocalResponseAsJson.DataFromServer;

            jFShowFilterTable();
            jFShowColumnsTable();
            jFShowColumnsInDropdown();
            jFFillDataListForFilters();
        };
    };
};

export { StartFunc }