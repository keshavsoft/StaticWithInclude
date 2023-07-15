let StartFunc = ({ inFromFetch, inBodyData }) => {
    let response = inFromFetch;
    switch (response.KTF) {
        case true:
            //window.location = "";
            let jVarLocalNewLocation = "";
            jVarLocalNewLocation += `?inFolderName=${inBodyData.folderName}`
            jVarLocalNewLocation += `&inFileName=${inBodyData.FileName}`
            jVarLocalNewLocation += `&inItemName=${inBodyData.ItemName}`
            jVarLocalNewLocation += `&inScreenName=${inBodyData.ScreenName}`
            jVarLocalNewLocation += `&inColumnName=${inBodyData.DataAttribute}`;
            window.location = jVarLocalNewLocation;

            break;

        case false:
            Swal.fire('Not Update Data')
            break;
        default:
        // code block
    };

};

export { StartFunc };