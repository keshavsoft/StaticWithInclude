let StartFunc = ({ inFetchData }) => {
    if (inFetchData.KTF) {

        let jVarLocalFetchData = inFetchData.JsonData;
        jVarGlobalPresentViewData2 = jVarLocalFetchData;
        
        jFLocalToInputInputPkId({ inInputPkId: jVarLocalFetchData.pk });
        jFLocalToInputInputProductNameId({ inInputProductNameId: jVarLocalFetchData.ItemName });
        jFLocalToInputInputSalePriceId({ inInputSalePriceId: jVarLocalFetchData.Rate });
        jFLocalRunSaveClick();
    } else {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: `${inFetchData.KReason}`
        });
    }
};

let jFLocalRunSaveClick = () => {
    let jVarLocalHtmlId = 'ButtonSaveId';
    let jVarLocalButtonSaveId = document.getElementById(jVarLocalHtmlId);
    jVarLocalButtonSaveId.click();
}

let jFLocalToInputInputProductNameId = ({ inInputProductNameId }) => {
    let jVarLocalHtmlId = 'InputProductNameId';
    let jVarLocalInputProductNameId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalInputProductNameId === null === false) {
        jVarLocalInputProductNameId.value = inInputProductNameId;
    };
};

let jFLocalToInputInputSalePriceId = ({ inInputSalePriceId }) => {
    let jVarLocalHtmlId = 'InputSalePriceId';
    let jVarLocalInputSalePriceId = document.getElementById(jVarLocalHtmlId);
    jVarLocalInputSalePriceId.value = inInputSalePriceId;
};

let jFLocalToInputInputPkId = ({ inInputPkId }) => {
    let jVarLocalHtmlId = 'InputPkId';
    let jVarLocalInputPkId = document.getElementById(jVarLocalHtmlId);
    jVarLocalInputPkId.value = inInputPkId;
};

export { StartFunc };