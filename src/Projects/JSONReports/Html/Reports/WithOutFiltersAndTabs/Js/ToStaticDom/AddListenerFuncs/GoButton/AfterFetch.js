let StartFunc = ({ inFetchData, inHtmlCardBody }) => {
    let LocalFetchData = inFetchData;
    let jVarLocalHtmlCardBody = inHtmlCardBody;

    if (LocalFetchData !== null) {
        if (LocalFetchData.KTF) {
            jVarGlobalPresentViewData = KeshavSoftCrud.BuildFromArray([{
                HTMLControlType: "ReportTableForPrint",
                KData: LocalFetchData.DataFromServer.KData
            }
            ]);

            jVarGlobalKeshavSoftLocalFuncsObject.AppendToDOM.RequiredHtml({
                inData: jVarGlobalPresentViewData,
                inHtmlParent: jVarLocalHtmlCardBody
            });

            jVarGlobalKeshavSoftLocalFuncsObject.AppendToDOM.SetFocusFuncs.TableShow({ inHtmlParent: jVarLocalHtmlCardBody });
        };
    };
};

export { StartFunc };