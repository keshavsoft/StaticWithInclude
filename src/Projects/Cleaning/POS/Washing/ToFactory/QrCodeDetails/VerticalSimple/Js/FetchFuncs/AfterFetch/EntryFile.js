let StartFunc = ({ inFetchData }) => {
    if (inFetchData.KTF) {
        jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray(inFetchData.DataFromServer);
        jVarGlobalPresentViewData[0].HTMLControlType = "VerticalSimple";
        jVarGlobalKeshavSoftLocalFuncsObject.AppendToDOM.RequiredHtml({
            inData: jVarGlobalPresentViewData,
            inHtmlParent: jVarCardBody
        });
    };
};

export { StartFunc }