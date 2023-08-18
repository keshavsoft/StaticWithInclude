let jFConditionsShowData = ({ inData }) => {
    let jVarLocalStorageDataAsJson = inData;

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

    let jVarLocalReturnData;

    if (jVarLocalFromCondition === ">=" && jVarLocalToCondition === "<=" && jVarLocalColumnSelected === "Date") {
        jVarLocalReturnData = jVarLocalStorageDataAsJson.filter(l1 => {
            return l1.Date >= jVarLocalFromValue && l1.Date <= jVarLocalToValue
        });
    };

    return jVarLocalReturnData;
};

let jFLocalFiterData = ({ inData }) => {
    let jVarLocalFilterObject = {};
    let jVarLocalFilterTableBody = document.getElementById("FilterTableBody");
    let jVarCheckBoxes = jVarLocalFilterTableBody.querySelectorAll('input[type="checkbox"]:checked');

    for (let i = 0; i < jVarCheckBoxes.length; i++) {
        let jVarLoopInsideClosestTr = jVarCheckBoxes[i].closest("tr");
        let jVarLoopInsideSearchInput = jVarLoopInsideClosestTr.querySelector(".SearchInput");
        let jVarLocalFilterKey = jVarLoopInsideSearchInput.dataset.dataattribute;
        jVarLocalFilterObject[jVarLocalFilterKey] = jVarLoopInsideSearchInput.value;
    };

    let jVarLocalNewData = inData;

    let jVarLocalFilteredData = _.filter(jVarLocalNewData, jVarLocalFilterObject);
    // let jVarLocalPickData = _.map(jVarLocalNewData, "Credit");

    return jVarLocalFilteredData;
};

let StartFunc = () => {
    let jVarLocalFilteredTableId = document.getElementById("FilteredTableId");

    let jVarLocalNewData = JSON.parse(JSON.stringify(jVarGlobalPresentViewData));

    let jVarLocalFilteredData = jFLocalFiterData({ inData: jVarLocalNewData });

    let jVarLocalPickData = _.map(jVarLocalFilteredData, function (object) {
        return _.pick(object, ['AccountName', 'Credit']);
    });

    // let jVarLocalSortedData = _.sortBy(jVarLocalFilteredData, "Date");

    // jVarLocalNewData[0].KData.TableData = jVarLocalSortedData;



    // LocalChangeTableColumns({ inTableColumns: jVarLocalNewData[0].KData.TableColumns });

    // let jVarLocalToShowData = KeshavSoftCrud.BuildFromArray(jVarLocalNewData);

    let jVarLocalToShowData = [];

    jVarLocalToShowData.push({
        HTMLControlType: "TableFromData",
        KData: {
            TableData: jVarLocalPickData
        }
    });
    console.log("jVarLocalNewData : ", jVarLocalFilteredData);
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