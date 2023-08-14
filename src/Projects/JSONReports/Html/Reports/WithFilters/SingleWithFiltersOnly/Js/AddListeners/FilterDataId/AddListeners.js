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

    // jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(jVarLocalStorageDataAsJson);

    // jVarGlobalKeshavSoftLocalFuncsObject.AppendToDOM.RequiredHtml({
    //     inData: jVarGlobalPresentViewData,
    //     inHtmlParent: jVarLocalFilteredTableId
    // });

};

let LocalShowData = () => {
    let jVarLocalFilterObject = {};
    let jVarLocalFilterTableBody = document.getElementById("FilterTableBody");
    let jVarCheckBoxes = jVarLocalFilterTableBody.querySelectorAll('input[type="checkbox"]:checked');

    for (let i = 0; i < jVarCheckBoxes.length; i++) {
        let jVarLoopInsideClosestTr = jVarCheckBoxes[i].closest("tr");
        let jVarLoopInsideSearchInput = jVarLoopInsideClosestTr.querySelector(".SearchInput");
        let jVarLocalFilterKey = jVarLoopInsideSearchInput.dataset.dataattribute;
        jVarLocalFilterObject[jVarLocalFilterKey] = jVarLoopInsideSearchInput.value;
    };

    let jVarLocalNewData = JSON.parse(JSON.stringify(jVarGlobalPresentViewData));

    let jVarlocalTableData = jVarLocalNewData[0].KData.TableData;
    let jVarLocalFilteredTableId = document.getElementById("FilteredTableId");
    let jVarLocalFilteredData = _.filter(jVarlocalTableData, jVarLocalFilterObject);
    let jVarLocalSortedData = _.sortBy(jVarLocalFilteredData, "DateDisplay");

    jVarLocalNewData[0].KData.TableData = jVarLocalSortedData;

    let jVarLocalFromCondition = jFConditionsShowData({ inData: jVarLocalNewData });

    let jVarLocalToShowData = KeshavSoftCrud.BuildFromArray(jVarLocalFromCondition);

    jVarGlobalKeshavSoftLocalFuncsObject.AppendToDOM.RequiredHtml({
        inData: jVarLocalToShowData,
        inHtmlParent: jVarLocalFilteredTableId
    });
};

let StartFunc = () => {
    let jVarLocalFilerButton = document.getElementById("FilterDataId");
    jVarLocalFilerButton.addEventListener("click", LocalShowData);
};

export { StartFunc }