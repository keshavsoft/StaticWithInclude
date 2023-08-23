let StartFunc = async ({ inResponse, inBodyData }) => {

    let jVarLocalFolderName = inBodyData.folderName;
    let jVarLocalfilename = inBodyData.inFileNameOnly;
    let jVarLocalCloneNameValue = inBodyData.inToFileName;

    switch (inResponse.KTF) {
        case true:
            let jVarLocalNewLocation = "";
            jVarLocalNewLocation += `?inFolderName=${jVarLocalFolderName}`
            jVarLocalNewLocation += `&inFileName=${jVarLocalfilename}`
            jVarLocalNewLocation += `&inToFileName=${jVarLocalCloneNameValue}`
            window.location = jVarLocalNewLocation;
            break;

        case false:
            Swal.fire(`Not Update Data ${inResponse.KReason}`)
            break;
        default:
    };
};

export { StartFunc };