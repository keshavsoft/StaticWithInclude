let StartFunc = async ({ inResponse, inBodyData }) => {

    switch (inResponse.KTF) {
        case true:
            let jVarLocalNewLocation = "";
            jVarLocalNewLocation += `?inFolderName=${inBodyData.FolderName}`
            jVarLocalNewLocation += `&inFileName=${inBodyData.FileName}`
            jVarLocalNewLocation += `&inItemName=${inBodyData.ItemName}`
            jVarLocalNewLocation += `&inScreenName=${inBodyData.ScreenName}`
            jVarLocalNewLocation += `&subtablecolumnkey=${inBodyData.SubGridKey}`;
            jVarLocalNewLocation += `&inColumnName=${inBodyData.BodyAsJson.DataAttribute1}`;
            window.location = jVarLocalNewLocation;

            break;

        case false:
            Swal.fire('Not Update Data')
            break;
        default:
    };
};

export { StartFunc };